class App {
    constructor() {
        this._element = document.createElement('div');
        this._element.setAttribute('id', 'app');
    }

    addApp() {
        document.body.appendChild(this._element);
    }

    deleteApp() {
        document.body.removeChild(this._element);
    }

    putHtmlInApp(text) {
        this._element.innerHTML = text;
    }

    addEventListenersToButtons(listener) {
        this._element.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', listener);
        });
    }
}

export default App;
