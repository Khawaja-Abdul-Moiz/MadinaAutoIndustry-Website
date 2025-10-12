  document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });

      // Custom navigation
      document.querySelector(".prev")?.addEventListener("click", () => swiper.slidePrev());
      document.querySelector(".next")?.addEventListener("click", () => swiper.slideNext());
    } else {
      console.error("Swiper is not defined");
    }
  });