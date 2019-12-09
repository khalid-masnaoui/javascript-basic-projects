window.onload = function() {
    const data = [{
            quote: "blalllllllllllllllllldldldddddddddddddddddddddddddddddddd d",
            author: "mrs 1"
        }, {
            quote: "blalllllllllllllllllldldldddddddddddddddddddddddddddddddd d",
            author: "mrs 2"
        }, {
            quote: "blalllllllllllllllllldldldddddddddddddddddddddddddddddddd d",
            author: "mrs 3"
        }, {
            quote: "blalllllllllllllllllldldldddddddddddddddddddddddddddddddd d",
            author: "mrs 4"
        }




    ];
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {

        let i = Math.floor(Math.random() * data.length);
        quote.textContent = data[i].quote;
        author.textContent = data[i].author;


    })





}