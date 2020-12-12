window.onload = function () {
    //Меню
    var menuBtn = document.querySelector('.hamburger');
    var menu = document.querySelector('.main-menu');

    menuBtn.onclick = function () {
        menu.classList.toggle('show-menu');
    }

    //Выравнивание айтемов
    var items = document.querySelectorAll('.description');
    var arrHeight = [];
    var maxHeight = 0;

    for (var i = 0; i < items.length; i++) {
        arrHeight.push(items[i].offsetHeight);
    }

    for (var j = 0; j < arrHeight.length; j++) {
        if (arrHeight[j] > maxHeight) {
            maxHeight = arrHeight[j];
        }
    }

    for (var k = 0; k < items.length; k++) {
        items[k].style.height = (maxHeight - 54) + 'px'; //54 - сумма вертикальных паддингов
    }

    //галерея
    var btns = document.querySelectorAll('.categories button');
    var imgArr = document.querySelectorAll('.portfolio img');

    function toggler(array, className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove('hidenimg');
            if (!array[i].classList.contains(className)) {
                array[i].classList.add('hidenimg');
            }
        }
    }

    for (var i = 0; btns.length; i++) {
        btns[i].onclick = function () {
            if (this.classList.contains('webdev')) {
                toggler(imgArr, 'dev');
            } else if (this.classList.contains('webdes')) {
                toggler(imgArr, 'des');
            } else if (this.classList.contains('graphdes')) {
                toggler(imgArr, 'gr');
            } else {
                for (var q = 0; q < imgArr.length; q++) {
                    if (imgArr[q].classList.contains('hidenimg')) {
                        imgArr[q].classList.remove('hidenimg');
                    }
                }
            }
        }
    }
}
//карусель
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 8,
         margin:20,        
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:5,
            },
            1000:{
                items:8,
                loop:true
            }
        }});
});




/* var btnAll = document.querySelector('.showall');
var btnWebdev = document.querySelector('.webdev');
var btnWebdes = document.querySelector('.webdes');
var btnWebgraph = document.querySelector('.graphdes');
var imgArr = document.querySelectorAll('.portfolio img');

btnAll.onclick = function () {

    for (var q = 0; q < imgArr.length; q++) {
        if (imgArr[q].classList.contains('hidenimg')) {
            imgArr[q].classList.remove('hidenimg');
        }
    }
}

btnWebdev.onclick = function () {

    for (var q = 0; q < imgArr.length; q++) {
        imgArr[q].classList.remove('hidenimg');
        if (!imgArr[q].classList.contains('dev')) {
            imgArr[q].classList.add('hidenimg');
        }
    }
}

btnWebdes.onclick = function () {

    for (var q = 0; q < imgArr.length; q++) {
        imgArr[q].classList.remove('hidenimg');
        if (!imgArr[q].classList.contains('des')) {
            imgArr[q].classList.add('hidenimg');
        }
    }
}

btnWebgraph.onclick = function () {

    for (var q = 0; q < imgArr.length; q++) {
        imgArr[q].classList.remove('hidenimg');
        if (!imgArr[q].classList.contains('gr')) {
            imgArr[q].classList.add('hidenimg');
        }
    }
} */




