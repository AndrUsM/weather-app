document.querySelector(".modal_window__toggler").addEventListener("click", (e) => {
    document.querySelector(".modal_window__content").style.display = "block";
    e.preventDefault();
})
document.querySelector(".modal_window__close_button").addEventListener("click", (e) => {
    document.querySelector(".modal_window__content").style.display = "none";
    e.preventDefault();
    window.location = "/";
})