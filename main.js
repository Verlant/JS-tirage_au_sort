let btn_add_name = document.querySelector(".btn-add-name"),
  btn_tirage = document.querySelector(".btn-tirage"),
  array_name = [];

function add_name_to_array(array) {
  let name = prompt("Ajoutez un nom au tirage sort : ");
  array.push(name);
  console.log(array);
}

function tirage_au_sort(array) {
  let size_of_array_name = array_name.length,
    index_winner = Math.trunc(Math.random() * size_of_array_name),
    winner = array[index_winner];
  alert(winner);
}

btn_add_name.addEventListener("click", (e) => {
  add_name_to_array(array_name);
});

btn_tirage.addEventListener("click", (e) => {
  tirage_au_sort(array_name);
});

// "antoine",
// "marine",
// "kevin",
// "ammar",
// "remy",
// "soraya",
// "alexandre",
// "jean-françois",
// "adnene",
// "olena",
// "illia",
// "nael",
// "yassine",
// "mathias",
// "elsa",
// "dimitri",
// "manuel",
// "terry"
