// Display social handles when hovering over images on social page
var item = document.getElementsbyClassName("socialImg");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout"), func1, false);

function func() {
  document.getElementsByClassName("hidden").setAttribute("style", "display:block;")
}

function func1() {
  document.getElementsByClassName("hidden").setAttribute("style", "display:none;")
}
