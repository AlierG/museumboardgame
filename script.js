// 将地图数据直接内嵌，方便本地直接双击 HTML 运行
const boardGrid = [
  ["", "", "E", "D", "出入口", "C", "B", "A"],
  [
    "A",
    "无障碍厕所（可被占用，可被损坏）效果与同名卡牌一致，激活效果时先询问其他玩家有没有“占用”“损坏”的反制卡，如果打出则这个厕所无效化",
    "休息区域，若你打出【轮椅席位】可从弃牌堆中回收一张已打出的卡，但如果进行此操作，则本回合无法打出【前进卡】",
    "互动体验区，选择任意一个对手，各自从对方手牌中随机挑选2张卡牌，背面朝上进行交换",
    "（玩家第一回合进入游戏所在格）购票台，办理换票，本回合无法打出【前进卡】，若打出【低位服务设施】则不受此限制，且可额外前进一格",
    "触觉地图，获得一张【无障碍电梯】，本回合无法打出【前进卡】",
    "文创商店，丢弃手中任意数量的卡，并抽取等量卡，本回合无法打出卡牌",
    "无障碍厕所（可被占用，可被损坏）效果与同名卡牌一致，激活效果时先询问其他玩家有没有“占用”“损坏”的反制卡，如果打出则这个厕所无效化"
  ],
  [
    "B",
    "文创商店，丢弃手中任意数量的卡，并抽取等量卡，本回合无法打出卡牌",
    "随机事件（抽取随机事件卡并执行）",
    "参观展品C",
    "随机事件（抽取随机事件卡并执行）",
    "无障碍通道（可被占用），激活时先询问其他玩家有没有“无障碍设施占用”的反制卡，若打出则本回合无法打出【前进卡】（除非用“找管理者反馈“再抵消）",
    "随机事件（抽取随机事件卡并执行）",
    "休息区域，若你打出【轮椅席位】可从弃牌堆中回收一张已打出的卡，但如果进行此操作，则本回合无法打出【前进卡】",
    "E"
  ],
  [
    "C",
    "触觉地图，获得一张【无障碍电梯】，本回合无法打出【前进卡】",
    "无障碍通道（可被占用），激活时先询问其他玩家有没有“无障碍设施占用”的反制卡，若打出则本回合无法打出【前进卡】（除非用“找管理者反馈“再抵消）",
    "随机事件（抽取随机事件卡并执行）",
    "楼层转换，到达此格后，如果要前进到展品E处，需打出“无障碍电梯”“斜挂梯”“升降平台”“强壮好心人”其中的任意一张能让你楼层转换的牌并且成功生效，才可以通过【前进卡】到达展品E，否则【前进卡】只能选择E以外的方向前进。参观完展品E，从展品E方向前进到此格后，也需要满足上述操作才能“下楼”前往展品E以外的其他方向。",
    "随机事件（抽取随机事件卡并执行）",
    "参观展品B",
    "互动体验区，选择任意一个对手，各自从对方手牌中随机挑选2张卡牌，背面朝上进行交换",
    "D"
  ],
  [
    "出入口",
    "（玩家第一回合进入游戏所在格）购票台，办理换票，本回合无法打出【前进卡】，若打出【低位服务设施】则不受此限制，且可额外前进一格",
    "随机事件（抽取随机事件卡并执行）",
    "楼层转换，到达此格后，如果要前进到展品E处，需打出“无障碍电梯”“斜挂梯”“升降平台”“强壮好心人”其中的任意一张能让你楼层转换的牌并且成功生效，才可以通过【前进卡】到达展品E，否则【前进卡】只能选择E以外的方向前进。参观完展品E，从展品E方向前进到此格后，也需要满足上述操作才能“下楼”前往展品E以外的其他方向。",
    "参观展品E",
    "楼层转换，到达此格后，如果要前进到展品E处，需打出“无障碍电梯”“斜挂梯”“升降平台”“强壮好心人”其中的任意一张能让你楼层转换的牌并且成功生效，才可以通过【前进卡】到达展品E，否则【前进卡】只能选择E外的方向前进。参观完展品E，从展品E方向前进到此格后，也需要满足上述操作才能“下楼”前往展品E以外的其他方向。",
    "随机事件（抽取随机事件卡并执行）",
    "（玩家第一回合进入游戏所在格）购票台，办理换票，本回合无法打出【前进卡】，若打出【低位服务设施】则不受此限制，且可额外前进一格",
    "出入口"
  ],
  [
    "D",
    "互动体验区，选择任意一个对手，各自从对方手牌中随机挑选2张卡牌，背面朝上进行交换",
    "参观展品D",
    "随机事件（抽取随机事件卡并执行）",
    "楼层转换，到达此格后，如果要前进到展品E处，需打出“无障碍电梯”“斜挂梯”“升降平台”“强壮好心人”其中的任意一张能让你楼层转换的牌并且成功生效，才可以通过【前进卡】到达展品E，否则【前进卡】只能选择E以外的方向进。参观完展品E，从展品E方向前进到此格后，也需要满足上述操作才能“下楼”前往展品E以外的其他方向。",
    "随机事件（抽取随机事件卡并执行）",
    "无障碍通道（可被占用），激活时先询问其他玩家有没有“无障碍设施占用”的反制卡，若打出则本回合无法打出【前进卡】（除非用“找管理者反馈“再抵消）",
    "触觉地图，获得一张【无障碍电梯】，本回合无法打出【前进卡】",
    "C"
  ],
  [
    "E",
    "休息区域，若你打出【轮椅席位】可从弃牌堆中回收一张已打出的卡，但如果进行此操作，则本回合无法打出【前进卡】",
    "随机事件（抽取随机事件卡并执行）",
    "无障碍通道（可被占用），激活时先询问其他玩家有没有“无障碍设施占用”的反制卡，若打出则本回合无法打出【前进卡】（除非用“找管理者反馈“再抵消）",
    "随机事件（抽取随机事件卡并执行）",
    "参观展品A",
    "随机事件（抽取随机事件卡并执行）",
    "文创商店，丢弃手中任意数量的卡，并抽取等量卡，本回合无法打出卡牌",
    "B"
  ],
  [
    "",
    "无障碍厕所（可被占用，可被损坏）效果与同名卡牌一致，激活效果时先询问其他玩家有没有“占用”“损坏”的反制卡，如果打出则这个厕所无效化",
    "文创商店，丢弃手中任意数量的卡，并抽取等量卡，本回合无法打出卡牌",
    "触觉地图，获得一张【无障碍电梯】，本回合无法打出【前进卡】",
    "（玩家第一回合进入游戏所在格）购票台，办理换票，本回合无法打出【前进卡】，若打出【低位服务设施】则不受此限制，且可额外前进一格",
    "互动体验区，选择任意一个对手，各自从对方手牌中随机挑选2张卡牌，背面朝上进行交换",
    "休息区域，若你打出【轮椅席位】可从弃牌堆中回收一张已打出的卡，但如果进行此操作，则本回合无法打出【前进卡】",
    "无障碍厕所（可被占用，可被损坏）效果与同名卡牌一致，激活效果时先询问其他玩家有没有“占用”“损坏”的反制卡，如果打出则这个厕所无效化",
    "A"
  ],
  ["", "A", "B", "C", "出入口", "D", "E"]
];

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
  activeIndex: 0,
  deck: [],
  discard: [],
  eventDeck: [],
  eventDiscard: [],
  log: []
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
const handEl = document.getElementById('hand');
const deckStatsEl = document.getElementById('deck-stats');
const logEl = document.getElementById('log');
const turnPlayerEl = document.getElementById('turn-player');

