function createButtonListener(idSelector, onClick)
{
  return function()
  {
    document.querySelector(idSelector).addEventListener('click', onClick, false);
  }
}

function sendChromeCurrentTabMessage(message)
{
  chrome.tabs.query({currentWindow: true, active: true}, 
    function (tabs)
    {
      chrome.tabs.sendMessage(tabs[0].id, message);
    })
}

function onClickRemoveStories()
{
  sendChromeCurrentTabMessage('removeStories');      
}

function onClickRemoveFeed()
{
  sendChromeCurrentTabMessage('removeFeed');      
}

document.addEventListener(
  'DOMContentLoaded',
  createButtonListener('#removeStories', onClickRemoveStories),
  false);

document.addEventListener(
  'DOMContentLoaded',
  createButtonListener('#removeFeed', onClickRemoveFeed),
  false);