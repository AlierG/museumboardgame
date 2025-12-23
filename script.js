import { boardGrid } from './board-data.js';

const entryCards = [
  { title: '平坡入口', order: 1, note: '没有高差，顺利通行。' },
  { title: '轮椅坡道入口', order: 2, note: '绕路缓慢推行上坡。' },
  { title: '升降平台入口', order: 3, note: '呼叫工作人员开启，需等待。' },
  { title: '台阶出入口', order: 4, note: '靠好心人抬上去，速度最慢。' }
];

const counterCards = [
  { title: '无障碍设施占用 ×5', note: '指定设施无效，用“找管理者反馈”抵消。' },
  { title: '无障碍设施损坏 ×5', note: '指定设施无效，用“立即维修”抵消。' },
  { title: '高差制造器 ×2', note: '产生3格台阶，本回合无法通过；轮椅渡板/斜挂梯/升降平台/强壮好心人可抵消。' },
  { title: '轮椅爆胎 ×1', note: '使对手直接结束回合，可被立即维修抵消。' },
  { title: '呼叫新手保安 ×2', note: '对手本回合无法打出前进卡，有理有据/博物馆熟客/找管理者反馈可抵消。' },
  { title: '超级小偷 ×1', note: '随机丢掉对方两张牌，或使“车底挂包”失效。' },
  { title: '加厚吸音地毯 ×3', note: '本回合无法打出前进卡；越野轮胎/强力防滑手套/强壮好心人抵消。' },
  { title: '非标准轮椅坡道 ×3', note: '退回上一格并结束回合；翘轮/强力防滑手套/强壮好心人抵消。' },
  { title: '手掌磨破 ×2', note: '弃掉一张前进卡；强力防滑手套抵消。' },
  { title: '轮椅后翻 ×2', note: '在对手使用翘轮时打出，使其回合结束；强壮好心人抵消。' }
];

const actionCards = [
  { title: '强壮好心人 ×1', note: '本回合若打出行动卡可额外前进1格。' },
  { title: '立即维修 ×4', note: '查看指定对手，移除其“无障碍设施损坏”。' },
  { title: '找管理者反馈 ×2', note: '查看指定对手，移除其“无障碍设施占用”。' },
  { title: '无障碍电梯 ×3', note: '抽1张卡并可放1张到底。可损坏/可占用。' },
  { title: '斜挂梯 ×1', note: '本回合不能移动，可从弃牌堆取1张设施牌。可损坏。' },
  { title: '升降平台 ×1', note: '查看随机事件顶牌，可移入弃牌堆。可损坏。' },
  { title: '无障碍厕所 ×2', note: '弃0-2张并补等量。可占用/可损坏。' },
  { title: '低位服务设施 ×2', note: '所有玩家从下一顺位玩家盲抽1张。可占用。' },
  { title: '电动门 ×2', note: '抽1张牌，可被损坏/占用。' },
  { title: '轮椅渡板 ×2', note: '直接激活相邻格子功能（展品除外）。可损坏。' },
  { title: '轮椅席位 ×2', note: '若本回合未移动，结束时额外抽1。可占用。' },
  { title: '无障碍通识 ×2', note: '检索一张设施类行动卡并展示后加入手牌。' },
  { title: '有理有据 ×2', note: '指定对手，下回合禁止使用反制卡。' },
  { title: '翘轮 ×2', note: '指定对手，下回合只能打出1张牌。' },
  { title: '灵活走位 ×3', note: '若与对手相邻，可与其交换位置（展品E除外）。' },
  { title: '越野轮胎 ×2', note: '从已打出/弃牌中回收1张前进卡。' },
  { title: '我自己来 ×2', note: '两回合内免疫帮倒忙事件，但不能打出强壮好心人。' },
  { title: '提前做攻略 ×2', note: '查看随机事件顶三张并重新排序。' },
  { title: '精神饱满 ×3', note: '抽两张后弃一张。' },
  { title: '醒目警示旗（装备）×2', note: '免疫下一次人流拥挤事件，生效后弃置。' },
  { title: '强力防滑手套（装备）×2', note: '可配合翘轮过台阶，使用两次后失效；未装备时抵消一次后弃置。' },
  { title: '博物馆熟客 ×2', note: '查看对手手牌并弃掉一张反制卡。' },
  { title: '车底挂包 ×2', note: '摆在面前，手牌上限+1。' },
  { title: '前进1格 ×20', note: '作为回合终结动作向可通行方向移动一格。' }
];

