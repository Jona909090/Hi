onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Prikaži tekst nakon što se cvijeće otvori
   setTimeout(() => {
    alert("Radi JavaScript");
    document.getElementById("message").classList.add("show");
}, 7000);
