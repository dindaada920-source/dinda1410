// Fungsi saat tombol "Klik Saya" ditekan
function sapa() {
  alert("Terimakasi suda menunjuni saya,seat selalu💡🌟");
}

// Hitung pengalaman kerja dari tahun 2022 ke tahun sekarang
window.addEventListener("DOMContentLoaded", () => {
  const pengalamanElement = document.querySelector(".experience ul");
  const currentYear = new Date().getFullYear();
  const mulaiKerja = 2022;
  const lamaKerja = currentYear - mulaiKerja;

  const info = document.createElement("p");
  info.style.fontWeight = "bold";
  info.style.color = "#0077cc";
  info.textContent = `Total pengalaman kerja: ${lamaKerja} tahun`;
  pengalamanElement.insertAdjacentElement("afterbegin", info);

  // Tambahkan animasi sederhana ke skill list
  const skills = document.querySelectorAll(".skill-list li");
  skills.forEach((skill, index) => {
    skill.style.opacity = 0;
    skill.style.transform = "translateY(20px)";
    setTimeout(() => {
      skill.style.transition = "all 0.5s ease";
      skill.style.opacity = 1;
      skill.style.transform = "translateY(0)";
    }, 300 * index);
  });
});
