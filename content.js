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
        alert("remove feed")
    }
});