chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'getSelection') {
    sendResponse({ selection: window.getSelection().toString() });
  }
});

chrome.runtime.sendMessage({ type: 'getSelection' }, (response) => {
  if (response && response.selection) {
    // Do something with the selected text
  }
});
