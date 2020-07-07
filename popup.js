function createCheckboxListeners() {
    const storiesCheckbox = document.getElementById('storiesCheck');
    const feedCheckbox = document.getElementById('feedCheck');

    chrome.storage.sync.get(['story'], function (result) {
        storiesCheckbox.checked = result.story;
    });

    chrome.storage.sync.get(['feed'], function (result) {
        feedCheckbox.checked = result.feed;
    });

    addStorageBoolSetter(storiesCheckbox, 'change', 'story');
    addStorageBoolSetter(feedCheckbox, 'change', 'feed');
}

function addStorageBoolSetter(element, eventName, key) {
    var data = {};

    element.addEventListener(eventName, (event) => {
        if (event.target.checked) {
            data[key] = true;
            chrome.storage.sync.set(data);
        }
        else {
            data[key] = false;
            chrome.storage.sync.set(data);
        };
    });
}

function calc() {
    if (document.getElementById('storiesCheck').checked) {
        sendChromeCurrentTabMessage({ key: 'removeStories', value: true });
    } else {
        sendChromeCurrentTabMessage({ key: 'removeStories', value: false });
    }
}

document.addEventListener(
    'DOMContentLoaded',
    createCheckboxListeners(),
    false);