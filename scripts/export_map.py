from __future__ import annotations
import json
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile

BASE_DIR = Path(__file__).resolve().parent.parent
XLSX_PATH = BASE_DIR / "地图.xlsx"
MAP_JSON_PATH = BASE_DIR / "map-data.json"


def letters_to_index(col: str) -> int:
    index = 0
    for char in col:
        index = index * 26 + (ord(char.upper()) - 64)
    return index


def load_shared_strings(zip_file: ZipFile, namespace: dict[str, str]) -> list[str]:
    tree = ET.parse(zip_file.open("xl/sharedStrings.xml"))
    return [element.text or "" for element in tree.findall(".//s:t", namespace)]


def load_grid(zip_file: ZipFile, shared_strings: list[str], namespace: dict[str, str]) -> list[list[str]]:
    tree = ET.parse(zip_file.open("xl/worksheets/sheet1.xml"))
    root = tree.getroot()
    grid: list[list[str]] = []

    for row in root.findall(".//s:sheetData/s:row", namespace):
        cells: dict[int, str] = {}
        for cell in row.findall("s:c", namespace):
            reference = cell.attrib["r"]
            col_letters = "".join(filter(str.isalpha, reference))
            col_index = letters_to_index(col_letters)

            value_element = cell.find("s:v", namespace)
            if value_element is None:
                value = ""
            elif cell.attrib.get("t") == "s":
                value = shared_strings[int(value_element.text)]
            else:
                value = value_element.text or ""
            cells[col_index] = value

        if not cells:
            continue
        max_index = max(cells)
        grid.append([cells.get(i, "") for i in range(1, max_index + 1)])

    return grid


def main() -> None:
    namespace = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

    with ZipFile(XLSX_PATH) as zip_file:
        shared_strings = load_shared_strings(zip_file, namespace)
        grid = load_grid(zip_file, shared_strings, namespace)

    MAP_JSON_PATH.write_text(json.dumps(grid, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {MAP_JSON_PATH.name} with {len(grid)} rows")


if __name__ == "__main__":
    main()
