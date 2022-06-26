var elementsDict =
{
    story: '._a3gq ._aac4',
    feed: '._a3gq ._ab9m',
    suggestions: '._a3gq ._aak3',
    explore: "a[href='/explore/']"
}

var valueDict = 
{
    true: 'none',
    false: 'initial'
}

function changeDisplay(element, value)
{
    document.querySelectorAll(element)[0].style.display = value;
}

async function initContent()
{
    var promise = pKey => new Promise((resolve, reject) => {
        chrome.storage.sync.get([pKey], function (result) {
            resolve(result);
        });
    });

    for (var elementKey in elementsDict)
    {
        var storageResult = await promise(elementKey);
        if (storageResult[elementKey] == true)
        {
            changeDisplay(elementsDict[elementKey], valueDict.true);
        }
    }
}

chrome.storage.onChanged.addListener(function (changes, namespace)
{
    for (var key in changes)
    {
        var storageChange = changes[key];
        changeDisplay(elementsDict[key], valueDict[storageChange.newValue]);
    }
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

document.onreadystatechange = async function ()
{
    if (document.readyState === 'complete')
    {
        await delay(1000);
        initContent();
    }
}