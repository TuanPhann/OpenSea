var slidermain = document.querySelector('.main_liveshow-slide');
var item = slidermain.getElementsByClassName('main_liveshow-slide-one')
var isNextBtn = document.querySelector('.main_liveshow-next');
var isPrewBtn = document.querySelector('.main_liveshow-prew');


handleActiveIndicator()

//event click next
isNextBtn.addEventListener('click', function () {
    slidermain.append(item[0])
    handleActiveIndicator()
})

//event click prew
isPrewBtn.addEventListener('click', function () {
    slidermain.prepend(item[item.length - 1]);
    handleActiveIndicator()
})

// get key value of main_liveshow-slide-one
function getKeyOfFirstEle() {
    var isCardElement = document.getElementsByClassName('main_liveshow-slide-one')
    var firtKey = +isCardElement[0].getAttribute('key')
    return firtKey;
}

//gán key lấy ra từ getKeyOfFirstEle vào các .dot and add class active vào .dot 
function handleActiveIndicator() {
    var isDot = document.querySelectorAll('.dot');
    var firtKey = getKeyOfFirstEle()
    var activeIndicator = isDot[firtKey];
    for (var i = 0; i <= isDot.length - 1; i++) {
        isDot[i].classList.remove('active')
    }
    activeIndicator.classList.add('active')
}


/* main_trending*/

var isNextBtntrending = document.querySelector('.main_trending-next button');
var isPrewBtntrending = document.querySelector('.main_trending-prew');
var isTrendingTotal = document.querySelector('.main_trending-total');
var isTrendingItem = isTrendingTotal.getElementsByClassName('main_trending-firt');


getPerform()

//event click next
isNextBtntrending.addEventListener('click', function () {
    isTrendingTotal.append(isTrendingItem[0])
    getPerform()
})

//event click prew
isPrewBtntrending.addEventListener('click', function () {
    isTrendingTotal.prepend(isTrendingItem[isTrendingItem.length - 1])
    getPerform()
})

// get key value of main_trending-firt
function getkeyTrending() {
    var firtkeyTrending = +isTrendingItem[0].getAttribute('key')
    return firtkeyTrending
}

//gán key lấy ra từ getkeyTrending vào các .main_trending-buttom-dot and add class perform vào .main_trending-buttom-dot 
function getPerform() {
    var isTrendingDot = document.getElementsByClassName('main_trending-buttom-dot');
    var firtkeyTrending = getkeyTrending();
    var performedicator = isTrendingDot[firtkeyTrending]
    for (var a = 0; a <= isTrendingDot.length - 1; a++) {
        isTrendingDot[a].classList.remove('perform')
    }
    performedicator.classList.add('perform')
}

/*night_mode*/

var isNightmode = document.querySelector('.dark_light');

// event click .dark_light
isNightmode.addEventListener('click', function () {
    document.body.classList.toggle('dark')
})


/*sidebar and search*/
var isSidebar = document.querySelector('.header_menu-sidebar .sidebar');
var isBodytwo = document.getElementById('two');
var isBodySidebar = document.querySelector('.body_two-sidebar');
var isClose = document.querySelector('.header_menu-close')
var isSearchInput = document.querySelector('.search_input');
var isArrowclose = document.querySelector('.search_input i ');
var isBtnSearch = document.querySelector('.header_menu-sidebar .search');

// event click sidebar
isSidebar.addEventListener('click', function () {
    isBodytwo.style.display = 'block';
    isSidebar.classList.add('movesidebar')
    isClose.style.display = 'block'
})

// event click close sidebar 
isClose.addEventListener('click', function () {
    isBodytwo.style.display = 'none'
    isSidebar.classList.remove('movesidebar')
    isClose.style.display = 'none'
})

//event click btnSearch khi thu nhỏ màn hình (mở)
isBtnSearch.addEventListener('click', function () {
    isSearchInput.style.transform = 'translateX(0)'
})

// event click Arrowleft dùng để đóng input tìm kiếm khi màn hình thu nhỏ
isArrowclose.addEventListener('click', function () {
    isSearchInput.style.transform = 'translateX(100%)'
})


/*dark-light mobile*/
var isDarkcheckbox = document.querySelector('.dark_checkbox');

//event click Dark Light
isDarkcheckbox.addEventListener('click', function () {
    document.body.classList.toggle('dark')
})

// play video
var isPlay = document.querySelector('.main_video-play');
var isVideo = document.querySelector('.main_video-total video');

//event click vào btnPlay video chạy và ẩn btnPlay đi
isPlay.addEventListener('click', function () {
    if (isVideo.play()) {
        isPlay.style.display = 'none'
    }
})