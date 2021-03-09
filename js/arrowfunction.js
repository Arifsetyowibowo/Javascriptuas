let fungsi = function (nama) {
    console.log("belajar function"+ nama);
};

fungsi();

fungsi("joni");

let contoh = (nama)=>{
    console.log("belajar function " +nama);
}

contoh("Budi");

let tambah = function (a,b) {
    return a + b;
};

console.log(tambah(2,3));

let plus = (a,b) => a + b;

console.log(plus(2,3));

let hasil = (a) => a*2;

console.log(hasil(4));

let lagi = ()=>console.log("coba lagi");

lagi();


let belajar = () => {
    console.log("BARIS SATU");
    console.log("BARIS DUA");
    console.log("BARIS TIGA");
    console.log("BARIS SELANJUTNYA");
}

belajar();


let nilai = 1;

let uji = nilai < 7 ? () => (predikat = "GAGAL") : () => (predikat = "LULUS");
console.log(uji());