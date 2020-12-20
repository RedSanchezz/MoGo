$(function() {
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
    //            google map
    {
        let googlePopup = $(".google-map__popup");
        let showBtn = $(".map__center-block");
        let exitBtn = $(".google-map__exit");

        showBtn.on("click", function() {
            googlePopup.css({
                display: "flex",
                height: "100%"
            })
            $("body").css("overflow", "hidden");
        });
        exitBtn.on("click", function() {
            googlePopup.css("height", "0");
            $("body").css("overflow", "");
        })
        googlePopup.on("click", function() {
            googlePopup.css("height", "0");
            $("body").css("overflow", "");
        })
    }
    //*******    service block    *********/
    {
        let itemArr = $(".skills-block__item");
        setActive(itemArr.eq(0));


        // for (const it of itemArr) {
        //     let block = $(".skills-block__header", it);
        //     block.on();
        // }
        itemArr.each(function(index, it) {
            console.log(it);
            let block = $(".skills-block__header", it);
            block.on("click", function(e) {

                if (!$(".skills-block__text", it).is(".hide__text")) {
                    setUnActive(it);
                    return;
                }
                setUnActiveAll(itemArr);
                setActive(it);

            });
        });

        function setUnActiveAll(items) {
            items.each(function(index, item) {
                setUnActive(item);
            });
        }

        function setActive(item) {
            let block = $(".skills-block__text", item);
            let arrow = $(".skills-block__arrow", item);
            let bar = $(".mCSB_dragger_bar", item);
            setTimeout((e) => {
                bar.css("opacity", "1");
            }, 600);
            block.removeClass("hide__text")
            arrow.css("transform", "rotateX(0deg)");
        }

        function setUnActive(item) {
            let block = $(".skills-block__text", item);
            let arrow = $(".skills-block__arrow", item);
            let bar = $(".mCSB_dragger_bar", item);

            bar.css("opacity", "0");
            block.addClass("hide__text");
            arrow.css("transform", "rotateX(180deg)");
        }
    }
    //********** footer-tabs **********/
    {
        let mogo = $(".footer__subscribe");
        let blog = $(".footer__blogs");
        let instagram = $(".footer__instagram");
        let btnMogo = $(".tabs__moGo");
        let btnBlog = $(".tabs__blog");
        let btnInst = $(".tabs__instagram");

        const mediaQuery = window.matchMedia('(max-width: 768px)')

        function handleTabletChange(e) {
            if (e.matches) {
                setUnActiveAll();
                $(".footer__tabs").css("display", "flex");
                setActive(mogo, btnMogo);

            } else {
                setActive(mogo, btnMogo);
                setActive(blog, btnBlog);
                setActive(instagram, btnInst);
                $(".footer__tabs").css("display", "none");

            }
        }
        mediaQuery.addEventListener("change", handleTabletChange);
        handleTabletChange(mediaQuery);

        btnMogo.on("click", function() {
            setUnActiveAll();
            setActive(mogo, btnMogo);
        });

        btnBlog.on("click", function() {
            setUnActiveAll();
            setActive(blog, btnBlog);
        });

        btnInst.on("click", function() {
            setUnActiveAll();
            setActive(instagram, btnInst);
        });

        function setActive(item, itemBtn) {
            item.removeClass("footer__unactive");
            itemBtn.addClass("tabs__active");
        }

        function setUnActive(item, itemBtn) {
            item.addClass("footer__unactive");
            itemBtn.removeClass("tabs__active");
        }

        function setUnActiveAll() {
            setUnActive(mogo, btnMogo);
            setUnActive(blog, btnBlog);
            setUnActive(instagram, btnInst);
        }
    }
    //*******   mobile hover   *********
    {
        let mas = $(".mobile__hover");
        let oldClick = null;
        mas.on("click", function(e) {
            let target = e.currentTarget;
            console.log(oldClick);
            console.log("NEW");
            if (innerWidth < 769) {
                if (oldClick == target) {

                    oldClick = null;
                    console.log("click");
                    return true;

                } else {
                    console.log("unclicked");
                    oldClick = target;
                    let test = $(this);
                    let int = setInterval(function() {
                        if (!test.is(":hover")) {
                            oldClick = null;
                            clearInterval(int);
                            console.log("cleared");
                        } else {
                            oldClick = target;
                        }
                    }, 10);

                }
                e.preventDefault();
            }
        });

    }
    //header-icon
    {
        let menuIcon = $(".header__menu-icon");
        let menuBlock = $(".header__menu");

        menuIcon.on("click", (e) => {

            if (menuBlock.hasClass("menu__active")) {
                menuBlock.removeClass("menu__active");

                menuIcon.addClass("animate__fadeOutRight");
                setTimeout(() => {
                    menuIcon.removeClass("animate__fadeOutRight");
                    menuIcon.css("backgroundImage", "url('../img/header-menu-icon.png')");
                    menuIcon.addClass("animate__fadeInLeft");
                    setTimeout(() => {
                        menuIcon.removeClass("animate__fadeInLeft");
                    }, 500);
                }, 500);
            } else {
                menuBlock.addClass("menu__active");
                menuIcon.addClass("animate__fadeOutRight");
                setTimeout(() => {
                    menuIcon.css("backgroundImage", "url('../img/close-icon.png')");
                    menuIcon.removeClass("animate__fadeOutRight");
                    menuIcon.addClass("animate__fadeInLeft");
                    setTimeout(() => {
                        menuIcon.removeClass("animate__fadeInLeft");
                    }, 500);
                }, 500);
            }
        });

    }
});