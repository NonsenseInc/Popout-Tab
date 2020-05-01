var form = document.querySelector('form');

function saveOptions(e) {
    let data = new FormData(form);
    let icon_val = data.get('icon');

    browser.storage.sync.set({
        icon: icon_val
    });

    browser.runtime.sendMessage({ 'icon': icon_val });

    e.preventDefault();
}

function restoreOptions() {
    let gettingItem = browser.storage.sync.get('icon');

    gettingItem.then((res) => {
        let icon_val = res.icon || 'colored';

        document.querySelector('#' + icon_val).checked = true;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
form.addEventListener('submit', saveOptions);