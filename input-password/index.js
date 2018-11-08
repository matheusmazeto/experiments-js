(function(doc) {
  const input = doc.querySelector('[data-js="input"]');
  const icon = doc.querySelector('[data-js="icon"]');

  icon.addEventListener("click", () => {
    if (input.type === "password") {
      icon.classList.toggle("fa-eye-slash");
      input.setAttribute("type", "text");
    } else {
      icon.classList.remove("fa-eye-slash");
      input.setAttribute("type", "password");
    }
  });
})(document);
