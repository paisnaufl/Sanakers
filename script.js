document.getElementById("picboyong").addEventListener("click", function () {
  document.getElementById("intro").innerHTML =
    "Saya Adhyaksa Putra, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum exercitationem quo reprehenderit voluptates culpa sint, ad laborum quae libero nisi modi delectus optio natus suscipit magnam inventore error aut.";
});

document.getElementById("picgyj").addEventListener("click", function () {
  document.getElementById("intro").innerHTML =
    "Saya Faiz Naufal Akbar, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum exercitationem quo reprehenderit voluptates culpa sint, ad laborum quae libero nisi modi delectus optio natus suscipit magnam inventore error aut.";
});

document.getElementById("pichaeenaa").addEventListener("click", function () {
  document.getElementById("intro").innerHTML =
    "Saya Farel Adrian, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum exercitationem quo reprehenderit voluptates culpa sint, ad laborum quae libero nisi modi delectus optio natus suscipit magnam inventore error aut.";
});

document.getElementById("picboyong").addEventListener("click", function () {
  document.querySelector(".clicked-button")?.classList.remove("clicked-button");
  this.classList.toggle("clicked-button");
});

document.getElementById("picgyj").addEventListener("click", function () {
  document.querySelector(".clicked-button")?.classList.remove("clicked-button");
  this.classList.toggle("clicked-button");
});

document.getElementById("pichaeenaa").addEventListener("click", function () {
  document.querySelector(".clicked-button")?.classList.remove("clicked-button");
  this.classList.toggle("clicked-button");
});

