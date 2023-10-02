"use strict";

function affichage() {
  const etudiants = [
    { id: 1, fname: "Ahmed", lname: "Amrani" },
    { id: 2, fname: "Rachid", lname: "Karimi" },
    { id: 3, fname: "Hajar", lname: "Tazi" },
  ];
  const tbody = document.getElementById("table-body");
  let data = "";

  etudiants.forEach((element) => {
    data += `<tr class="row${element.id}"><td>${element.id}</td><td class="fName${element.id}">${element.fname}</td> <td class="lName${element.id}">${element.lname}</td>
         <td><button onclick=deleteRow(${element.id})>supprimer</button>
         <button onclick=modifyRow(${element.id})>modifier</button></td>
         </tr>`;
  });

  tbody.innerHTML = data;
}

function deleteRow(id) {
  const row = document.querySelector(".row" + id);
  console.log(row);
  row.style = "display : none;";
}
function modifyRow(id) {
  // Récupérer les données de la ligne actuelle
  const currentfName = document.querySelector(".fName" + id);
  const currentLName = document.querySelector(".lName" + id);

  // Demander à l'utilisateur de saisir de nouvelles valeurs
  const newFirstName = prompt("Nouveau prénom :", currentfName.textContent);
  const newLastName = prompt("Nouveau nom :", currentLName.textContent);

  // Mettre à jour les cellules de la ligne avec les nouvelles valeurs
  if (newFirstName !== null && newLastName !== null) {
    currentfName.textContent = newFirstName;
    currentLName.textContent = newLastName;
  }
}

