document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    navbar.style.backgroundColor = window.scrollY > 50 ? "#1e293b" : "transparent";
  });

  // Toggle Mobile Menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("visible");
  });

  // Chart.js Integration
  const ctx = document.getElementById("projectChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Completed Projects",
          data: [12, 15, 18, 22, 25, 30],
          borderColor: "#3b82f6",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
