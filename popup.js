document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('jsToggle');
  const status = document.getElementById('status');

  // 获取当前状态
  chrome.storage.local.get(['jsDisabled'], function(result) {
    toggle.checked = result.jsDisabled || false;
    updateStatus(toggle.checked);
  });

  // 处理开关变化
  toggle.addEventListener('change', function() {
    const isDisabled = toggle.checked;
    
    // 保存状态到storage
    chrome.storage.local.set({ jsDisabled: isDisabled }, function() {
      updateStatus(isDisabled);
      // 刷新当前页面以应用更改
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  });

  function updateStatus(isDisabled) {
    status.textContent = `复制功能已${isDisabled ? '开启' : '关闭'}`;
    status.style.color = isDisabled ? '#1a73e8' : '#5f6368';
  }
});
