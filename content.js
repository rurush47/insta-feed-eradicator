storySelector = '.zGtbP';
feedSelector = '.cGcGK div:nth-child(2) ._8Rm4L';
postSelector = '_8Rm4L'
loadingIconSelector = '.By4nA';
storyNameSelector = '.eebAO';
disableString = '{display:none}';
enableString = '{display:initial}';

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

function disableFeed() {
    addStyle(feedSelector + disableString);
    addStyle(postSelector + disableString);
    addStyle(loadingIconSelector + disableString);
    addStyle(storyNameSelector + enableString);
}

function disableStory() {
    addStyle(storySelector + disableString);
}

function enableFeed() {
    addStyle(feedSelector + enableString);
    addStyle(postSelector + enableString);
    addStyle(loadingIconSelector + enableString);
}

function enableStory() {
    addStyle(storySelector + enableString);
}

$(document).ready(function () {
    chrome.storage.sync.get(['story'], function (result) {
        if (result.story == true) {
            disableStory();
        }
    });
    chrome.storage.sync.get(['feed'], function (result) {
        if (result.feed == true) {
            disableFeed();
        }
    });
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        var storageChange = changes[key];

        if (key == 'story') {
            var newValue = storageChange.newValue;
            if (newValue == true) {
                console.log("story true");
                disableStory();
            }
            if (newValue == false) {
                console.log("story false");
                enableStory();
            }
        }

        if (key == 'feed') {
            var newValue = storageChange.newValue;
            if (newValue == true) {
                console.log("feed true");
                disableFeed();
            }
            if (newValue == false) {
                console.log("feed false");
                enableFeed();
            }
        }
    }
});