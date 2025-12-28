
process.stdin.setEncoding('utf8');

console.log("Masukkan jari-jari lingkaran:");
process.stdin.on('data', (input) => {
  const data = input.trim();
  let jari_jari = parseFloat(data);

  let phi;
  if (jari_jari % 7 == 0) {
    phi = 22/7;
  } else {
    phi = 3.14;
  }

  let luas_lingkaran = phi * jari_jari * jari_jari;
  let keliling_lingkaran = 2 * phi * jari_jari;
  
  console.log("\n=== Hasil Perhitungan ===");
  console.log("Jari-jari: " + jari_jari);
  console.log("Nilai phi: " + phi);
  console.log("Luas lingkaran adalah " + luas_lingkaran.toFixed(2));
  console.log("Keliling lingkaran adalah " + keliling_lingkaran.toFixed(2));
  
  process.exit(0);
});
