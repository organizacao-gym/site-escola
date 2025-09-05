// Mensagem de boas-vindas
const welcomeBtn = document.getElementById("welcomeBtn");
if (welcomeBtn) {
  welcomeBtn.addEventListener("click", () => {
    alert("🎉 Seja bem-vindo ao Colégio Estadual Ambrósio Bini! Estamos felizes por sua visita.");
  });
}

// Destaque da seção ativa ao rolar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

function highlightCurrentSection() {
  let currentSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 60 && rect.bottom >= 60) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightCurrentSection);
window.addEventListener("load", highlightCurrentSection);
