process.stdin.setEncoding('utf8');

console.log("=== Program Konversi Suhu ===");
console.log("Masukkan nilai suhu:");

let step = 1;
let temp;
let tempSource;

process.stdin.on('data', (input) => {
  const data = input.trim();
  
  if (step === 1) {
    temp = parseFloat(data);
    
    if (isNaN(temp)) {
      console.log("Input tidak valid! Masukkan angka:");
      return;
    }
    
    console.log("\nSuhu asal (Celcius/Fahrenheit/Reamur/Kelvin):");
    step = 2;
    
  } else if (step === 2) {
    tempSource = data;
    console.log("\nKonversi ke (Celcius/Fahrenheit/Reamur/Kelvin):");
    step = 3;
    
  } else if (step === 3) {
    const convertTo = data;
    let hasil = temp;
    
    if (typeof temp === "number") {
      if (tempSource === "Celcius") {
        if (convertTo === "Fahrenheit") {
          hasil = (temp * 9/5) + 32;
        } else if (convertTo === "Kelvin") {
          hasil = temp + 273.15;
        } else if (convertTo === "Reamur") {
          hasil = temp * 4/5;
        } else if (convertTo === "Celcius") {
          hasil = temp;
        } else {
          console.log("Satuan konversi tidak valid!");
          process.exit(1);
        }
      } 
      else if (tempSource === "Fahrenheit") {
        if (convertTo === "Celcius") {
          hasil = (temp - 32) * 5/9;
        } else if (convertTo === "Kelvin") {
          hasil = (temp - 32) * 5/9 + 273.15;
        } else if (convertTo === "Reamur") {
          hasil = (temp - 32) * 4/9;
        } else if (convertTo === "Fahrenheit") {
          hasil = temp;
        } else {
          console.log("Satuan konversi tidak valid!");
          process.exit(1);
        }
      } 
      // Dari Reamur
      else if (tempSource === "Reamur") {
        if (convertTo === "Celcius") {
          hasil = temp * 5/4;
        } else if (convertTo === "Kelvin") {
          hasil = temp * 5/4 + 273.15;
        } else if (convertTo === "Fahrenheit") {
          hasil = (temp * 9/4) + 32;
        } else if (convertTo === "Reamur") {
          hasil = temp;
        } else {
          console.log("Satuan konversi tidak valid!");
          process.exit(1);
        }
      } 
      // Dari Kelvin
      else if (tempSource === "Kelvin") {
        if (convertTo === "Celcius") {
          hasil = temp - 273.15;
        } else if (convertTo === "Fahrenheit") {
          hasil = (temp - 273.15) * 9/5 + 32;
        } else if (convertTo === "Reamur") {
          hasil = (temp - 273.15) * 4/5;
        } else if (convertTo === "Kelvin") {
          hasil = temp;
        } else {
          console.log("Satuan konversi tidak valid!");
          process.exit(1);
        }
      } else {
        console.log("Satuan asal tidak valid!");
        process.exit(1);
      }
    } else {
      console.log("Tipe data harus berupa angka!");
      process.exit(1);
    }
    
    console.log("\n=== Hasil Konversi ===");
    console.log(`${temp}° ${tempSource} = ${hasil}° ${convertTo}`);
    process.exit(0);
  }
});