const eventCards = [
  '遇到太重的防火门：退回原格，可用好心人或电动门抵消。',
  '人流拥挤：丢最左侧三张或车底挂包；可用好心人/灵活走位/醒目警示旗抵消。',
  '直梯维修中：两回合不可打出无障碍电梯，可立即维修抵消。',
  '升降平台维修中：两回合不可打出升降平台，可立即维修抵消。',
  '斜挂梯维修中：两回合不可打出斜挂梯，可立即维修抵消。',
  '无障碍厕所维修中：两回合不可打出无障碍厕所，可立即维修抵消。',
  '突然想上厕所：退回最近的无障碍厕所，可用无障碍厕所卡抵消。',
  '触摸展品区太高：若打出低位服务设施，可随机摸走一张卡。',
  '绿色通道【稀有】：若观展最少，瞬移到未参观展品（E除外）。',
  '仿石子路面：丢失1张前进卡；越野轮胎/灵活走位/强壮好心人/翘轮抵消。',
  '展厅有3格台阶：本次无法通过；轮椅渡板/斜挂梯/升降平台/强壮好心人抵消。',
  '展厅有10cm高差：本次无法通过；翘轮/轮椅渡板/强壮好心人抵消。',
  '地上有线缆和减速带：丢最右边两张；翘轮或强壮好心人抵消。',
  '被新手保安盘问：本回合无法打出行动卡；有理有据/博物馆熟客/找管理者反馈抵消。',
  '盲文展签：本回合无法打出前进卡；无障碍通识抵消。',
  '手语导览视频：打出无障碍通识可传送到最近展品（E除外）。',
  '描述展品给视障伙伴：打出无障碍通识可传送到最近展品（E除外）。',
  '神仙设施：获得一张无障碍电梯卡。',
  '网红打卡点：下一个到达的展品需多等待一回合；灵活走位抵消。',
  '过度热心的工作人员：回到前1格并结束回合；我自己来抵消。',
  '尴尬的夸赞：本回合只能打出一张牌。',
  '大字版展签：本回合若打出前进卡可额外前进1格。',
  '静音休息仓：本回合免疫反制卡攻击。'
];

const colors = ['#8fb9ff', '#ff8fb1', '#9df0c4', '#ffd27f'];
let playerCounter = 1;
const state = {
  players: [],
  entryAssignments: [],
  selectedPlayerId: null,
  activeIndex: 0
};

const playerGrid = document.getElementById('player-grid');
const entryOrderEl = document.getElementById('entry-order');
const entryListEl = document.getElementById('entry-cards');
const actionListEl = document.getElementById('action-cards');
const counterListEl = document.getElementById('counter-cards');
const eventListEl = document.getElementById('event-cards');
const boardEl = document.getElementById('board');
const detailEl = document.getElementById('cell-detail');
const legendEl = document.getElementById('legend');

function addPlayer() {
  if (state.players.length >= 4) return;
  const color = colors[state.players.length % colors.length];
  const player = {
    id: playerCounter++,
    name: `玩家${state.players.length + 1}`,
    color,
    exhibits: { A: false, B: false, C: false, D: false, E: false },
    position: null
  };
  state.players.push(player);
  state.selectedPlayerId = player.id;
  renderPlayers();
  renderBoard();
}

