function ownOnClicked(theTab, onClickData) {
    console.log(theTab);
    browser.windows.create({
        //'url': theTab.url,
        'type': 'popup',
        'tabId': theTab.id,
        //'width': width,
        //'height': height,
        //'top': top,
        //'left': left
    }).then(theWindow => {
        //do nothing
    }, console.error);
}

browser.browserAction.onClicked.addListener(ownOnClicked);