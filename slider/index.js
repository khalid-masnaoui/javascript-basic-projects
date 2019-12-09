window.onload = function() {
    const next = document.querySelector('.next');
    const previous = document.querySelector('.previous');
    const bg = document.querySelector('.bg-img');
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var j = 0;

    next.addEventListener('click', nextImg);

    function nextImg() {
        if (j >= 0 && j <= 10) {
            j++;
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
        } else if (j == 11) {
            j = 0;
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
        }
    }
    previous.addEventListener('click', previousImg);

    function previousImg() {
        if (j > 0 && j <= 11) {
            j--;
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
        } else if (j == 0) {
            j = 11;
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
        }
    }
    setInterval(hey, 100000);

    function hey() {
        if (j >= 0 && j <= 10) {
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
            j++;
        } else if (j == 11) {
            bg.style.backgroundImage = 'url(image/portfolio' + images[j] + '.jpg)';
            j = 0;
        }
    }
};