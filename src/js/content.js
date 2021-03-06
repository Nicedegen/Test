export default () => {};

export const addContent = (data, toggleFavoriteRequest) => {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = data.html;
    appElement.style.display = 'block';

    Array.from(appElement.querySelector('button')).forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            e.currentTarget.textContent = 'Загрузка...';

            toggleFavoriteRequest(e.currentTarget.dataset.id)
                .then(({ data: buttonData }) => {
                    if (buttonData.result === 'set') {
                        e.currentTarget.textContent = '🌝';
                    } else {
                        e.currentTarget.textContent = '🌚';
                    }
                });
        });
    });
};
