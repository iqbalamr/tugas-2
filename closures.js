
function selamatDatang(tempat){
    return function (nama) {
        var a = tempat
        var b = nama
        console.log('Hai ' + b + ',' + 'selamat datang di ' + a );
    }
}

let bali = selamatDatang('Bali');
let jogja = selamatDatang('Jogja');
let jakarta = selamatDatang('Jakarta');

bali('Bintang');

console.dir(bali);