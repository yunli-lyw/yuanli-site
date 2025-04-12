
fetch('data/memory_log_day1.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('memoryLog').innerText = data;
  })
  .catch(() => {
    document.getElementById('memoryLog').innerText = '无法加载回忆内容，请确认文件存在。';
  });
