function switchClass(x) {
        if(x.parentElement.getElementsByClassName("item active").length){
            x.parentElement.getElementsByClassName("item active")[0].className = "item";
        }
        x.className = "item active";
        return true;
}

function linkedinAnchorLink() {
  $(location).attr('href', 'http://linkedin.com/in/oscarlingard');
}

function emailAnchorLink() {
  $(location).attr('href', 'mailto:oscarlingard@gmail.com');
}


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top + 300 >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  var timelineItems = document.querySelectorAll(".timeline li");
  for (i = 0; i < timelineItems.length; i++) {
    if (isElementInViewport(timelineItems[i])) {
      timelineItems[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
