window.onload = function () {

    setTimeout(function () {
        document.body.classList.remove("not-loaded");
    }, 1000);

    setTimeout(function () {
        document.getElementById("message").classList.add("show");
    }, 1000);

};
