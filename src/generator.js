imp


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
    if(rules['ul']){
        ucl_count = Math.floor(0.2*len)
    }
    if(rules['s']){
        symbol_count = Math.floor(0.2*len)
    }
    if(rules['n']){
        numbers_count = Math.floor(0.2*len)
    }
    lcl_count = len - numbers_count - symbol_count - ucl_count;

    var s = '';
    while(ucl_count--){
        s+=getRandomItem(upperCase);
    }
    while(symbol_count--){
        s+=getRandomItem(symbols);
    }
    while(numbers_count--){
        s+=getRandomItem(numbers);
    }
    while(lcl_count--){
        s+=getRandomItem(lowerCase);
    }
    s = shuffler(s);
    console.log(s);
}
