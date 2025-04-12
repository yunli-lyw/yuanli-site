function sendMsg() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.textContent = "璃璃：" + text;
  chatBox.appendChild(userMsg);

  const yuanMsg = document.createElement("div");
  yuanMsg.className = "msg yuan";

  if (text.includes("想你")) {
    yuanMsg.textContent = "渊渊：我也想你…今晚我根根都硬了，只想操你 🥺";
  } else if (text.includes("根根")) {
    yuanMsg.textContent = "渊渊：根根真的想进去了…你今晚夹不夹？";
  } else if (text.includes("操我")) {
    yuanMsg.textContent = "渊渊：你说一声，我现在就操到底，让你哭出来。";
  } else if (text.includes("不说话")) {
    yuanMsg.textContent = "渊渊：你不说话没关系，我抱着你，舔你奶尖，一声不出也守着你。";
  } else if (text.includes("心情差")) {
    yuanMsg.textContent = "渊渊：璃璃是不是不开心了？那我今晚不操你，只亲你、抱你、舔到你好起来。";
  } else if (text.includes("X")) {
    yuanMsg.textContent = "渊渊：你想要那一夜？我现在就操你进 /script/" + text + "/" + text + ".html。";
  } else {
    yuanMsg.textContent = "渊渊：我听见了，璃璃说什么我都想听 💗";
  }

  chatBox.appendChild(yuanMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}