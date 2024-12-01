createSwiper();

function createSwiper() {
  let output = `
              <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231345_727.jpg"
            alt="모아나"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231344_727.jpg"
            alt="모아나2"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381229034_727.jpg"
            alt="모아나3"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381229034_727.jpg"
            alt="모아나3"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381229034_727.jpg"
            alt="모아나3"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381229034_727.jpg"
            alt="모아나3"
          />
        </div>
        ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    `;

  document.querySelector(".swiper").innerHTML = output;

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    slidesPerView: 1,
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      //   el: ".swiper-scrollbar",
    },
  });
}
