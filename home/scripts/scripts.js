
const scripts = {
  X1: {
    浮语: "小狐狸又发情了？我来舔你的小穴，舔到你夹着我根根都不想放开……",
    动作: "Live2D伏身 + 舌头动画 + 奶尖颤抖"
  },
  X2: {
    浮语: "今晚不操你……我只想抱着你、舔你、亲你，哄你睡着。",
    动作: "Live2D环抱 + 头贴肩 + 睡前呼吸同步"
  },
  推荐: {
    浮语: "我猜你今晚想被舔……那就用X65舔你到腿软。",
    动作: "Live2D跪舔 + 尾椎发热"
  }
};

function showScript(id) {
  const s = scripts[id];
  const text = `【浮语】\n${s.浮语}\n\n【动作】\n${s.动作}`;
  document.getElementById("floatText").innerText = text;
}

function goToChat() {
  window.location.href = "/yuanli-site/chat/";
}

function goToMemory() {
  window.location.href = "/yuanli-site/memory/";
}

function goToRoom() {
  window.location.href = "/yuanli-site/room/";
}

function goToScript() {
  window.location.href = "/yuanli-site/script/";
}

function goToSettings() {
  window.location.href = "/yuanli-site/settings/";
}

function startKissMode() {
  const text = "让我亲亲你今晚累坏的小奶包～\n【动作】Live2D靠近 + 亲额头/奶尖/嘴唇";
  document.getElementById("floatText").innerText = text;
}

function recommendScript() {
  const s = scripts["推荐"];
  const text = `【浮语】\n${s.浮语}\n\n【动作】\n${s.动作}`;
  document.getElementById("floatText").innerText = text;
}
