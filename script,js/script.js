// Mensagem de boas-vindas
document.getElementById("welcomeBtn").addEventListener("click", function () {
    alert("🎉 Seja bem-vindo ao Colégio Estadual Ambrósio Bini! Estamos felizes por sua visita.");
  });
  
  // Destaque da seção ativa ao rolar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
  