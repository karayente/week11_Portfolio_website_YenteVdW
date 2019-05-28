

let part1 = document.querySelector(".part1");
let part2 = document.querySelector(".part2");
let part3 = document.querySelector(".extrame");
let honderdVw = window.innerWidth;
let honderdVh = window.innerHeight;

window.addEventListener("scroll", myFunction);
function myFunction () {
      scrollPositiePx = window.pageYOffset;
      // paneel 1 komt binnen
      part1Pos = -(honderdVw - scrollPositiePx*3.5);
      if (part1Pos <= 0) {
            part1.style.right = part1Pos + "px";
      } else {
            part1.style.right = 0;
      }
      // paneel 2 komt binnen
      part2Pos = -(honderdVw - scrollPositiePx*2);
      if (part2Pos <= 0) {
            part2.style.left = part2Pos + "px";
      } else {
            part2.style.left = 0;
      }
      // paneel 3 komt binnen
      part3Pos = -(honderdVw - scrollPositiePx*3.5);
      if (part3Pos <= 0) {
            part3.style.right = part3Pos + "px";
      } else {
            part3.style.right = 0;
      }
        }
