
function previewSettings() {
  const welcome = document.getElementById("welcomeInput").value;
  document.getElementById("previewText").innerText = welcome ? welcome : "（暂无内容）";
}

function saveSettings() {
  const welcome = document.getElementById("welcomeInput").value;
  const blob = new Blob([welcome], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data/welcome_message.txt";
  a.click();
  alert("璃璃，你的欢迎语已保存！");
}
