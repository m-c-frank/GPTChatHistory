document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.create({active: true, url: "history.html"});
});