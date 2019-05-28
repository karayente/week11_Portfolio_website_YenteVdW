

let part1 = document.querySelector(".part1");
let part2 = document.querySelector(".part2");
let honderdVw = window.innerWidth;
let honderdVh = window.innerHeight;
let pijl1= document.querySelector("#pijl1")
let pijl2= document.querySelector("#pijl2")

let scroll1= document.querySelector("#scroll1-binnen")
let scroll2= document.querySelector("#scroll2-binnen")

let offsetLeft = 0;

pijl4.addEventListener("click", scrollhor4)
function scrollhor4() {

       offsetLeft -=460;

       scroll2.style.position = "relative";
       scroll2.style.left = (offsetLeft)+"px";

       e.preventDefault();     //prevents the page from redirecting


}

pijl3.addEventListener("click", scrollhor3)
function scrollhor3() {

       offsetLeft +=460;

       scroll2.style.position = "relative";
       scroll2.style.left = (offsetLeft)+"px";

       e.preventDefault();     //prevents the page from redirecting


}

pijl2.addEventListener("click", scrollhor2)
function scrollhor2() {

       offsetLeft +=460;

       scroll1.style.position = "relative";
       scroll1.style.left = (offsetLeft)+"px";

       e.preventDefault();     //prevents the page from redirecting


}

pijl1.addEventListener("click", scrollhor1)
function scrollhor1() {

       offsetLeft -=460;

       scroll1.style.position = "relative";
       scroll1.style.left = (offsetLeft)+"px";

       e.preventDefault();     //prevents the page from redirecting


}



window.addEventListener("scroll", myFunction);
function myFunction () {
      scrollPositiePx = window.pageYOffset;
      // paneel 1 komt binnen
      part1Pos = -(honderdVw - scrollPositiePx*3.4);
      if (part1Pos <= 0) {
            part1.style.left = part1Pos + "px";
      } else {
            part1.style.left = 0;
      }
      // paneel 2 komt binnen
      part2Pos = -(honderdVw - scrollPositiePx*3.4);
      if (part2Pos <= 0) {
            part2.style.left = part2Pos + "px";
      } else {
            part2.style.left = 0;
      }

        }
