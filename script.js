onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Prikaži tekst nakon što se cvijeće otvori
    setTimeout(() => {
        document.getElementById("message").classList.add("show");
    }, 7000);
};
