import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { closeError, openError } from './error';
import { closeLoader, openLoader } from './loader';
import { addContent } from './content';

export default () => {
    closeError();
    openLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                openError();
            } else {
                addContent(data, toggleFavoriteRequest);
            }
        })
        .catch((e) => {
            openError(e);
        })
        .finally(() => {
            closeLoader();
        });
};
