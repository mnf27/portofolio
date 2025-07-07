// Navbar close on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).hide();
    }
  });
});

// Form submit
const form = document.getElementById("formKontak");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch("https://formspree.io/f/xeokbqre", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      form.reset();
      const modal = new bootstrap.Modal(
        document.getElementById("modalBerhasil")
      );
      modal.show();
    } else {
      alert("Ups! Gagal mengirim pesan.");
    }
  } catch (error) {
    alert("Terjadi kesalahan. Coba lagi nanti.");
  }
});

// Scroll to top
const btn = document.getElementById("backToTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// AOS init
AOS.init();

// Typed.js init
new Typed("#typed", {
  strings: [
    "Mahasiswa Teknologi Informasi",
    "Backend Developer",
    "Frontend Developer",
    "Problem Solver",
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true,
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.classList.remove("show-navbar");
    navbar.classList.add("hide-navbar");
  } else {
    // Scroll ke atas, tampilkan navbar transparan & blur
    navbar.classList.remove("hide-navbar");
    navbar.classList.add("show-navbar");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
