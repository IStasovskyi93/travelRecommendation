let countrySearch = document.getElementById("countrySearch").value;
// fetch("travel_recommendation_api.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const imageUrl = data.imageUrl; // Предполагается, что URL изображения хранится в свойстве "imageUrl"
//     // Теперь `imageUrl` содержит URL изображения
//     return loadImage(imageUrl); // Функция для загрузки изображения
//   })
//   .catch((error) => {
//     console.error("Error fetching or parsing JSON:", error);
//   });

function loadImage() {
  fetch("travel_recommendation_api.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const imageUrl = data.imageUrl; // Предполагается, что URL изображения хранится в свойстве "imageUrl"
      // Теперь `imageUrl` содержит URL изображения
      // return loadImage(imageUrl); // Функция для загрузки изображения
      const response = fetch(data);
      const blob = response.Blob(data);
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      // Здесь вы можете добавить изображение на страницу, например, в HTML:
      document.body.appendChild(img);
      return img;
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
  // const response = fetch(data);
  // const blob = response.blob();
  // const img = document.createElement("img");
  // img.src = URL.createObjectURL(blob);
  // // Здесь вы можете добавить изображение на страницу, например, в HTML:
  // document.body.appendChild(img);
  // return img;
}

// async function loadImage(data) {
//   try {
//     const response = await fetch(data);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const blob = await response.blob();
//     const img = document.createElement("img");
//     img.src = URL.createObjectURL(blob);
//     // Здесь вы можете добавить изображение на страницу, например, в HTML:
//     document.body.appendChild(img);
//     return img;
//   } catch (error) {
//     console.error("Error loading image:", error);
//     return null;
//   }
// }

// if (countrySearch.toLowerCase() === data) {
//   // } else {
//   //   alert("You should to search about (countries, cities, beaches)");
//   // }

// if (countrySearch === "countries") {
//   let imageUrl = data.countries[0].cities[0].imageUrl;
// } else {
//   let imageUrl = data.countrySearch[0].imageUrl;
// }
