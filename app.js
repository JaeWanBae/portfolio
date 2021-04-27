app = {}

app.init = () => {
    app.nextPage();
    app.prevPage();
    app.home();
}

app.carousel = document.querySelector('.carousel');
app.pages = document.querySelectorAll('.pages');
app.counter = 0;
app.size = app.pages[0].clientWidth;
app.carousel.style.transform = `translateX( ${-app.size * app.counter}px)`

console.log(app.pages)


app.nextPage = () => {
    const nextButton = document.querySelector('.nextPage');
    nextButton.addEventListener('click', () => {
        if (app.counter < app.pages.length -1) {
        app.carousel.style.transition = `transform 0.4s ease`;
        app.counter++;
        app.carousel.style.transform = `translateX( ${-app.size * app.counter}px)`;
        }

    })
}

app.prevPage = () => {
    const prevButton = document.querySelector('.prevPage');
    prevButton.addEventListener('click', () => {
        if (app.counter > 0) {
        app.carousel.style.transition = `transform 0.4s ease`;
        app.counter--;
        app.carousel.style.transform = `translateX( ${-app.size * app.counter}px)`
        }
    })
}

app.home = () => {
    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', () => {
        app.carousel.style.transition = `transform 0.4s ease`;
        app.counter = 0;
        app.carousel.style.transform = `translateX( ${-app.size * app.counter}px)`;
    })
}

app.init();