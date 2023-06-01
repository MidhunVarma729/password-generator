function strengthDeterminer(len, rules){
    let strength = "Not good";
    let color = "error";
    let barProgess = 33;
    if (rules['ul'] && rules['ll'] && rules['s'] && rules['n'] && len >= 8) {
        color="success";
        strength = "Good one";
        barProgess = 100;
    } else if ((rules['ll'] || rules['ul']) && rules['s'] && len >= 6) {
        color = "warning";
        strength = "Moderate";
        barProgess = 67;
    }
    return [strength, color, barProgess];
}

export default strengthDeterminer;