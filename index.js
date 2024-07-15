let A = +prompt('raqam kiriting');
let natija = Math.floor(A / 2);
let qoldiq = A % 2;
console.log(natija);
console.log(qoldiq);

let A = +prompt('raqam kriting');
let B = +prompt('raqam kriting');
if (A > B) {
    let kopaytma = A * B;
    console.log(kopaytma);
}else if (A == B) {
let ayirma = A - B;
console.log(ayirma);
}else {
    let yigindi = A + B;
console.log(yigindi);
}

let A = +prompt('son kiritinng');
let result = 1;
for (let i = 2; i <= A ; i++ ){
result = result*i 
}
console.log(result);

let A = +prompt('son kirit');
let B = +prompt('son kirit');
let C = +prompt('son kirit');
let resa = A * A ;
let resb = B * B ;
let resc = C * C ;
let result = resa + resb + resc;
console.log(result);

5. Berilgan ikki sonning darajasini hisoblang (A^B).
let A = +prompt('son kiriting');
let B = +prompt('son kiriting');
let result = A**B;
console.log(result);

