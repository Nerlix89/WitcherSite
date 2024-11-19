const SupportCards = document.querySelectorAll(".support-card");
const SiteNavigationButtons = document.querySelectorAll(".site-navigation-button");
let OtherSitesNavigation = document.querySelector(".other-sites-navigation")
document.querySelector(".menu-toggle").onclick = function(){
  this.classList.toggle("active");
  OtherSitesNavigation.classList.toggle("active");
}

SupportCards.forEach((Card) =>
{
  Card.addEventListener("mouseleave", () => {
    Card.classList.remove("fade-out-background"); 
    void Card.offsetWidth; 
    Card.classList.add("fade-out-background"); 
    })
})

SiteNavigationButtons.forEach((descrip) => {
  descrip.addEventListener('click', () => {
    // Получаем URL из data-url атрибута
    const url = descrip.getAttribute('data-url');
    // Переходим на указанный URL
    if (url) {
        window.location.href = url;
    }
  });
})