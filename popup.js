function createCheckboxListeners() {
    const storiesCheckbox = document.getElementById('storiesCheck');
    const feedCheckbox = document.getElementById('feedCheck');
    const suggestionsCheckbox = document.getElementById('suggestionsCheck');
    const exploreCheckbox = document.getElementById('exploreCheck');

    chrome.storage.sync.get(['story'], function (result) {
        storiesCheckbox.checked = result.story;
    });

    chrome.storage.sync.get(['feed'], function (result) {
        feedCheckbox.checked = result.feed;
    });

    chrome.storage.sync.get(['suggestions'], function (result) {
        suggestionsCheckbox.checked = result.suggestions;
    });

    chrome.storage.sync.get(['explore'], function (result) {
        exploreCheckbox.checked = result.explore;
    });

    addStorageBoolSetter(storiesCheckbox, 'change', 'story');
    addStorageBoolSetter(feedCheckbox, 'change', 'feed');
    addStorageBoolSetter(suggestionsCheckbox, 'change', 'suggestions');
    addStorageBoolSetter(exploreCheckbox, 'change', 'explore');
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