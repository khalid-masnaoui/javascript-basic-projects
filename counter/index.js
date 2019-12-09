window.onload = function() {
    const num = document.querySelector(".num");
    const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    let i = 0;
    btn1.addEventListener("click", () => {

        if (i <= 0) {
            i -= 1;
            num.textContent = i;
            num.style.color = "red";
            num.animate([{ opacity: "0.2" }, { opacity: 1 }], { duration: 1000 });

        } else {
            i -= 1;
            num.textContent = i;
            num.style.color = "green";
            num.animate([{ opacity: "0.2" }, { opacity: 1 }], { duration: 1000 });
        }
    });
    btn2.addEventListener("click", () => {
        if (i >= 0) {
            i += 1;
            num.textContent = i;
            num.style.color = "green";
            num.animate([{ opacity: "0.2" }, { opacity: 1 }], { duration: 1000 });

        } else {
            i += 1;
            num.textContent = i;
            num.style.color = "red";
            num.animate([{ opacity: "0.2" }, { opacity: 1 }], { duration: 1000 });
        }
    })




};