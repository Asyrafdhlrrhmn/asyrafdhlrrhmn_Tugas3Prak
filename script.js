<<<<<<< HEAD
const scrollBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

=======
const scrollBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
>>>>>>> 073110a2421cba1fc54ccdccce99aaa519129eb0
