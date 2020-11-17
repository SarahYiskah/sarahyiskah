export function getContainerDimensions(elm) {
    const bounding = elm.getBoundingClientRect();
    const top = bounding.top;
    const bottom = bounding.bottom;
    const defaultImgHeight = window.innerWidth > 1800 ? 530 : 420.7;
    const imgHeight = top < 1 ? defaultImgHeight : (defaultImgHeight - top) > 0 ? (defaultImgHeight - top) : 0;
    const imgTop = `${(140 + (defaultImgHeight - imgHeight))}px`;
    const percent = (imgHeight * 100) / defaultImgHeight;
    let actionOpacity = 0;
    if (percent >= 60) {
        actionOpacity = imgHeight / defaultImgHeight;
    }
    if (bottom <= defaultImgHeight) {
        const thirdOfDefault = defaultImgHeight - (defaultImgHeight * 0.6);
        const nextImgHeight = defaultImgHeight - bottom;
        actionOpacity = 1 - (nextImgHeight / thirdOfDefault);
    }
    return { imgHeight: `${imgHeight}px`, imgTop, actionOpacity };
};

export function isBotttomOfScreen(elm) {
    const bottom = elm.getBoundingClientRect().bottom;
    const defaultImgHeight = window.innerWidth > 1800 ? 530 : 420.7;
    return bottom < (defaultImgHeight + 300);
};

export function isTopOfScreen(elm) {
    const top = elm.getBoundingClientRect().top;
    return top < 1;
};