// content.js

chrome.runtime.onMessage.addListener(function (request) 
{
    if(request == 'removeStories')
    {
        var storyDiv = document.querySelector('.zGtbP');
        storyDiv.parentElement.removeChild(storyDiv);
    }
    if(request == 'removeFeed')
    {
        var feedDiv = document.querySelector('._8Rm4L').parentElement.parentElement;
        feedDiv.parentElement.removeChild(feedDiv);

        var loadingIcon = document.querySelector('.By4nA');
        loadingIcon.parentElement.removeChild(loadingIcon);
    }
});