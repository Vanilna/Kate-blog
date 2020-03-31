(function () {
    var btnUp = document.querySelector("#up");

    function scrollTracker () {
        var scrolled = window.pageYOffset;
        var docHeight = document.documentElement.clientHeight;

        if (scrolled > docHeight) {
            btnUp.style.display = "block";
        }

        if (scrolled < docHeight) {
            btnUp.style.display = "none";
        }
    }

    function getUp () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0,-50);
            setTimeout(getUp,0);
        }
    }
    window.addEventListener("scroll", scrollTracker);
    btnUp.addEventListener("click", getUp);
})();