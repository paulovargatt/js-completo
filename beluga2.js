var blg = (function () {
    var blg = {};

    blg.$ = document.querySelector.bind(document);
    blg.$$ = document.querySelectorAll.bind(document);

    return blg;

})();