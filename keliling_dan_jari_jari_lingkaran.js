let jari_jari = 8;
let phi = 0;

luas = phi * jari_jari * jari_jari;
keliling = 2 * phi * jari_jari;

if (jari_jari % 7 == 0) {
    phi = 22/7;
} else {
    phi = 3.14;
}

luas_lingkaran = phi * jari_jari * jari_jari;
console.log("luas lingkaran adalah " + luas_lingkaran); 

keliling_lingkaran = 2 * phi * jari_jari;
console.log("keliling lingkaran adalah " + keliling_lingkaran);

