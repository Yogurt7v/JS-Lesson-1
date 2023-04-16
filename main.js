

function compare (x, y, n,) {
    let a = Math.floor((x % Math.floor(x)) * Math.pow(10, n));
    let b = Math.floor((y % Math.floor(y)) * Math.pow(10, n));
    console.log ( a == b);
}

compare (13.1234590, 2.123, 5); //ok
compare(13.89044, 2.89143, 2); // ok
compare(13.89044, 2.89143, 3); //ok