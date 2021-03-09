if (true) {
    console.log("benar");
}else{
    console.log("salah");
}

let nilai,kkm,lulus,gagal,batasatass,batasbawah;

nilai = 80;
kkm = 85;
lulus = "LULUS";
gagal = "Tidak LULUS";
batasatas = 100;
batasbawah = 0;

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= kkm) {
    console.log(lulus);
} else {
    console.log(gagal);
}
} else {
    console.log("nilai eror");
}

