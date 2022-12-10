chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.storage.local.set(request);
 });