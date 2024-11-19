const SupportCards = document.querySelectorAll(".support-card");

    // Получаем элементы
    const IconImages = document.querySelectorAll(".character-icon-image");
    const IconCharacterh1 = document.querySelectorAll(".h1-character");
    const IconCharacterDescription = document.querySelectorAll(".character-description");
    const IconCharacterImages = document.querySelectorAll(".character-image");

    const SectionImage = document.querySelector(".section-image");
    const Sectionh1 = document.querySelector(".character-section-h1");
    const SectionTextContent = document.querySelector(".text-content");

    let ActivatedIcon = null;

    // Функция активации иконки
    function ActivateIcon(icon) {
      // Сбрасываем активное состояние предыдущей иконки, если оно есть
      if (ActivatedIcon) {
        ActivatedIcon.classList.remove("active");
      }
      // Устанавливаем новое активное состояние
      ActivatedIcon = icon;
      ActivatedIcon.classList.add("active");
    }

    // Обработчики событий на каждой иконке
    IconImages.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        ActivateIcon(icon); // Активируем выбранную иконку

        // Обновляем изображение и текст в основной секции
        SectionImage.src = IconCharacterImages[index].src;
        Sectionh1.textContent = IconCharacterh1[index].textContent;
        SectionTextContent.textContent = IconCharacterDescription[index].textContent;
      });
    });

SupportCards.forEach((Card) =>
    {
      Card.addEventListener("mouseleave", () => {
        Card.classList.remove("fade-out-background"); 
        void Card.offsetWidth; 
        Card.classList.add("fade-out-background"); 
        })
    })
