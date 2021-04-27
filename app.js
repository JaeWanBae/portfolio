app = {}

app.init = () => {
    app.nextPage();
    app.prevPage();
    app.home();
    app.button();
}

// Carousel
app.carousel = document.querySelector('.carousel');
app.pages = document.querySelectorAll('.pages');
app.counter = 0;

app.nextPage = () => {
    const nextButton = document.querySelector('.nextPage');
    nextButton.addEventListener('click', () => {
        if (app.counter < app.pages.length -1) {
        app.counter++;
        app.carousel.style.transform = `translateX( ${-100 * app.counter}vw)`;
        }
    })
}

app.prevPage = () => {
    const prevButton = document.querySelector('.prevPage');
    prevButton.addEventListener('click', () => {
        if (app.counter > 0) {
        app.counter--;
        app.carousel.style.transform = `translateX(${-100 * app.counter}vw)`;
        }
    })
}

app.home = () => {
    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', () => {
        app.counter = 0;
        app.carousel.style.transform = `translateX( ${100 * app.counter}vw)`;
    })
}

// main page button functions
app.button = () => {
    const aboutButton = document.querySelectorAll('.mainButton');
    aboutButton.forEach((button) => {
        button.addEventListener('click', function() {
            app.counter = this.id;
            app.carousel.style.transform = `translateX(${-100 * app.counter}vw)`;
        })
    })
}

app.init();