
const nom = document.getElementById("name");
const prenom = document.getElementById("firstname");
const cin = document.getElementById("identity");
const age = document.getElementById("hold");

const nomSpan = document.getElementById("nom_span");
const prenomSpan = document.getElementById("prenom_span");
const cinSpan = document.getElementById("cin_span");
const ageSpan = document.getElementById("age_span");

const  tapeName = document.getElementById("tape_nom");
const tapePrenom = document.getElementById("tape_prenom");
const tapeCin = document.getElementById("tape_cin");
const tapeAge = document.getElementById("tape_age");

const button = document.getElementById("button");
const place = document.querySelector(".place");

nom.onkeyup = function() {
    tapeName.innerText = nom.value;
    nom.style.borderColor = "";
    nomSpan.style.color = "";
}

prenom.onkeyup =  function() {
    tapePrenom.innerText = prenom.value;
    prenom.style.borderColor = "";
    prenomSpan.style.color = "";
}

cin.onkeyup = function() {
    tapeCin.innerText = cin.value;
    cin.style.borderColor = "";
    cinSpan.style.color= "";
}

age.onkeyup = function() {
    tapeAge.innerText = age.value;
    age.style.borderColor = "";
    ageSpan.style.color = "";
}

button.onclick = function() {
    if(nom.value == "") {
        nom.style.borderColor = "red";
        nomSpan.style.color = "red";
    };
    if(prenom.value == "") {
        prenom.style.borderColor = "red";
        prenomSpan.style.color = "red";
    };
    if(cin.value == ""){
        cin.style.borderColor = "red";
        cinSpan.style.color= "red";
    }
    if (age.value == "") {
        age.style.borderColor = "red";
        ageSpan.style.color = "red";
    } else{
        const newRow = document.createElement("tr");
        newRow.innerHTML += `<tr>
        <td class="nom">${nom.value} </td>
        <td class="prenom"> ${prenom.value}</td>
        <td class="CIN">${cin.value}</td>
        <td class="age">${age.value}</td>
        </tr>`;
        place.appendChild(newRow);
        reset();
    }
   
}

function reset() {
    nom.value = "";
    prenom.value = ""; 
    cin.value = "";
    age.value = "";
    tapeName.value = "";
    tapePrenom.value = "";
    tapeCin.value = "";
    tapeAge.value = "";
}


const darkBtn = document.getElementById("reglage");
let isDarkMode = false;

darkBtn.onclick = function () {
    let mode = document.querySelector('body');
    if (isDarkMode) {
        mode.classList.remove('dark');
        isDarkMode = false;  
    } else {
        mode.classList.add( 'dark');
        isDarkMode = true;
    }
    
}