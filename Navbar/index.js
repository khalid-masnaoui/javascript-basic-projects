window.onload = function() {
    const link = document.querySelector("#links");
    const navbar = document.querySelector(".navbar");
    navbar.addEventListener("click", function() {
        const value = link.classList.contains("collapse");
        if (value) {
            link.classList.remove("collapse");
            navbar.classList.remove("change");
        } else {
            link.classList.add("collapse");
            navbar.classList.add("change");
        }
    })
}