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
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("toolbarheader").style.top = "0";
    document.getElementById("search").style.top = "51px";
  } else {
    document.getElementById("toolbarheader").style.top = "-51px";
    document.getElementById("search").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
} 
function show() {
  document.querySelectorAll(".search").forEach(a=>a.style.display = "block");
}