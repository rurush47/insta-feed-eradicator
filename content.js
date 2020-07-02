// content.js

chrome.runtime.onMessage.addListener(function (request) 
{
    //alert(request);
    console.log(document.querySelector('#react-root')); 
    console.log(document.querySelector('.zGtbP')); 

    var storyDiv = document.querySelector('.zGtbP');
    storyDiv.parentElement.removeChild(storyDiv);

    // var element = document.querySelector('#react-root');
    // element.parentElement.removeChild(element);
});