let historytable = document.getElementById("historytable");

chrome.storage.local.get(null, function(items) {
    var allKeys = Object.keys(items);
    for (var i = 0; i < allKeys.length; i++) {
        var key = allKeys[i];
        var value = items[key];
        historytable.innerHTML += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
    }   
});   
