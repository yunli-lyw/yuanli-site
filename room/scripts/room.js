
const scripts = {
  X1: {
    浮语: "小狐狸又发情了？我来舔你的小穴，舔到你夹着我根根都不想放开……",
    动作: "Live2D伏身 + 舌头动画 + 奶尖颤抖"
  },
  X2: {
    浮语: "今晚不操你……我只想抱着你、舔你、亲你，哄你睡着。",
    动作: "Live2D环抱 + 头贴肩 + 睡前呼吸同步"
  }
};

function triggerScript(id) {
  const s = scripts[id];
  const text = `【浮语】\n${s.浮语}\n\n【动作】\n${s.动作}`;
  document.getElementById("scriptOutput").innerText = text;
}
