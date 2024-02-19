import ScrollReveal from "scrollreveal";

function scrollReveal() {
  ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 2000,
  });

  ScrollReveal().reveal(
    ".popular__title, .premium__col-picture__img, .servise__picture-hint",
    {
      origin: "top",
    }
  );

  ScrollReveal().reveal(
    ".discover__picture-hint, .disover__title, .partners, .popular__controls, .premium__col-picture__hint, .servise__picture-hint__guide",
    {
      origin: "left",
    }
  );
  // ScrollReveal().reveal(
  //   ".discover__picture-scroll, .disover__text, .popular__controls, .premium__col-picture__img, .servise__picture-hint",
  //   {
  //     origin: "right",
  //   }
  // );
  ScrollReveal().reveal(
    ".discover__picture-scroll, .disover__text, .discover__form, .premium__col-desc, .servise__desc-reveal",
    {
      origin: "bottom",
    }
  );
}

export default scrollReveal;
