chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request)
    chrome.storage.local.set(request, function() {
        console.log('Value is set to ' + request);
    });
 });