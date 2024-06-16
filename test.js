function keepOnScreen() {
  setTimeout(function () {
    let cont = document.getElementById("container");
    while (cont.firstChild) {
      cont.removeChild(cont.firstChild);
    }
    createMarker();
  }, 2000);
}

function setMarker(i) {
  let random = Math.floor(Math.random() * 1000 + 1);
  setTimeout(function () {
    document.getElementById("id-" + i).style.backgroundColor = "red";
  }, random);
}

function createMarker() {
  for (let i = 0; i < 255; i++) {
    let newElem = document.createElement("div");
    newElem.setAttribute("id", "id-" + i);
    console.log(newElem);
    document.getElementById("container").appendChild(newElem);
    if (
      i == 34 ||
      i == 64 ||
      i == 79 ||
      i == 94 ||
      i == 109 ||
      i == 124 ||
      i == 53 ||
      i == 68 ||
      i == 83 ||
      i == 98 ||
      i == 113 ||
      i == 128 ||
      i == 37 ||
      i == 38 ||
      i == 39
    ) {
      setMarker(i);
    }
  }
  keepOnScreen();
}
createMarker();
