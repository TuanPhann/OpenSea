var isPrewBtn = document.querySelector(".main_liveshow-prew");
var isNextBtn = document.querySelector(".main_liveshow-next");

var iscontainer = document.querySelector(".main_liveshow");
var isSlideshow = document.querySelector(".main_liveshow-slide");

handleActiveIndicator();

function isposition() {
  var a = isSlideshow.getBoundingClientRect();
  // isSlideshow.style.transform = 'translateX(-385px)'
  // isSlideshow.style.transition = '0.5s'
}

function handlerNext() {
  // isposition()
  handleMoveLeftElement();
  handleActiveIndicator();
}

function handlerPrew() {
  isSlideshow.style.transform = "translateX(385px)";
  handleMoveRightElement();
  handleActiveIndicator();
}

function handleMoveLeftElement() {
  var isCardElement = document.getElementsByClassName(
    "main_liveshow-slide-one"
  );
  var firtCardEl = isCardElement[0];
  isSlideshow.appendChild(firtCardEl);
}

function handleMoveRightElement() {
  var isCardElement = document.getElementsByClassName(
    "main_liveshow-slide-one"
  );
  var lastCardEl = isCardElement[isCardElement.length - 1];
  isSlideshow.prepend(lastCardEl);
  isSlideshow.style.transform = `translateX(0px)`;
}

function getKeyOfFirstEle() {
  var isCardElement = document.getElementsByClassName(
    "main_liveshow-slide-one"
  );
  var firtKey = +isCardElement[0].getAttribute("key");
  return firtKey;
}

function handleActiveIndicator() {
  var isDot = document.querySelectorAll(".dot");
  var firtKey = getKeyOfFirstEle();
  var activeIndicator = isDot[firtKey];
  for (var i = 0; i <= isDot.length - 1; i++) {
    isDot[i].classList.remove("active");
  }
  activeIndicator.classList.add("active");
}

isNextBtn.onclick = handlerNext;
isPrewBtn.onclick = handlerPrew;
