// content.js

chrome.runtime.onMessage.addListener(function (request) 
{
    alert(request);
    console.log(document.querySelector('#react-root')); 

    var element = document.querySelector('#react-root');
    element.parentElement.removeChild(element);
});