function renderPlayers() {
  playerGrid.innerHTML = '';
  state.players.forEach((player, index) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    if (state.selectedPlayerId === player.id) card.classList.add('selected');

    const top = document.createElement('div');
    top.className = 'player-top';
    const colorDot = document.createElement('span');
    colorDot.className = 'player-color';
    colorDot.style.background = player.color;
    top.appendChild(colorDot);

    const nameInput = document.createElement('input');
    nameInput.className = 'player-name';
    nameInput.value = player.name;
    nameInput.addEventListener('input', (e) => {
      player.name = e.target.value || `玩家${index + 1}`;
      renderBoard();
      renderEntryOrder();
    });
    top.appendChild(nameInput);

    card.appendChild(top);

    const badges = document.createElement('div');
    badges.className = 'exhibit-list';

    ['A', 'B', 'C', 'D', 'E'].forEach((exhibit) => {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = player.exhibits[exhibit];
      checkbox.addEventListener('change', () => {
        player.exhibits[exhibit] = checkbox.checked;
        renderPlayers();
      });
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`展品${exhibit}`));
      badges.appendChild(label);
    });
    card.appendChild(badges);

    const info = document.createElement('p');
    const visited = Object.values(player.exhibits).filter(Boolean).length;
    const winner = visited === 5;
    info.className = 'muted';
    const posText = player.position ? `位置：R${player.position.row + 1}-C${player.position.col + 1}` : '未放置棋子';
    info.textContent = `${posText} · 已参观 ${visited}/5${winner ? '（完成！）' : ''}`;
    card.appendChild(info);

    const entry = state.entryAssignments.find((item) => item.playerId === player.id);
    if (entry) {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.innerHTML = `<span class="dot" style="background:${player.color}"></span>${entry.title} · 顺位 ${entry.order}`;
      card.appendChild(badge);
    }

    const selectBtn = document.createElement('button');
    selectBtn.textContent = '选择玩家以放置棋子';
    selectBtn.className = 'ghost';
    selectBtn.addEventListener('click', () => {
      state.selectedPlayerId = player.id;
      renderPlayers();
    });
    card.appendChild(selectBtn);

    if (winner) {
      const winBadge = document.createElement('div');
      winBadge.className = 'badge success';
      winBadge.innerHTML = '<span class="dot" style="background:var(--success)"></span>已完成全部展品！';
      card.appendChild(winBadge);
    }

    playerGrid.appendChild(card);
  });
}

function renderEntryOrder() {
  entryOrderEl.innerHTML = '';
  const sorted = [...state.entryAssignments].sort((a, b) => a.order - b.order);
  sorted.forEach((entry, idx) => {
    const player = state.players.find((p) => p.id === entry.playerId);
    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `<strong>${idx + 1}.</strong> ${player?.name || '未知玩家'}<br/><span class="muted">${entry.title} · ${entry.note}</span>`;
    entryOrderEl.appendChild(card);
  });
}

function drawEntryOrder() {
  if (state.players.length < 2) {
    alert('请先添加至少两位玩家。');
    return;
  }
  const deck = [...entryCards];
  const assignments = [];
  state.players.forEach((player) => {
    const pickIndex = Math.floor(Math.random() * deck.length);
    const [card] = deck.splice(pickIndex, 1);
    assignments.push({ ...card, playerId: player.id });
  });
  state.entryAssignments = assignments.sort((a, b) => a.order - b.order);
  state.activeIndex = 0;
  renderEntryOrder();
  renderPlayers();
}

function advanceTurn() {
  if (!state.entryAssignments.length) return;
  state.activeIndex = (state.activeIndex + 1) % state.entryAssignments.length;
  state.selectedPlayerId = state.entryAssignments[state.activeIndex].playerId;
  renderPlayers();
}

function summarize(text) {
  if (!text) return '空格';
  if (text.length <= 18) return text;
  return text.slice(0, 18) + '…';
}

