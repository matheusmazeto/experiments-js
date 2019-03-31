(function() {
  "use strict";

  const remaining = document.querySelector('[data-js="remaining"]');
  const textArea = document.querySelector('[data-js="characters"]');
  const maxLength = 50;

  textArea.addEventListener("input", inputHasCharacters);

  function inputHasCharacters() {
    const textAreaLength = textArea.value.length;
    remaining.textContent = maxLength - textAreaLength;
    return remaining.textContent <= 0 ? (remaining.textContent = 0) : null;
  }
})();
