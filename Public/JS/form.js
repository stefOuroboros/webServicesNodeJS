document.querySelectorAll('form');
for (let form of forms) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        let method      = form.getAttribute('method');
        let url         = form.getAttribute('action');
        let queryString = '';
        let cryptokey   = form.querySelector('[name=cryptokey]');
        let formData    = new FormData(form);
        let data        = {};

        if (cryptokey) {
            cryptokey = cryptokey.value;
        }

        for (let entry of formData.entries()) {
            data[entry[0]] = entry[1];
        }

        if(method == 'GET' || method == 'DELETE') {
            queryString = '?';
        }

        fetch(url, {
            method: method,

        });

    })
}