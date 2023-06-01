var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '*', '+', '.', '^']
var ucl_count = 0, lcl_count = 0, symbol_count = 0, numbers_count = 0;


function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function shuffler(s) {
    var a = s.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function generatePassword(len, rules){
    if(len === 0)
    return "🦉"

    var div = rules['ul'] + rules['s'] + rules['ll'] + rules['n'];
    var c = div;
    if(rules['ul']){
        if(c === 1)
        {
            ucl_count = len - numbers_count - symbol_count - lcl_count;
            --c;
        }
        else
        {
            ucl_count = Math.floor(len/div);
            --c;
        }
    }
    if(rules['s']){
        if(c === 1)
        {
            symbol_count = len - numbers_count - ucl_count - lcl_count;
            --c;
        }
        else
        {
            symbol_count = Math.floor(len/div);
            --c;
        }
    }
    if(rules['n']){
        if(c === 1)
        {
            numbers_count = len - symbol_count - ucl_count - lcl_count;
            --c;
        }
        else
        {
            numbers_count = Math.floor(len/div);
            --c;
        }
    }
    if(rules['ll']){
        if(c === 1)
        {
            lcl_count = len - numbers_count - ucl_count - symbol_count;
            --c;
        }
        else
        {
            lcl_count = Math.floor(len/div);
            --c;
        }
    }

    var s = '';
    while(ucl_count){
        --ucl_count;
        s+=getRandomItem(upperCase);
    }
    while(symbol_count){
        --symbol_count;
        s+=getRandomItem(symbols);
    }
    while(numbers_count){
        --numbers_count;
        s+=getRandomItem(numbers);
    }
    while(lcl_count){
        --lcl_count;
        s+=getRandomItem(lowerCase);
    }
    s = shuffler(s);
    return s;
}

export default generatePassword;