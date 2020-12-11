$(".skills-block__text").mCustomScrollbar({
    theme: "my-theme",
    autoDraggerLength: true,
    scrollbarPosition: "outside"

});

$(".presents__slider").slick({
    prevArrow: ".presents__slider-left-arrow",
    nextArrow: ".presents__slider-right-arrow"
});
$(".work__slider").slick({
    prevArrow: ".work__slider-left-arrow",
    nextArrow: ".work__slider-right-arrow"
});
let itemArr = document.querySelectorAll(".skills-block__item");
setActive(itemArr[0]);

for (const item of itemArr) {
    let block = item.querySelector(".skills-block__text");
    let header = item.querySelector(".skills-block__header");
    header.addEventListener("click", function(e) {
        if (block.classList.contains("hide__text")) {
            setUnActiveAll(itemArr);
            setActive(item);
        } else {
            setUnActive(item);
        }
    })
}

function setUnActiveAll(items) {
    for (const iterator of items) {
        setUnActive(iterator);
    }
}

function setActive(item) {
    let header = item.querySelector(".skills-block__header");
    let block = item.querySelector(".skills-block__text");
    let arrow = item.querySelector(".skills-block__arrow");
    block.classList.remove("hide__text");
    arrow.style.transform = "rotateX(0deg)";
}

function setUnActive(item) {
    let header = item.querySelector(".skills-block__header");
    let block = item.querySelector(".skills-block__text");
    let arrow = item.querySelector(".skills-block__arrow");
    block.classList.add("hide__text");
    arrow.style.transform = "rotateX(180deg)";

}