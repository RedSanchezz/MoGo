// {
//     let itemArr = document.querySelectorAll(".skills-block__item");
//     setActive(itemArr[0]);

//     for (const item of itemArr) {
//         let block = item.querySelector(".skills-block__text");
//         let header = item.querySelector(".skills-block__header");
//         header.addEventListener("click", function(e) {
//             if (block.classList.contains("hide__text")) {
//                 setUnActiveAll(itemArr);
//                 setActive(item);
//             } else {
//                 setUnActive(item);
//             }
//         })
//     }

//     function setUnActiveAll(items) {
//         for (const iterator of items) {
//             setUnActive(iterator);
//         }
//     }

//     function setActive(item) {
//         let header = item.querySelector(".skills-block__header");
//         let block = item.querySelector(".skills-block__text");
//         let arrow = item.querySelector(".skills-block__arrow");
//         block.classList.remove("hide__text");
//         arrow.style.transform = "rotateX(0deg)";
//     }

//     function setUnActive(item) {
//         let header = item.querySelector(".skills-block__header");
//         let block = item.querySelector(".skills-block__text");
//         let arrow = item.querySelector(".skills-block__arrow");
//         block.classList.add("hide__text");
//         arrow.style.transform = "rotateX(180deg)";
//     }
// }

{
    let mogo = document.querySelector(".footer__subscribe");
    let blog = document.querySelector(".footer__blogs");
    let instagram = document.querySelector(".footer__instagram");
    let btnMogo = document.querySelector(".tabs__moGo");
    let btnBlog = document.querySelector(".tabs__blog");
    let btnInst = document.querySelector(".tabs__instagram");

    const mediaQuery = window.matchMedia('(max-width: 768px)')

    function handleTabletChange(e) {
        if (e.matches) {
            setUnActiveAll();
            document.querySelector(".footer__tabs").style.display = "flex";
            setActive(mogo, btnMogo);

        } else {
            mogo.classList.remove("footer__unactive");
            blog.classList.remove("footer__unactive");
            instagram.classList.remove("footer__unactive");
            setUnActiveAllButton();
            document.querySelector(".footer__tabs").style.display = "none";

        }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);


    btnMogo.addEventListener("click", function() {
        setUnActiveAll();
        setActive(mogo, btnMogo);
    });
    btnBlog.addEventListener("click", function() {
        setUnActiveAll();
        setActive(blog, btnBlog);

    });
    btnInst.addEventListener("click", function() {
        setUnActiveAll();
        setActive(instagram, btnInst);

    });

    function setUnActiveAll() {
        setUnActiveAllButton();
        setUnActive(mogo);
        setUnActive(blog);
        setUnActive(instagram);
    }

    function setActive(item, itembtn) {
        item.classList.remove("footer__unactive");
        itembtn.classList.add("tabs__active");
    }

    function setUnActive(item) {
        item.classList.add("footer__unactive");
    }

    function setUnActiveAllButton() {
        btnMogo.classList.remove("tabs__active");
        btnBlog.classList.remove("tabs__active");
        btnInst.classList.remove("tabs__active");
    }
}

{

    let mas = document.querySelectorAll(".mobile__hover");
    let oldClick = null;

    for (const i of mas) {
        i.addEventListener("click", function(e) {
            let target = e.currentTarget;
            console.log(oldClick);
            console.log(target);
            if (innerWidth < 760) {
                if (oldClick == target) {
                    console.log('ok');
                    oldClick = null;
                    return;
                } else {
                    console.log(target);
                    oldClick = target;
                    console.log("add event listener to");
                    console.log(target);
                    target.addEventListener("mouseout", function(e) {
                        console.log(e.target);
                        // oldClick = null;
                    });

                }
                e.preventDefault();
            }
        }, true);

    }

}

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