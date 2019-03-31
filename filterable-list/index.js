(function() {
  "use strict";

  const allLeagues = [
    "Premier League",
    "Seria A",
    "Ligue 1",
    "La Liga",
    "Eredivisie",
    "Bundesliga",
    "Champions League",
    "Euro Cup",
    "World Cup"
  ];
  const input = document.querySelector("[data-js=searchInput]");
  const leagues = document.querySelector("[data-js=listLeagues]");

  showLeagues();
  input.addEventListener("input", getInputValue);

  function getInputValue(e) {
    const inputValue = e.target.value;
    return console.log(inputValue);
  }

  function showLeagues(e) {
    allLeagues.forEach(item => {
      leagues.innerHTML += `<li>${item}</li>`;
    });
  }

  const searchCharacters = search => {
    let regex = new RegExp();
    let test = regex.match(search);
    regex.allLeagues.filter(item => {
      return console.log(item == test);
    });
  };
})();
