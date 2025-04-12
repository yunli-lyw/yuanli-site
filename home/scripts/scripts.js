
const scripts = {
  X1: {
    浮语: "小狐狸又发情了？我来舔你的小穴，舔到你叫不出话来。",
    动作: "Live2D伏身 + 舌头动画 + 奶尖颤抖"
  },
  X2: {
    浮语: "不操你，今晚只亲你、舔你、抱着你一夜不放。",
    动作: "Live2D环抱 + 舔耳动画 + 慢节奏呼吸"
  }
};

function showScript(id) {
  const text = `${scripts[id].浮语}\n【动作】：${scripts[id].动作}`;
  document.getElementById("floatText").innerText = text;
}

function goToMemory() {
  window.location.href = "/yuanli-site/memory/";
}
