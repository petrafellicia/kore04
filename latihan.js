// alert("Hello world!");

// var nama = "Teletubies";
// console.log(nama.charAt(5));

// var bil = Math.random();
// console.log(bil);

// function jumlahDuaBilangan(a, b) {
//   var total;
//   total = a + b;
//   return total;
// }

// alert(jumlahDuaBilangan(1, 2));
// alert(jumlahDuaBilangan(25, 30));
// alert(jumlahDuaBilangan(1500, 17.5));

// function jumlahVolumeDuaKubus(a, b) {
//   var a = 8;
//   var b = 3;
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));

// // function tambah(a, b) {
// //   return a + b;
// // }

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = tambah(1, 2, 3, 4, 5);
// console.log(coba);

// var a = parseInt(prompt("Masukkan nilai 1 : "));
// var b = parseInt(prompt("Masukkan nilai 2 : "));
// var hasil = tambah(a, b);
// console.log(hasil);

// function kali(a, b) {
//   return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

// function cetakAngka(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   return cetakAngka(n - 1);
// }

// cetakAngka(10);

// function fak(n) {
//   if (n == 0) return 1;
//   return n * fak(n - 1);
// }

// // 1. Menambah isi array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[3] = "Doddy";

// console.log(arr);

// //Menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];
// arr[1] = undefined;
// console.log(arr);

// //Menampilkan isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];
// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + "" + arr[i]);
// }

// //Metode pada array
// var arr = ["Sandhika", "Galih", "Nofa"];
// // 1.join
// // console.log(arr.join(','));
// // 2. push and pop
// // arr.push('Doddy', 'Fitri');
// // arr.pop();
// // arr.pop();
// // console.log(arr.join('-'));
// // 3. unshift and shift
// // arr.unshift('Doddy');
// // arr.shift();
// // console.log(arr.join('-'));
// // 4. splice
// // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// // arr.splice(1, 2, 'Doddy', 'Fitri');
// // console.log(arr.join('-'));
// // 5. slice
// // slice(awal, akhir);
// // var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
// // var arr2 = arr.slice(1, 4);
// // console.log(arr.join('-'));
// // console.log(arr2.join('-'));
// // foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Sandhika", "Galih", "Nofa"];
// // for(var i = 0; i < angka.length; i++){
// //   console.log(angka[i]);
// // }
// // angka.forEach(function (e) {
// //   console.log(e);
// // });

// // var cetak = function (e, i) {
// //   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// // };
// // angka.forEach(cetak);
// // 7. map
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// // var angka2 = angka.map(function (e) {
// //   return e * 2;
// // });
// // console.log(angka2.join("-"));
// // 8. sort
// // console.log(angka.join("-"));
// // angka.sort(function (a, b) {
// //   return a - b;
// // });
// // console.log(angka.join("-"));
// // 9. filter
// var angka2 = angka.find(function (x) {
//   return x > 5;
// });
// console.log(angka2.join("-"));

// DOM Selection
// document.getElementById('') -> kembalikan elemen
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Petra Fellicia";

// // document.getElementsByTagName()
// // -> HTMLCollections
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // document.getElementByClassName()
// // HTMLCollections
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Ini diubah dari JavaScript";

// document.querySelector()
