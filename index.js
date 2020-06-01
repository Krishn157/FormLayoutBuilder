const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".dropped");
var form = document.createElement("form");
draggableElements.forEach((elem) => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach((elem) => {
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("drop", drop);
});

function dragStart(event) {
  console.log("dragging");
  event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

var rc = 0;
var cc = 0;

function drop(event) {
  event.preventDefault();
  var id = prompt("Please enter an id, try to keep it unique !");
  var data = event.dataTransfer.getData("text");
  switch (data) {
    case "text-input":
      var x = document.createElement("input");
      x.setAttribute("type", "text");
      x.setAttribute("id", id);
      x.setAttribute("placeholder", "Enter Text");
      break;
    case "radio-input":
      rc++;
      var x = document.createElement("input");
      x.setAttribute("type", "radio");
      form.appendChild(document.createTextNode("RadioButton:" + rc));
      x.setAttribute("id", id);
      break;
    case "check-input":
      cc++;
      form.appendChild(document.createTextNode("CheckBox:" + cc));
      var x = document.createElement("input");
      x.setAttribute("type", "checkbox");
      x.setAttribute("id", id);
      break;
    case "file-input":
      var x = document.createElement("input");
      x.setAttribute("type", "file");
      x.setAttribute("id", id);
      break;
    case "submit-input":
      var x = document.createElement("input");
      x.setAttribute("type", "submit");
      x.setAttribute("id", id);
      break;
    default:
      return;
  }

  form.appendChild(x);
  form.appendChild(document.createTextNode("   "));
  event.target.appendChild(form);
}

function clearFields() {
  rc = 0;
  cc = 0;
  form.innerHTML = "";
}

function onSubmit() {
  console.log(form.outerHTML);
}

function insertBreak() {
  form.appendChild(document.createElement("br"));
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
