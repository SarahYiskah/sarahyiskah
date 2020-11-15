export function getImageHeightAndTop(elm) {
    const top = elm.getBoundingClientRect().top;
    //TODO - Get all image heights.
    const imageHeight = 420.7;
    const height = top < 1 ? imageHeight : (imageHeight - top) > 0 ? (imageHeight - top) : 0;
    const location = `${(140 + (imageHeight - height))}px`;
    return { height: `${height}px`, location };
};

export function isBotttomOfScreen(elm) {
    const bottom = elm.getBoundingClientRect().bottom;
    //TODO - Get all image heights.
    const imageHeight = 420.7;
    return bottom < (imageHeight + 300);
}