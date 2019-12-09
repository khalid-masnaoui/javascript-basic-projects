window.onload = function() {
    const input = document.querySelector("input");
    const num = document.querySelectorAll("button.num");
    const op = document.querySelectorAll("button.op");
    const eq = document.querySelector("button.eq");
    const clean = document.querySelector("button.clear");
    const bac = document.querySelector("button.back");
    const point = document.querySelector("button.point");
    const numr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oper = ["+", "-", "*", "/"];


    var value = input.value;
    num.forEach(function(button) {
        button.addEventListener("click", () => {
            input.value += button.textContent;
        });

    });
    op.forEach(function(opr) {
        opr.addEventListener("click", () => {
            if (oper.indexOf(input.value[input.value.length - 1]) != -1) {
                var j = input.value.length

                input.value = input.value.slice(0, j - 1) + opr.textContent;

            } else {
                input.value += opr.textContent;

            }

        });


    });
    point.addEventListener("click", () => {
        input.value += point.textContent;
    });
    eq.addEventListener("click", () => {
        //exception
        var k = input.value.length
        if (input.value == "" || oper.indexOf(input.value[0]) != -1 || oper.indexOf(input.value[k - 1]) != -1) {
            alert("not valid")
        } else {
            input.value = eval(input.value);

        };
        //usual
    });
    clean.addEventListener("click", () => {
        input.value = "";
    });
    bac.addEventListener("click", () => {
        var i = input.value.length
        input.value = input.value.slice(0, i - 1);
    });


}