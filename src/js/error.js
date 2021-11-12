export default () => {};

export const closeError = () => {
    document.querySelector('#error').style.display = 'none';
};

export const openError = (e = 'Произошла ошибка, попробуйте ещё раз.') => {
    const errorElement = document.querySelector('#error');

    errorElement.innerHTML = e;
    errorElement.style.display = 'block';
};
