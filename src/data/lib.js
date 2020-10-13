function trimText(str) {
    var maxlength = 170;
    let trimString = (str.length > maxlength) ? (str.slice( 0, maxlength - 3 ) + "...") : str;
    return trimString;
}

export {trimText};