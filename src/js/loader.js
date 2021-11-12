// from bigUntestableCode in

const loader = document.querySelector('#loader');

export const openLoader = () => {
    loader.style.display = 'block';
};

export const closeLoader = () => {
    loader.style.display = 'none';
};

// from bigUntestableCode out
class Loader {
    constructor() {
        this._element = document.createElement('div');
        this._element.setAttribute('id', 'loader');
        this._element.innerHTML = 'Loading...';
        this._element.style.display = 'none';
        document.querySelector('#app').append(this._element);
    }

    openLoader() {
        this._element.style.display = 'block';
    }

    closeLoader() {
        this._element.style.display = 'none';
    }
}

export default Loader;
