storySelector = '.zGtbP';
feedSelector = '.cGcGK div:nth-child(2)';
postSelector = '_8Rm4L'
loadingIconSelector = '.By4nA';
disableString = '{display:none !important}';

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

// $(document).ready(function()
// {
    
// });

chrome.runtime.onMessage.addListener(function (request) 
{
    if(request == 'removeStories')
    {
        addStyle(storySelector + disableString);
    }
    if(request == 'removeFeed')
    {
        addStyle(postSelector + disableString);
        addStyle(feedSelector + disableString);
        addStyle(loadingIconSelector + disableString);
    }
});