// {

//     let mas = document.querySelectorAll(".mobile__hover");
//     let oldClick = null;

//     for (const i of mas) {
//         i.addEventListener("click", function(e) {
//             let target = e.currentTarget;
//             console.log(oldClick);
//             console.log(target);
//             if (innerWidth < 760) {
//                 if (oldClick == target) {
//                     console.log('ok');
//                     oldClick = null;
//                     return;
//                 } else {
//                     console.log(target);
//                     oldClick = target;
//                     console.log("add event listener to");
//                     console.log(target);
//                     target.addEventListener("mouseout", function(e) {
//                         console.log(e.target);
//                         // oldClick = null;
//                     });

//                 }
//                 e.preventDefault();
//             }
//         }, true);

//     }

// }

{
    let menuIcon = document.querySelector(".header__menu-icon");
    let menuBlock = document.querySelector(".header__menu");
    menuIcon.addEventListener("click", function(e) {
        if (menuBlock.classList.contains("menu__active")) {
            menuBlock.classList.remove("menu__active");
            menuIcon.classList.add("animate__flip");
            setTimeout(() => {
                menuIcon.classList.remove("animate__flip");
                menuIcon.style.backgroundImage = "url('../img/header-menu-icon.png')";

            }, 500);

        } else {
            menuBlock.classList.add("menu__active");
            menuIcon.classList.add("animate__fadeOut");

            setTimeout(() => {
                menuIcon.classList.remove("animate__fadeOut");
                menuIcon.style.backgroundImage = "url('../img/close-icon.png')";
                menuIcon.classList.add("animate__fadeIn");

            }, 500);
        }
    })
}