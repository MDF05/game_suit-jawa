// alert("website siap di tampilkan");

// let a = true;

// while (a) {
//   alert(
//     "hari hati anda masuk pengulangan tanpa batas,tekan tombol cancel untuk keluar dari pengulangan"
//   );

//   a = confirm("silahkan tekan tombol cancel untuk keluar dari pengulangan");
// }

// for (var i = 0; i <= 10; i++) {
//   console.log("mari berhitung " + i + " + " + 1 + " = " + (i + 1));
// }

// let saya = prompt("siapakah nama president kita");
// if (saya == "jokowi" || saya == "Jokowi" || saya == "JOKOWI") {
//   alert("benar, jawaban anda benar selamat kamu dapat sepeda ya");
// } else {
//   alert("sayang sekali jawwaban mu salah nak sepeda nya ga dapat");
// // }

// let uya = prompt("adakah anggota kita yang keluar dari grup");
// let uyu = prompt("adakah anggota kita yang meraih prestasi");
// let uyi = prompt("adakah anggota kita yang mengecewakan kita");
// let uye = prompt("adakah anggota kita yang baru masuk");

// for (i = 1; i <= 10; i++) {
//   if (i == uya) {
//     console.log(
//       "laporan hari ini bahwa anggota no " + uya + " keluar dari grup"
//     );
//   } else if (i == uyu) {
//     console.log(
//       "laporan hari ini bahwa anggota no " + uyu + " meraih prestasi"
//     );
//   } else if (i == uyi) {
//     console.log(
//       "laporan hari ini bahwa anggota no " + uyi + " mengecewakan kita"
//     );
//   } else if (i == uye) {
//     console.log(
//       "laporan bahwa hari ini kita mendapat anggota baru yaitu no " + uye
//     );
//   } else {
//     console.log("anggota no " + i + " baik seperti biasa");
//   }
// }

// for (i = 1; i <= 10; i++) {
//   if (i == 8 || i == 1) {
//     console.log("sedang lembur bos " + i);
//   } else if (i <= 5) {
//     console.log("beroperasi kurang baik no " + i);
//   } else if (i == 3) {
//     console.log("lagi mogok dijalan no" + i);
//   } else {
//     console.log("beroperasi dengan baik " + i);
//   }
// }

// let yaya = confirm(
//   "bersiap masuk pengulangan kita ya, siap kita mulai dari sekarang"
// );
// while (yaya == true) {
//   alert("jangan masuk kemari lah ini infinite loop tanpa batas");

//   yaya = confirm("keluar tkan cancel");
// }

// for (i = true; i == true; i = confirm("baku hantam boss")) {
//   i = confirm("klik cancel");
// }

// let saya = prompt("tell someething");
// if (saya % 2 == 0) {
//   alert(saya + " ini angka genap");
// } else if (saya % 2 == 1) {
//   alert(saya + " ini angka ganjil");
// } else {
//   alert('"' + saya + '"' + " ini bukan merupakan angkan");
// }

// let i = prompt(
//   "pilih lah dianatara kata kata berikut ini \n nasi kotak \n nasi bungkus \n nasi gurih"
// );
// switch (i) {
//   case "nasi kotak":
//     alert("kamu sering ke kondangan kan");
//     break;

//   default:
//     alert("kamu gak makan apapun ya kasihan banget sih mu" + i);
//     break;
// }

// let angka = parseInt(prompt("tell someething"));
// let benar = 5;
// while (benar != 5) {
//   let benar = parseInt(
//     prompt("tebak angka kalau beruntung dapat hadiah senilai 50m,\n contoh 10")
//   );

//   switch (benar) {
//     case 2:
//     case 3:
//     case 6:
//     case 4:
//       alert("sedikit lagi tebakan kamu hampir benar sayang sekali ❗❗❗");
//       break;
//     case 5:
//       alert(
//         "selamat kamu memenangkan hadiah sebesar 5m minta ke bank bilang aja nama ku ya"
//       );
//       break;

//     default:
//       alert(
//         angka +
//           " bukan nilai nya anda kurang beruntung sayang sekali,\n mau coba lagi"
//       );
//       break;
//   }
// }

// let ab = prompt("enak lah anjeng di rumah aja pantes dia di rumah aja gitu");
// confirm(
//   "emang kau anak  anjeng " +
//     ab +
//     " dasar beban keluarga kau ya enak pula kau pakek usaha orang"
// );

let cobaLagi = true;
while (cobaLagi) {
  let komputer = Math.random();
  let kamu = prompt("silahkan pilih di bawah ini \n semut \n gajah \n orang");

  if (komputer < 0.3) {
    komputer = "semut";
  } else if (komputer < 0.6) {
    komputer = "orang";
  } else if (komputer < 1) {
    komputer = "gajah";
  }

  alert("kamu memilih " + kamu);
  alert("komputer memilih " + komputer);

  if (kamu == "orang") {
    kamu = "orang";
  } else if (kamu == "gajah") {
    kamu = "gajah";
  } else if (kamu == "semut") {
    kamu = "semut";
  }

  if (komputer == kamu) {
    alert(
      "komputer memilih " +
        komputer +
        " dan " +
        " kamu memilih " +
        kamu +
        "\n tidak ada pemenang sayang sekali ya ⛔"
    );
  } else if (komputer == "gajah") {
    if (kamu == "orang") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah komputer 🎉"
      );
    } else if (kamu == "semut") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah kamu 🎉"
      );
    }
  } else if (komputer == "orang") {
    if (kamu == "gajah") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah kamu 🎉"
      );
    } else if (kamu == "semut") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah komputer 🎉"
      );
    }
  } else if (komputer == "semut") {
    if (kamu == "gajah") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah komputer 🎉"
      );
    } else if (kamu == "orang") {
      alert(
        "komputer memilih " +
          komputer +
          " dan " +
          " kamu memilih " +
          kamu +
          "\n pemenang nya adalah kamu 🎉"
      );
    }
  } else {
    alert(
      "tampak nya ada kesalahan dengan pilihan mu \n" +
        '"' +
        kamu +
        '"' +
        "\n coba perhatikan kembali jawaban mu "
    );
  }

  cobaLagi = confirm(
    "mau coba lagi ? \n klik ok untuk lagi ❗ \n klik cancel untuk keluar ❗"
  );
}
