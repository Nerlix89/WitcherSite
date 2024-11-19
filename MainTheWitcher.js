const SectionsDescriptions = document.querySelectorAll(".section-flex-area");
const SectionsVideos = document.querySelectorAll(".section-video");
const SupportCards = document.querySelectorAll(".support-card");

SectionsDescriptions.forEach((descrip, index) => {
  descrip.addEventListener("mouseenter", () => {
    SectionsVideos[index].play();
  });
  descrip.addEventListener("mouseleave", () => {
    SectionsVideos[index].pause();
    SectionsVideos[index].currentTime = 0;
  });
  descrip.addEventListener('click', () => {
    // Получаем URL из data-url атрибута
    const url = descrip.getAttribute('data-url');
    // Переходим на указанный URL
    if (url) {
        window.location.href = url;
    }
  });
})

SupportCards.forEach((Card) =>
{
  Card.addEventListener("mouseleave", () => {
    Card.classList.remove("fade-out-background"); 
    void Card.offsetWidth; 
    Card.classList.add("fade-out-background"); 
  })
})




