let hoursDiv = document.querySelector(".third-L");
let hours = document.querySelector(".hours");
let imgSlider = document.querySelector(".image-slider");
let productInCarousel = Array.from(document.querySelectorAll(".image-slider .doctor"));
let productsCarousel = Array.from(document.querySelectorAll(".products-carousel .image-slider .doctor img"));
let copyrightYear = document.querySelector(".copyright span");
let scrollBtn = document.querySelector(".scroll-top");


hoursDiv.onmouseenter = function() {
    hours.classList.toggle("toggledisplay")
}
hoursDiv.onmouseleave = function() {
    hours.classList.toggle("toggledisplay")
}

const maxScroll = imgSlider.scrollWidth - imgSlider.clientWidth;

function autoplayScroll() {
    if (imgSlider.scrollLeft > (maxScroll - 1)) {
        imgSlider.scrollLeft -= maxScroll;
    } else {
        imgSlider.scrollLeft += 2;
    };
};

let turnOnScroll = setInterval(autoplayScroll, 50);

productInCarousel.forEach((product) => {
    product.addEventListener("mouseover", () => {
        clearInterval(turnOnScroll);
    })
    product.addEventListener("mouseout", () => {
        return turnOnScroll = setInterval(autoplayScroll, 50);
    })
});

copyrightYear.innerHTML = new Date().getFullYear();

window.onscroll = function () {
    if (window.scrollY >= 1000) {
        scrollBtn.style.right = "50px"
    } else {
        scrollBtn.style.right = "-100px"
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })

});

