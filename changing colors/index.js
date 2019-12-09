/*----------------changing colors------------*/
// window.onload = function() {
//     const L = ["red", "green", "blue", "yellow"];
//     const btn = document.querySelector(".btn");
//     const body = document.querySelector("body");
//     btn.addEventListener("click", function() {
//         let i = Math.floor(Math.random() * L.length);
//         body.style.backgroundColor = L[i];
// console.log(L.length);   
//     })
// }

/*----------hex colors-------------*/
window.onload = function() {
    const spna = document.querySelector("span");
    const btn = document.querySelector(".btn");
    const body = document.querySelector("body");
    const L = ["#FF5478", "#H7UO98", "327780"];
    btn.addEventListener("click", function() {
        let i = Math.floor(Math.random() * L.length);
        body.style.backgroundColor = L[i];
        spna.textContent = "#" + L[i];



    })




}