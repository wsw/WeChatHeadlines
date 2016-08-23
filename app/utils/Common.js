function naviGoBack(navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
}

function isEmptyObject(obj) {
    for (var name in obj) {
        return false;
    }
    return true;
}

export {
    naviGoBack, isEmptyObject
}