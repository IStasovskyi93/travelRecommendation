function imageUrl() {
  const input = document.getElementById("countrySearch").value.toLowerCase();
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = "";

  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      switch (input) {
        case "countries":
          for (let i = 0; i < 2; i++) {
            const destination = data.countries[i];
            resultDiv.innerHTML += `<img src="${destination.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<h2>${destination.name}</h2>`;
            resultDiv.innerHTML += `<p>Description: ${destination.description}</p>`;
          }
          break;
        case "temples":
          for (let i = 0; i < 2; i++) {
            const destination = data.temples[i];
            resultDiv.innerHTML += `<img src="${destination.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<h2>${destination.name}</h2>`;
            resultDiv.innerHTML += `<p>Description: ${destination.description}</p>`;
          }
          break;
        case "beaches":
          for (let i = 0; i < 2; i++) {
            const destination = data.beaches[i];
            resultDiv.innerHTML += `<img src="${destination.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<h2>${destination.name}</h2>`;
            resultDiv.innerHTML += `<p>Description: ${destination.description}</p>`;
          }
          break;
        default:
          resultDiv.innerHTML = "Search about 'countries, beaches, temples'.";
          break;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred while fetching data.";
    });
}
btnSearch.addEventListener("click", imageUrl);

function clearSearch() {
  resultDiv.innerHTML = "";
  const input = document.getElementById("countrySearch");
  input.value = "";
}
btnReset.addEventListener("click", clearSearch);
