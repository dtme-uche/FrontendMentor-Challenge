
// function showStuff() {
// //   let drop = document.getElementById('myDropdown2');
// //    if (drop.style.display === "none"){
// //     drop.style.display = "block";
// //    } else {
// //        drop.style.display = "none";
// //      }

// }
// const myImg = document.getElementById("myImg");
// const clickLink = document.getElementById('clk');

// clickLink.addEventListener("click", function() {
//   if (myImg.src.endsWith("./images/icon-arrow-down.svg")) {
//     myImg.src = "./images/icon-arrow-up.svg";
//   } else {
//     myImg.src = "./images/icon-arrow-down.svg";
//   }
// });


// COMPANY DROPDOWN ONCLICK

const myImg = document.getElementById("myImg");
const clickLink = document.getElementById('clk');

// control onclick using link element
clickLink.addEventListener('click', function () {
  let drop = document.getElementById('myDropdown2');
 
  if (drop.style.display === "none") {
     drop.style.display = "block";
     myImg.src = "./images/icon-arrow-up.svg";
  } else {
     drop.style.display = "none";
     myImg.src = "./images/icon-arrow-down.svg";
  }
 });

 // control on click using arrow image

// myImg.addEventListener('click', function () {
//  let drop = document.getElementById('myDropdown2');

//  if (drop.style.display === "none") {
//     drop.style.display = "block";
//     myImg.src = "./images/icon-arrow-up.svg";
//  } else {
//     drop.style.display = "none";
//     myImg.src = "./images/icon-arrow-down.svg";
//  }
// });


// close dropdown when user clicks outside the drop down or any other part of the screen
window.addEventListener('click', function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
        myImg.src = "./images/icon-arrow-down.svg";
      }
    }
  }
});


// FEATURE DROP DOWN ONCLICK


const myImg1 = document.getElementById("myImg1");
const clickLink1 = document.getElementById('clk1');

// control onclick using link element
clickLink1.addEventListener('click', function () {
  let drop1 = document.getElementById('myDropdown');
 
  if (drop1.style.display === "none") {
     drop1.style.display = "block";
     myImg1.src = "./images/icon-arrow-up.svg";
  } else {
     drop1.style.display = "none";
     myImg1.src = "./images/icon-arrow-down.svg";
  }
 });


 window.addEventListener('click', function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
        myImg1.src = "./images/icon-arrow-down.svg";
      }
    }
  }
});

// /* Set the width of the sidebar to 250px (show it) */
// function openNav() {
//   document.getElementById("mySidepanel").style.display = "block";
//   document.getElementById("mySidepanel").style.width = "50px";
// }

// /* Set the width of the sidebar to 0 (hide it) */
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

  // function myFunction2() {
  //   document.getElementById("myDropdown2").classList.toggle("show");
  // }
  
  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content1");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content2");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }


  function openNav() {
    document.getElementById("mySidepanel").style.display = "block";
   }
   
   function closeNav() {
    document.getElementById("mySidepanel").style.display = "none";
   }
   
  //  document.addEventListener('DOMContentLoaded', function() {
  //   const dropdownBtn = document.getElementById('clk');
  //   const dropdownMenu = document.getElementById('myDropdown2');
   
  //   dropdownBtn.addEventListener('click', function() {
  //      dropdownMenu.classList.toggle('show');
  //   });
   
  //   const dropdownBtn1 = document.getElementById('clk1');
  //   const dropdownMenu1 = document.getElementById('myDropdown');
   
  //   dropdownBtn1.addEventListener('click', function() {
  //      dropdownMenu1.classList.toggle('show');
  //   });
  //  });


 