console.log("test?");

/* 
Frage

function differenz

x = ?
y = 27

x > 27  dann (x-y)*2

testen mit x 35 74 123

*/

let x = 0
let y = 27

function differenz(x, y) {
    let ergebnis = 0;

    if (x > y) {
        ergebnis   = (x-y)*2 
        console.log("Differenz: " + (x-y));
    }
    else {
        ergebnis   = (y-x)
    }

    console.log(ergebnis)
}

differenz(x,y);