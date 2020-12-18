javascript:(function() {
    var go = confirm(`Eject CSS from ${window.location.href}?`)
    if (go) {
        var style = document.getElementById("injected-css");
        style.remove();
        
        alert("Ejection complete!");
    } else {
        alert("Ejection cancelled!");
    }
})();