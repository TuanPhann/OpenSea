var slidermain = document.querySelector('.main_liveshow-slide');
var item = slidermain.getElementsByClassName('main_liveshow-slide-one')
var isNextBtn = document.querySelector('.main_liveshow-next');
var isPrewBtn = document.querySelector('.main_liveshow-prew');


handleActiveIndicator()


function next() {
    slidermain.append(item[0])
    handleActiveIndicator()
}

function prew() {
    slidermain.prepend(item[item.length - 1]);
    handleActiveIndicator()
}

function getKeyOfFirstEle() {
    var isCardElement = document.getElementsByClassName('main_liveshow-slide-one')
    var firtKey = +isCardElement[0].getAttribute('key')
    return firtKey;
}

function handleActiveIndicator() {
    var isDot = document.querySelectorAll('.dot');
    var firtKey = getKeyOfFirstEle()
    var activeIndicator = isDot[firtKey];
    for (var i = 0; i <= isDot.length - 1; i++) {
        isDot[i].classList.remove('active')
    }
    activeIndicator.classList.add('active')
}

isNextBtn.addEventListener('click', next);
isPrewBtn.addEventListener('click', prew);

/* main_trending*/

var isNextBtntrending = document.querySelector('.main_trending-next button');

var isPrewBtntrending = document.querySelector('.main_trending-prew');
var isTrendingTotal = document.querySelector('.main_trending-total');
var isTrendingItem = isTrendingTotal.getElementsByClassName('main_trending-firt');

getPerform()



function nextTrending() {
    isTrendingTotal.append(isTrendingItem[0])
    getPerform()
}

function prewTrending() {
    isTrendingTotal.prepend(isTrendingItem[isTrendingItem.length - 1])
    getPerform()
}

function getkeyTrending() {
    var firtkeyTrending = +isTrendingItem[0].getAttribute('key')
    return firtkeyTrending
}

function getPerform() {
    var isTrendingDot = document.getElementsByClassName('main_trending-buttom-dot');
    var firtkeyTrending = getkeyTrending();
    var performedicator = isTrendingDot[firtkeyTrending]
    for (var a = 0; a <= isTrendingDot.length - 1; a++) {
        isTrendingDot[a].classList.remove('perform')
    }
    performedicator.classList.add('perform')
}

isPrewBtntrending.addEventListener('click', prewTrending)
isNextBtntrending.addEventListener('click', nextTrending)

/*night_mode*/

var isNightmode = document.querySelector('.dark_light');


isNightmode.addEventListener('click', function () {
    document.body.classList.toggle('dark')
})


/*sidebar*/

var isSidebar = document.querySelector('.header_menu-sidebar .sidebar ');
var isBodytwo = document.getElementById('two');
var isBodySidebar = document.querySelector('.body_two-sidebar');
var isClose = document.querySelector('.header_menu-close')

function isclicksidebar() {
    isBodytwo.style.display = 'block';
    isSidebar.classList.add('movesidebar')
    isClose.style.display = 'block'
    // isBodySidebar.classList.add('body_two-sidebar-show')
}

function closesidebar() {
    isBodytwo.style.display = 'none'
    isSidebar.classList.remove('movesidebar')
    isClose.style.display = 'none'
}

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        isBodytwo.style.display = 'none'
        // isBodySidebar.classList.remove('body_two-sidebar-show')
    }
}

isClose.addEventListener('click', closesidebar)
isSidebar.addEventListener('click', isclicksidebar)

/*dark-light mobile*/

var isDarkcheckbox = document.querySelector('.dark_checkbox');


function darklightmobile() {
    document.body.classList.toggle('dark')
}

isDarkcheckbox.addEventListener('click', darklightmobile)