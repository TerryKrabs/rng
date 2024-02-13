let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");
let randomBtn = document.getElementById("randomBtn");
let rndName = document.getElementById("rndName");
let removeBtn = document.getElementById("removeBtn");
let nameArray = [];

if(localStorage.getItem("names")) {
    nameArray = JSON.parse(localStorage.getItem("names"));
}

addBtn.addEventListener('click', function() {
    if(input.value == "") return;
    nameArray.push(input.value);
    input.value = "";
    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomBtn.addEventListener('click', function() {
    rndName.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function() {
    let index = nameArray.indexOf(input.value);
    if(index == -1) return;
    nameArray.splice(index, 1);
    input.value = "";
    localStorage.setItem("names", JSON.stringify(nameArray));
});

    function RandomName(array) {
    return array[Math.floor(Math.random() * array.length)];
    }