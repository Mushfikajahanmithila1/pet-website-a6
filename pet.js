// load pets
function loadPets() {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => loadPetsbtn(data))
    .catch((err) => console.log("error"));
}
// loadpets
function loadPetsbtn(data) {
  const imgCenter = document.getElementById("imges");
  data.forEach((item) => {
    console.log(item.pets);
  });
}
loadPets();
