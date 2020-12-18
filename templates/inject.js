javascript:(function() {
    var go = confirm(`Inject CSS onto ${window.location.href}?`)
    if (go) {
        var style = document.createElement("style");
        var head = document.getElementsByTagName("head");

        style.setAttribute("id", "injected-css");
        style.appendChild(document.createTextNode(`YOUR CSS GOES HERE`));
        head[0].appendChild(style);

        alert("Injection complete!");
    } else {
        alert("Injection cancelled!");
    }
})();