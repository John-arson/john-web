fetch('https://shio-rin.github.io/john-web/files/js/templates/html/search.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_search");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
