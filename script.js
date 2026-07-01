window.onload = function () {
    setTimeout(function () {
        document.body.classList.remove("not-loaded");
    }, 1000);

    setTimeout(function () {
        const message = document.getElementById("message");
        if (message) {
            message.classList.add("show");
        }
    }, 7000);
};
