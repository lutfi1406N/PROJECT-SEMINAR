function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const img = btn.querySelector("img");
    if (input.type === "password") {
      input.type = "text";
      img.src = "img/mata tutup.png"; // ganti sesuai nama file gambar
    } else {
      input.type = "password";
      img.src = "img/mata.png";
    }
  }
  