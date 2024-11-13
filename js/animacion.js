document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    // Set each card to hidden initially
    cards.forEach(card => card.classList.add("hidden"));
  
    // IntersectionObserver setup
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up"); // Add animation class
          entry.target.classList.remove("hidden"); // Remove initial hidden class
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.9 }); // Trigger when 10% of the card is visible
  
    // Observe each card
    cards.forEach(card => observer.observe(card));
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".wine2 li");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Añade la clase 'visible' cuando el elemento es visible
                observer.unobserve(entry.target); // Deja de observar el elemento una vez animado
            }
        });
    }, { threshold: 0.9 }); // Se activa cuando el 10% del elemento es visible

    items.forEach(item => observer.observe(item));
});
