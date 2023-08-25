const eco = 'https://www.economist.com/';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(eco)) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  } else {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['alert.js']
    });
  }
});
