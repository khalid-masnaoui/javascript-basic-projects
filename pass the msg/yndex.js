window.onload = function() {
    const input = document.querySelector("input");
    const btn = document.querySelector(".btn");
    const display = document.querySelector(".display");
    btn.addEventListener("click", () => {
        let content = input.value;
        if (content == "") {
            alert("not valid");
        } else {
            display.innerHTML = content;
        };

    })


}