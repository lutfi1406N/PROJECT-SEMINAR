function verifikasiKode() {
    const kode = document.getElementById("kodeVerifikasi").value;
    
    // Ganti validasi ini sesuai kebutuhan
    if (kode === "123456") {
      document.getElementById("successModal").classList.add("active");
    } else {
      alert("Kode salah atau tidak valid.");
    }
  }

  function closeModal() {
    document.getElementById("successModal").classList.remove("active");
  }