function renderBoard() {
  const maxColumns = Math.max(...boardGrid.map((row) => row.length));
  boardEl.style.gridTemplateColumns = `repeat(${maxColumns}, minmax(130px, 1fr))`;
  boardEl.innerHTML = '';

  boardGrid.forEach((row, rowIndex) => {
    row.forEach((cellText, colIndex) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      const title = document.createElement('p');
      title.className = 'title';
      title.textContent = summarize(cellText);
      const body = document.createElement('p');
      body.className = 'body';
      body.textContent = cellText || '——';
      cell.appendChild(title);
      cell.appendChild(body);

      const chips = document.createElement('div');
      chips.className = 'chips';
      occupants(rowIndex, colIndex).forEach((player) => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.style.borderColor = player.color;
        chip.style.background = `${player.color}22`;
        chip.textContent = player.name;
        chips.appendChild(chip);
      });
      if (chips.children.length) cell.appendChild(chips);

      cell.addEventListener('click', () => {
        const player = state.players.find((p) => p.id === state.selectedPlayerId);
        if (player) {
          player.position = { row: rowIndex, col: colIndex };
          renderPlayers();
          renderBoard();
        }
        renderDetail(cellText, rowIndex, colIndex);
      });

      boardEl.appendChild(cell);
    });
  });
}

function occupants(row, col) {
  return state.players.filter((player) => player.position && player.position.row === row && player.position.col === col);
}

function renderDetail(text, row, col) {
  detailEl.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = `R${row + 1}-C${col + 1}`;
  const desc = document.createElement('p');
  desc.textContent = text || '空格子（无事件）';
  const playersHere = occupants(row, col);
  const list = document.createElement('div');
  list.className = 'chip-list';
  playersHere.forEach((player) => {
    const chip = document.createElement('span');
    chip.className = 'badge';
    chip.innerHTML = `<span class="dot" style="background:${player.color}"></span>${player.name}`;
    list.appendChild(chip);
  });

  detailEl.append(title, desc);
  if (playersHere.length) {
    const caption = document.createElement('p');
    caption.className = 'muted';
    caption.textContent = '当前在此格子的玩家：';
    detailEl.append(caption, list);
  }
}

function renderLists() {
  entryListEl.innerHTML = '';
  entryCards.forEach((card) => {
    entryListEl.appendChild(makeInfoItem(`${card.title}（顺位${card.order}）`, card.note));
  });

  actionListEl.innerHTML = '';
  actionCards.forEach((card) => {
    actionListEl.appendChild(makeInfoItem(card.title, card.note));
  });

  counterListEl.innerHTML = '';
  counterCards.forEach((card) => counterListEl.appendChild(makeInfoItem(card.title, card.note)));

  eventListEl.innerHTML = '';
  eventCards.forEach((text, idx) => eventListEl.appendChild(makeInfoItem(`事件 ${idx + 1}`, text)));
}

function makeInfoItem(title, note) {
  const li = document.createElement('li');
  li.className = 'info-item';
  const h4 = document.createElement('h4');
  h4.textContent = title;
  const p = document.createElement('p');
  p.textContent = note;
  li.append(h4, p);
  return li;
}

function renderLegend() {
  legendEl.innerHTML = '';
  const playerChip = document.createElement('span');
  playerChip.className = 'legend-chip';
  playerChip.textContent = '点击玩家，再点击格子放置棋子';
  legendEl.appendChild(playerChip);

  const note = document.createElement('span');
  note.className = 'legend-chip';
  note.textContent = '格子文字为地图原始描述，前几字作为简写显示';
  legendEl.appendChild(note);
}

function init() {
  document.getElementById('add-player').addEventListener('click', addPlayer);
  document.getElementById('draw-entry').addEventListener('click', drawEntryOrder);
  document.getElementById('advance-turn').addEventListener('click', advanceTurn);
  renderLists();
  renderLegend();
  renderBoard();
  addPlayer();
  addPlayer();
}

init();
