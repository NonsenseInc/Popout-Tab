function setIcon(icon_val) {
    let colored_icon = {
        '16': 'icons/23cf-16.png',
        '32': 'icons/23cf-32.png',
        '48': 'icons/23cf-48.png',
        '96': 'icons/23cf-96.png',
        '128': 'icons/23cf-128.png'
    };

    let dark_mode_icon = {
        '16': 'icons/23cf-dark_mode-16.png',
        '32': 'icons/23cf-dark_mode-32.png',
        '48': 'icons/23cf-dark_mode-48.png',
        '96': 'icons/23cf-dark_mode-96.png',
        '128': 'icons/23cf-dark_mode-128.png'
    };

    let light_mode_icon = {
        '16': 'icons/23cf-light_mode-16.png',
        '32': 'icons/23cf-light_mode-32.png',
        '48': 'icons/23cf-light_mode-48.png',
        '96': 'icons/23cf-light_mode-96.png',
        '128': 'icons/23cf-light_mode-128.png'
    };

    if (icon_val == 'dark_mode') {
        browser.browserAction.setIcon({ path: dark_mode_icon }).catch(console.error);
    } else if (icon_val == 'light_mode') {
        browser.browserAction.setIcon({ path: light_mode_icon }).catch(console.error);
    } else {
        browser.browserAction.setIcon({ path: colored_icon }).catch(console.error);
    }
}

function updateIcon() {
    let gettingItem = browser.storage.sync.get('icon');

    gettingItem.then((res) => {
        let icon_val = res.icon;
        setIcon(icon_val);
    });
}

function notify(message) {
    setIcon(message.icon);
}

function ownOnClicked(theTab, onClickData) {
    console.log(theTab);
    browser.windows.create({
        'type': 'popup',
        'tabId': theTab.id,
    }).catch(console.error);
}

browser.browserAction.onClicked.addListener(ownOnClicked);
browser.runtime.onMessage.addListener(notify);
updateIcon();
