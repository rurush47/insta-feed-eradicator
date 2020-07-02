storySelector = '.zGtbP';
feedSelector = '._8Rm4L';
loadingIconSelector = '.By4nA';


chrome.runtime.onMessage.addListener(function (request) 
{
    if(request == 'removeStories')
    {
        var storyDiv = document.querySelector(storySelector);
        storyDiv.parentElement.removeChild(storyDiv);
    }
    if(request == 'removeFeed')
    {
        var feedDiv = document.querySelector(feedSelector).parentElement.parentElement;
        feedDiv.parentElement.removeChild(feedDiv);

        var loadingIcon = document.querySelector(loadingIconSelector);
        loadingIcon.parentElement.removeChild(loadingIcon);
    }
});