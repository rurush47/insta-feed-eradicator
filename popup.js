function createCheckboxListeners() {
    const storiesCheckbox = document.getElementById('storiesCheck');
    const feedCheckbox = document.getElementById('feedCheck');
    const suggestionsCheckbox = document.getElementById('suggestionsCheck');

    chrome.storage.sync.get(['story'], function (result) {
        storiesCheckbox.checked = result.story;
    });

    chrome.storage.sync.get(['feed'], function (result) {
        feedCheckbox.checked = result.feed;
    });

    chrome.storage.sync.get(['suggestions'], function (result) {
        suggestionsCheckbox.checked = result.suggestions;
    });

    addStorageBoolSetter(storiesCheckbox, 'change', 'story');
    addStorageBoolSetter(feedCheckbox, 'change', 'feed');
    addStorageBoolSetter(suggestionsCheckbox, 'change', 'suggestions');
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

document.addEventListener(
    'DOMContentLoaded',
    createCheckboxListeners(),
    false);