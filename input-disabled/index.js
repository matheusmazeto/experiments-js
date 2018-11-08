(function(doc) {
  const input = doc.querySelector('[data-js="inputField"]');
  const check = doc.querySelector('[data-js="checked"]');

  check.addEventListener("click", () => {
    return check.checked
      ? input.setAttribute("disabled", "disabled")
      : input.removeAttribute("disabled");
  });
})(document);
