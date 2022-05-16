//css selectors
exploreSelector = '.K6yM_'
storySelector = '.zGtbP';
feedSelector = '._1SP8R div:nth-child(1) div:nth-child(3) ._8Rm4L';
postSelector = '_8Rm4L'
loadingIconSelector = '.By4nA';
suggestionsSelector = '._8UZ6e';
HomeFeedButtom = 'div._47KiJ > div.Fifk5:first-child';
FindPeople = 'div.Fifk5:nth-child(3)';
//enable | disable css
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
	addStyle(HomeFeedButtom + disableString);
}

function disableStory() {
    addStyle(storySelector + disableString);
}

function disableSuggestions()
{
    addStyle(suggestionsSelector + disableString);
	addStyle(FindPeople + disableString);
}
function disableExplore()
{
    addStyle(exploreSelector + disableString);
    document.querySelectorAll("a[href='/explore/']")[0].style.display = 'none';
    document.querySelectorAll("a[href='/explore/']")[0].parentElement.style.margin = '0';
}

function enableFeed() {
    addStyle(feedSelector + enableString);
    addStyle(postSelector + enableString);
    addStyle(loadingIconSelector + enableString);
	addStyle(HomeFeedButtom + enableString);
}

function enableStory() {
    addStyle(storySelector + enableString);
}

function enableSuggestions()
{
    addStyle(suggestionsSelector + enableString);
}
function enableExplore()
{
    addStyle(exploreSelector + enableString);
    document.querySelectorAll("a[href='/explore/']")[0].style.display = '';
    document.querySelectorAll("a[href='/explore/']")[0].parentElement.style.margin = '';
}

function initContent()
{
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
    chrome.storage.sync.get(['suggestions'], function (result) {
        if (result.suggestions == true) {
            disableSuggestions();
        }
    });
    chrome.storage.sync.get(['explore'], function (result) {
        if (result.explore == true) {
            disableExplore();
        }
    });
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        var storageChange = changes[key];

        if (key == 'story') {
            var newValue = storageChange.newValue;
            if (newValue == true) {
                disableStory();
            }
            if (newValue == false) {
                enableStory();
            }
        }

        if (key == 'feed') {
            var newValue = storageChange.newValue;
            if (newValue == true) {
                disableFeed();
            }
            if (newValue == false) {
                enableFeed();
            }
        }

        if(key == "suggestions"){
            var newValue = storageChange.newValue;
            if (newValue == true) {
                disableSuggestions();
            }
            if (newValue == false) {
                enableSuggestions();
            }
        }

        if(key == "explore"){
            var newValue = storageChange.newValue;
            if (newValue == true) {
                disableExplore();
            }
            if (newValue == false) {
                enableExplore();
            }
        }
    }
});

initContent();