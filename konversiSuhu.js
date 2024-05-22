/*
Buatlah sebuah program sederhana yang meminta pengguna untuk memasukkan suhu dalam derajat Celsius 
dan kemudian mengonversinya menjadi suhu dalam derajat Fahrenheit. Program tersebut harus menampilkan suhu dalam kedua satuan.

Rumus Konversi:
F = 9/5C + 32

Contoh:

Masukkan suhu dalam derajat Celsius: 30
Suhu dalam derajat Fahrenheit: 86

Kriteria:

Program harus menerima input dari pengguna.
Program harus mengonversi suhu dari derajat Celsius ke derajat Fahrenheit menggunakan rumus yang diberikan.
Program harus menampilkan suhu dalam kedua satuan.
*/

function konversiSuhu(c){
    return (9/5 * c) + 32;
}

let c = parseFloat(prompt('Masukkan suhu dalam derajat Celcius: '));

let hasilKonversi = konversiSuhu(c);
console.log(`Suhu ${c} derajat celcius = ${hasilKonversi} derajat fahreintheit`);