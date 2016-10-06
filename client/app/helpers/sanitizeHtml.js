import sanitize from 'sanitize-html';

const sanitizeHtml = (html) => {
    return { __html: sanitize(html) };
}

export default sanitizeHtml;
