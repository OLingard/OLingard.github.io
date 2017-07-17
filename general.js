function switchClass(x) {
        if(document.getElementsByClassName("item active").length){
            document.getElementsByClassName("item active")[0].className = "item";
        }
        x.className = "item active";
        return true;
    }

function ass1() {
  $(location).attr('href', 'http://linkedin.com/in/oscarlingard');
}

function ass2() {
  $(location).attr('href', 'mailto:oscarlingard@gmail.com');
}

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
