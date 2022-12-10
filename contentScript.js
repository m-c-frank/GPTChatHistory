let alltext = "";
let date = (new Date()).toISOString();

function getAllTextFromElements(elements) {
    return elements.map(element => {
        return element.innerText;
    }).join('\n');
}

function getAllTextFromMain() {
    const main = document.getElementsByTagName('main')[0];
    const text = getAllTextFromElements([main]);
    return text;
}

// update alltext every 5 seconds
setInterval(function () {
    let newtext = getAllTextFromMain();
    if (newtext != alltext) {
        //check if the first 20 characters are the same
        if (newtext.substring(0, 20) != alltext.substring(0, 20)) {
            //if not, then its a new start of chat
            date = (new Date()).toISOString();
            alltext = "";
        }
        alltext = newtext;
        let temp = {}
        temp[date] = alltext;
        chrome.runtime.sendMessage(temp);
    }
}, 1000);

