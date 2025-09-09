document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-lightbox]");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = "<img />";
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      lightboxImg.src = link.href;
      lightbox.classList.add("show");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
});
