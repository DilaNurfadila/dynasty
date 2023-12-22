document.querySelectorAll(".allPaths").forEach((e) => {
  e.setAttribute("class", `allPaths ${e.id}`);
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById("name").style.top = y - 40 + "px";
      document.getElementById("name").style.left = x + 10 + "px";
    };
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      country.style.fill = "#3B729F";
    });
    document.getElementById("name").style.opacity = 1;

    document.getElementById("namep").innerText = e.id;
    document.getElementById("name").style.zIndex = 999;
  });
  e.addEventListener("mouseleave", function () {
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      country.style.fill = "#88a4bc";
    });
    document.getElementById("name").style.opacity = 0;
  });

  e.addEventListener("click", function () {
    getUser(e.id);
  });
});

// document.getElementById("searchBtn").addEventListener("click", function () {
//     country = document.getElementById("search").value
//     document.querySelectorAll(`.allPaths`).forEach(e => {
//         e.style.fill = "#ececec"
//     })
//     document.querySelectorAll(`#${country}`).forEach(e => {
//         e.style.fill = "red"
//     })
// })

topbutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
}
