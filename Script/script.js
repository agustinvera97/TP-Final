document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Hola!", "Hej", "Hello", "привет", "Ciao"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h2").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

const links = document.querySelectorAll(".nav-link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    let element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({ behavior: "smooth" });
  });
});


let features =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";


{
let linkedin = document.getElementById("linkedin");

function openlinkin() {
    linkedin = window.open("http://www.linkedin.com/in/agustin-vera-8588821a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6xuYbL7aRHSjLzdt1P6y7Q%3D%3D","linkedin", features);
}

linkedin.addEventListener("click", openlinkin);

}

// {
// let mail = document.getElementById("mail")

// function sendme(){
//     mail = windows.open("mailto:agustinvera97@hotmail.com","email",features)
//  }
//  mail.addEventListener("click",sendme);
// }

{
let whatsapp = document.getElementById("whatsapp");

function openlinkwh() {
    whatsapp = window.open("http://wa.me/5493442571556", "whatsapp", features);
}
whatsapp.addEventListener("click", openlinkwh);

}