const mapPreviewEl = document.getElementById('map-preview');



function parseCount(title) {
  const match = title.match(/×(\d+)/);
  return match ? Number(match[1]) : 1;
}

function buildDeck() {
  const cards = [];
  actionCards.forEach((card) => {
    const count = parseCount(card.title);
    for (let i = 0; i < count; i++) cards.push({ ...card, type: 'action' });
  });
  counterCards.forEach((card) => {
    const count = parseCount(card.title);
    for (let i = 0; i < count; i++) cards.push({ ...card, type: 'counter' });
  });
  return shuffle(cards);
}

function buildEventDeck() {
  const cards = eventCards.map((text, idx) => ({ title: `事件 ${idx + 1}`, note: text }));
  return shuffle(cards);
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function addPlayer() {
  if (state.players.length >= 4) return;
  const color = colors[state.players.length % colors.length];
  const player = {
    id: playerCounter++,
    name: `玩家${state.players.length + 1}`,
    color,
    exhibits: { A: false, B: false, C: false, D: false, E: false },
    position: null,
    hand: []
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
    if (getActivePlayer()?.id === player.id) card.classList.add('active');

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
    info.textContent = `${posText} · 已参观 ${visited}/5${winner ? '（完成！）' : ''} · 手牌 ${player.hand.length} 张`;
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

function getTurnOrder() {
  if (state.entryAssignments.length) {
    return [...state.entryAssignments].sort((a, b) => a.order - b.order).map((item) => item.playerId);
  }
  return state.players.map((p) => p.id);
}

function getActivePlayer() {
  const order = getTurnOrder();
  const id = order[state.activeIndex % Math.max(order.length, 1)];
  return state.players.find((p) => p.id === id) || null;
}

function setActivePlayer(id) {
  const order = getTurnOrder();
  const idx = order.indexOf(id);
  state.activeIndex = idx >= 0 ? idx : 0;
  state.selectedPlayerId = id;
  renderPlayers();
  renderHand();
  renderDeckStats();
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

function addLog(text) {
  const timestamp = new Date().toLocaleTimeString();
  state.log.unshift(`[${timestamp}] ${text}`);
  state.log = state.log.slice(0, 80);
  renderLog();
}

function renderLog() {
  logEl.innerHTML = '';
  state.log.forEach((line) => {
    const li = document.createElement('li');
    li.textContent = line;
    logEl.appendChild(li);
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

function startGame() {
  if (state.players.length < 2) {
    alert('至少需要两位玩家才能开始。');
    return;
  }
  state.deck = buildDeck();
  state.discard = [];
  state.eventDeck = buildEventDeck();
  state.eventDiscard = [];
  state.log = [];
  state.players.forEach((player, idx) => {
    player.hand = [];
    player.exhibits = { A: false, B: false, C: false, D: false, E: false };
    player.position = findEntryCell() || null;
    addLog(`${player.name} 入场，起点为出入口。`);
    drawCardFor(player, 4);
  });
  state.activeIndex = 0;
  state.selectedPlayerId = getTurnOrder()[0];
  renderPlayers();
  renderBoard();
  renderDeckStats();
  renderHand();
  renderLog();
}

function advanceTurn() {
  const order = getTurnOrder();
  if (!order.length) return;
  state.activeIndex = (state.activeIndex + 1) % order.length;
  state.selectedPlayerId = order[state.activeIndex];
  const player = getActivePlayer();
  addLog(`轮到 ${player?.name || '未知玩家'} 行动。`);
  renderPlayers();
  renderHand();
}

function summarize(text) {
  if (!text) return '空格';
  if (text.length <= 18) return text;
  return text.slice(0, 18) + '…';
}

function isPassable(cellText) {
  return Boolean(cellText);
}

function isAdjacent(from, to) {
  if (!from) return false;
  return Math.abs(from.row - to.row) + Math.abs(from.col - to.col) === 1;
}

function findEntryCell() {
  for (let r = 0; r < boardGrid.length; r++) {
    for (let c = 0; c < boardGrid[r].length; c++) {
      if (boardGrid[r][c] && boardGrid[r][c].includes('出入口')) {
        return { row: r, col: c };
      }
    }
  }
  return null;
}

function drawCardFor(player, count = 1) {
  for (let i = 0; i < count; i++) {
    if (!state.deck.length) {
      if (state.discard.length) {
        state.deck = shuffle(state.discard);
        state.discard = [];
      } else {
        addLog('牌库已空，无法继续抽牌。');
        break;
      }
    }
    const card = state.deck.shift();
    player.hand.push(card);
  }
  renderDeckStats();
  renderHand();
  renderPlayers();
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
        const clicked = { row: rowIndex, col: colIndex };
        const gameStarted = state.deck.length || state.discard.length || state.eventDeck.length || state.eventDiscard.length;
        if (player && gameStarted) {
          if (!isPassable(cellText)) {
            alert('这是空格子，不能站立。');
            return;
          }
          if (!player.position) {
            player.position = clicked;
            addLog(`${player.name} 进入了棋盘。`);
          } else if (!isAdjacent(player.position, clicked)) {
            alert('一次只能移动相邻一格。');
          } else {
            const moveCardIndex = player.hand.findIndex((c) => c.title.startsWith('前进1格'));
            if (moveCardIndex === -1) {
              alert('需要打出一张【前进1格】才可以移动。');
              return;
            }
            const [consumed] = player.hand.splice(moveCardIndex, 1);
            state.discard.push(consumed);
            player.position = clicked;
            addLog(`${player.name} 使用【前进1格】移动到 R${rowIndex + 1}-C${colIndex + 1}`);
            applyCellEffects(player, cellText);
          }
          renderPlayers();
          renderBoard();
          renderHand();
          renderDeckStats();
        }
        if (player && !gameStarted) {
          player.position = clicked;
          renderPlayers();
          renderBoard();
        }
        renderDetail(cellText, rowIndex, colIndex);
      });

      boardEl.appendChild(cell);
    });
  });

  renderMapPreview();
}

function cellType(text) {
  if (!text) return 'empty';
  if (text.includes('出入口')) return 'entry';
  if (text.includes('随机事件')) return 'event';
  if (/参观展品/.test(text) || ['A', 'B', 'C', 'D', 'E'].includes(text)) return 'exhibit';
  if (text.includes('楼层转换')) return 'stairs';
  if (text.includes('厕所')) return 'toilet';
  return 'other';
}

function renderMapPreview() {
  if (!mapPreviewEl) return;
  const cellSize = 90;
  const padding = 16;
  const maxColumns = Math.max(...boardGrid.map((row) => row.length));
  const width = maxColumns * cellSize + padding * 2;
  const height = boardGrid.length * cellSize + padding * 2;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f1117';
  ctx.fillRect(0, 0, width, height);
  ctx.font = '14px "Noto Sans SC", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  boardGrid.forEach((row, r) => {
    row.forEach((text, c) => {
      const x = padding + c * cellSize;
      const y = padding + r * cellSize;
      const type = cellType(text);
      const colorsByType = {
        empty: '#1c2231',
        entry: '#2f6bb2',
        event: '#9956d6',
        exhibit: '#e7955f',
        stairs: '#4ba38d',
        toilet: '#4c7bd8',
        other: '#222a3a'
      };
      ctx.fillStyle = colorsByType[type] || '#222a3a';
      ctx.strokeStyle = '#39425b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, cellSize - 6, cellSize - 6, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#e8ecf5';
      const label = summarize(text || '空格');
      wrapText(ctx, label, x + (cellSize - 6) / 2, y + (cellSize - 6) / 2, cellSize - 20, 18);
    });
  });

  mapPreviewEl.src = canvas.toDataURL('image/png');
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split('');
  let line = '';
  const lines = [];
  words.forEach((ch) => {
    const testLine = line + ch;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = testLine;
    }
  });
  lines.push(line);

  const totalHeight = lines.length * lineHeight;
  let offsetY = y - totalHeight / 2 + lineHeight / 2;
  lines.forEach((l) => {
    ctx.fillText(l, x, offsetY);
    offsetY += lineHeight;
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

function applyCellEffects(player, text) {
  if (!text) return;
  if (text.startsWith('参观展品')) {
    const key = text.replace('参观展品', '').trim();
    if (player.exhibits[key] === false || player.exhibits[key] === undefined) {
      player.exhibits[key] = true;
      addLog(`${player.name} 完成了展品${key}！`);
      renderPlayers();
    }
  }

  if (['A', 'B', 'C', 'D', 'E'].includes(text)) {
    if (!player.exhibits[text]) {
      player.exhibits[text] = true;
      addLog(`${player.name} 完成了展品${text}！`);
      renderPlayers();
    }
  }

  if (text.includes('随机事件')) {
    drawEventCard(player);
  }

  const visitedCount = Object.values(player.exhibits).filter(Boolean).length;
  if (visitedCount === 5) {
    addLog(`${player.name} 参观完所有展品，赢下本局！`);
  }
}

function drawEventCard(player) {
  if (!state.eventDeck.length && state.eventDiscard.length) {
    state.eventDeck = shuffle(state.eventDiscard);
    state.eventDiscard = [];
  }
  const card = state.eventDeck.shift();
  if (!card) {
    addLog('事件牌堆为空，忽略本次事件。');
    renderDeckStats();
    return;
  }
  state.eventDiscard.push(card);
  addLog(`${player.name} 抽到了【${card.title}】：${card.note}`);
  renderDeckStats();
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
  playerChip.textContent = '点击当前玩家，使用【前进1格】移动到相邻格子';
  legendEl.appendChild(playerChip);

  const note = document.createElement('span');
  note.className = 'legend-chip';
  note.textContent = '格子文字为地图原始描述，前几字作为简写显示';
  legendEl.appendChild(note);
}

function renderHand() {
  handEl.innerHTML = '';
  const player = getActivePlayer();
  if (!player) return;
  turnPlayerEl.textContent = player.name;

  player.hand.forEach((card, idx) => {
    const tile = document.createElement('div');
    tile.className = 'card-tile';
    const h4 = document.createElement('h4');
    h4.textContent = card.title;
    const p = document.createElement('p');
    p.textContent = card.note;
    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const playBtn = document.createElement('button');
    playBtn.textContent = '打出/弃掉';
    playBtn.addEventListener('click', () => {
      const [removed] = player.hand.splice(idx, 1);
      state.discard.push(removed);
      addLog(`${player.name} 打出了【${removed.title}】`);
      renderHand();
      renderPlayers();
      renderDeckStats();
    });
    actions.appendChild(playBtn);
    tile.append(h4, p, actions);
    handEl.appendChild(tile);
  });
}

function renderDeckStats() {
  deckStatsEl.innerHTML = `
    主牌库：${state.deck.length} 张<br/>
    弃牌堆：${state.discard.length} 张<br/>
    事件牌堆：${state.eventDeck.length} 张
  `;
}

function init() {
  document.getElementById('add-player').addEventListener('click', addPlayer);
  document.getElementById('draw-entry').addEventListener('click', drawEntryOrder);
  document.getElementById('start-game').addEventListener('click', startGame);
  document.getElementById('advance-turn').addEventListener('click', advanceTurn);
  document.getElementById('end-turn').addEventListener('click', advanceTurn);
  document.getElementById('draw-card').addEventListener('click', () => {
    const player = getActivePlayer();
    if (player) {
      drawCardFor(player, 1);
      addLog(`${player.name} 抽了一张牌。`);
    }
  });
  document.getElementById('clear-log').addEventListener('click', () => {
    state.log = [];
    renderLog();
  });
  renderLists();
  renderLegend();
  renderBoard();
  addPlayer();
  addPlayer();
}

init();
