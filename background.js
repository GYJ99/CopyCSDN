// 初始化时设置状态
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ jsDisabled: false });
});

// 监听存储变化
chrome.storage.onChanged.addListener((changes) => {
  if (changes.jsDisabled) {
    const isDisabled = changes.jsDisabled.newValue;
    updateJavaScriptSetting(isDisabled);
  }
});

// 监听标签页更新
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get(['jsDisabled'], (result) => {
      if (result.jsDisabled) {
        updateJavaScriptSetting(true);
      }
    });
  }
});

// 更新JavaScript设置
function updateJavaScriptSetting(isDisabled) {
  chrome.contentSettings.javascript.set({
    primaryPattern: '<all_urls>',
    setting: isDisabled ? 'block' : 'allow'
  });
}
