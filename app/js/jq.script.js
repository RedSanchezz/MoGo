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
        setTimeout(function() {
            setUnActiveAll(itemArr);
        }, 1000);


        // console.log(itemArr);
        itemArr.on("click", function() {
            setUnActiveAll(itemArr);
            setActive(this);
        });


        function setUnActiveAll(items) {
            items.each(function(index, item) {
                setUnActive(item);
            });
        }

        function setActive(item) {
            let block = $(".skills-block__text", item);
            let arrow = $(".skills-block__arrow", item);
            block.removeClass("hide__text")
            arrow.css("transform", "rotateX(0deg)");
        }

        function setUnActive(item) {
            let block = $(".skills-block__text", item);
            let arrow = $(".skills-block__arrow", item);
            block.addClass("hide__text");
            arrow.css("transform", "rotateX(180deg)");
        }
    }
});