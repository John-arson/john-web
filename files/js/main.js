function searchfor() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searcharticles");
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchdropdown");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (filter == "SEARCH=ALL") {
      li[i].style.display = 'block';
    } else {
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        if (filter.length < 1) {
          li[i].style.display = 'none';
        } else {
          li[i].style.display = 'block';
        }
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}
var liList = document.getElementById("searchdropdown").getElementsByTagName("li");
var listcount = liList.length
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true;
    } else {
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|Mobi|Safari|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}
  if (hasTouchScreen) {
    scrollnavbar();
  }
}
function show() {
  document.querySelectorAll(".search").forEach(a=>a.style.display = "block");
}

function scrollnavbar() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("toolbarheader").style.top = "0";
      document.getElementById("search").style.top = "51px";
      document.getElementById("leftmargin").style.top = "51px";
    } else {
      document.getElementById("toolbarheader").style.top = "-51px";
      document.getElementById("search").style.top = "0";
      document.getElementById("leftmargin").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}

function myFunction() {
  var x = document.getElementById("toolbarheader");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 
