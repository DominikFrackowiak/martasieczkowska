const menuBtn = document.querySelector(".btn-menu");
const mobileNav = document.querySelector(".mobile-nav");
const fullImgs = [...document.querySelectorAll(".hidden-section")];
const thumbnailWrapper = document.querySelector(".thumbnails");

const thumbnails = [...document.querySelectorAll(".thumbnail")];
const aboutLinks = [...document.querySelectorAll("a.about")];
const aboutSection = document.querySelector("section.hidden-section-about");
const aboutClose = document.querySelector(".hidden-section-about .fa-th-large");
const designLinks = [...document.querySelectorAll("a.graph-design")];
const illustrationLinks = [...document.querySelectorAll("a.illustration")];
const categoriesLinks = designLinks.concat(illustrationLinks);
const sectionGraphicDesign = [...document.querySelectorAll(".section-graphic-design")];
const sectionIllustration = [...document.querySelectorAll(".section-illustration")];
const designThumbs = [...document.querySelectorAll(".thumb-design")];
const illustrationThumbs = [...document.querySelectorAll(".thumb-illustration")];
const hiddenSections = fullImgs.concat(aboutSection);
const arrows = [...document.querySelectorAll(".arrow")];

let fullImgHeight;
let bodyHeight;
const footerHeight = 51;

//POWTARZAJACY SIE MECHANIZM ZMIANY ROZMIARU STRONY I PRZESYWANIA SEKCJI THUMBNAIL O ROZMIAR FULL SIZE IMAGE 
function changeSizeOriginalPosition() {
  thumbnailWrapper.style.transform = `translateY(0)`;
  bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
  document.body.style.height = `${bodyHeight}px`;
}

function changeSizeChangedPosition() {
  thumbnailWrapper.style.transform = `translateY(fullImgHeight)`;
  bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
  document.body.style.height = `${bodyHeight}px`;
}

//ZAMYKANIE FULL SECTION HIDDEN
function closeHiddenSection() {
  fullImgs.forEach(fullImg =>
    fullImg.classList.remove("active")
  )
}

//RESIZE MAIN PAGE - wszystkie podstrony wylaczone
hiddenSections.forEach(hiddenSection => {
  if (hiddenSection.classList.contains("active") == false) {
    window.addEventListener('resize', function (e) {
      console.log("resized!");
      thumbnailWrapper.style.transform = `translateY(0)`;
      bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      document.body.style.height = `${bodyHeight}px`;
    });
  }
})


//LOGO
const logos = [...document.querySelectorAll(".img-logo")];

logos.forEach(logo => logo.addEventListener("click", function () {
  const activeElements = [...document.querySelectorAll(".active")];
  activeElements.forEach(activeEl => activeEl.classList.remove("active"));
  illustrationThumbs.forEach(ilustrationThumb => ilustrationThumb.classList.remove("inactive"));
  designThumbs.forEach(designThumb => designThumb.classList.remove("inactive"));
  thumbnailWrapper.classList.remove("graphic-display");
  thumbnailWrapper.classList.remove("illustration-display");
  changeSizeOriginalPosition();
  window.addEventListener('resize', function (e) {
    console.log("resized!");
    thumbnailWrapper.style.transform = `translateY(${0}px)`;
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
    document.body.style.height = `${bodyHeight}px`;
  });
}))


//ABOUT
aboutLinks.forEach(aboutLink => aboutLink.addEventListener("click", function () {
    aboutLink.classList.toggle("active");
    closeHiddenSection();
    aboutSection.classList.toggle("active");
    if (aboutSection.classList.contains("active")) {
      designLinks.forEach(designLink => designLink.classList.remove("active"));
      illustrationLinks.forEach(illustrationLink => illustrationLink.classList.remove("active"));
      illustrationThumbs.forEach(ilustrationThumb => ilustrationThumb.classList.remove("inactive"));
      designThumbs.forEach(designThumb => designThumb.classList.remove("inactive"));
      thumbnailWrapper.classList.remove("graphic-display");
      thumbnailWrapper.classList.remove("illustration-display");
      fullImgHeight = aboutSection.offsetHeight;
      thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
      // changeSectionHeight();
      bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      document.body.style.height = `${bodyHeight}px`;
      // console.log(thumbnailSectionHeight);
      console.log(bodyHeight)
      window.addEventListener('resize', function (e) {
        console.log("resized!");
        fullImgHeight = aboutSection.offsetHeight;
        console.log(fullImgHeight);
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      });
    } else {
      closeHiddenSection();
      thumbnailWrapper.style.transform = `translateY(0)`;
      // changeSectionHeight();
      bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      document.body.style.height = `${bodyHeight}px`;
      console.log(bodyHeight)
    }
  })

)


//ABOUT CLOSE
aboutClose.addEventListener("click", function () {
  aboutLinks.forEach(aboutLink => aboutLink.classList.remove("active"));
  aboutSection.classList.remove("active");
  thumbnailWrapper.style.transform = `translateY(0)`;
  // changeSectionHeight();
  bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
  document.body.style.height = `${bodyHeight}px`;
  window.scrollTo(0, 0);
})

// MENU MOBILE
menuBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  window.scrollTo(0, 0);
})

//MENU GRAPHIC DESIGN/Illustration
designLinks.forEach(designLink => designLink.addEventListener("click", function () {
  designLink.classList.toggle("active");
  illustrationLinks.forEach(illustrationLink => illustrationLink.classList.remove("active"));
  aboutLinks.forEach(aboutLink => aboutLink.classList.remove("active"));
  aboutSection.classList.remove("active");
  designThumbs.forEach(designThumb => designThumb.classList.remove("inactive"));
  thumbnailWrapper.classList.remove("illustration-display");
  if (designLink.classList.contains("active")) {
    thumbnailWrapper.classList.add("graphic-display");
    illustrationThumbs.forEach(illustrationThumb => illustrationThumb.classList.add("inactive"));
    closeHiddenSection();
    // changeSectionHeight();
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
    thumbnailWrapper.style.transform = `translateY(0)`;
    document.body.style.height = `${bodyHeight}px`;
    window.addEventListener('resize', function (e) {
      bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      thumbnailWrapper.style.transform = `translateY(0)`;
      document.body.style.height = `${bodyHeight}px`;
    });

  } else {
    closeHiddenSection();
    illustrationThumbs.forEach(illustrationThumb => illustrationThumb.classList.remove("inactive"));
    thumbnailWrapper.classList.remove("graphic-display");
    // changeSectionHeight();
    thumbnailWrapper.style.transform = `translateY(0)`;
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight + 51;
    document.body.style.height = `${bodyHeight}px`;

  }

}))

illustrationLinks.forEach(illustrationLink => illustrationLink.addEventListener("click", function () {
  illustrationLink.classList.toggle("active");
  designLinks.forEach(designLink => designLink.classList.remove("active"));
  aboutLinks.forEach(aboutLink => aboutLink.classList.remove("active"));
  aboutSection.classList.remove("active");
  illustrationThumbs.forEach(illustrationThumb => illustrationThumb.classList.remove("inactive"));
  thumbnailWrapper.classList.remove("graphic-display");
  if (illustrationLink.classList.contains("active")) {
    designThumbs.forEach(designThumb => designThumb.classList.add("inactive"));
    thumbnailWrapper.classList.add("illustration-display");
    closeHiddenSection();
    thumbnailWrapper.style.transform = `translateY(0)`;
    // changeSectionHeight();
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
    document.body.style.height = `${bodyHeight}px`;
    window.addEventListener('resize', function (e) {
      bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      thumbnailWrapper.style.transform = `translateY(0)`;
      document.body.style.height = `${bodyHeight}px`;
    });

  } else {
    // changeSectionHeight();
    closeHiddenSection();
    designThumbs.forEach(designThumb => designThumb.classList.remove("inactive"));
    thumbnailWrapper.classList.remove("illustration-display");
    thumbnailWrapper.style.transform = `translateY(0)`;
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight + 51;
    document.body.style.height = `${bodyHeight}px`;

  }
}))

//THUMBNAILS

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    // changeSectionHeight();
    aboutLinks.forEach(aboutLink => aboutLink.classList.remove("active"));
    fullImgs.forEach(fullImg => {
      fullImg.classList.remove("active");
      thumbnailWrapper.style.transform = `translateY(0)`;
      bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      document.body.style.height = `${bodyHeight}px`;
    });

    fullImgs[index].classList.add("active");
    aboutSection.classList.remove("active");
    window.scrollTo(0, 0);
    fullImgHeight = fullImgs[index].offsetHeight;
    thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
    bodyHeight = fullImgs[index].offsetHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
    document.body.style.height = `${bodyHeight}px`;
    window.addEventListener('resize', function (e) {
      console.log("resized!");
      fullImgHeight = fullImgs[index].offsetHeight;
      console.log(fullImgHeight);
      thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
      bodyHeight = fullImgs[index].offsetHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
      document.body.style.height = `${bodyHeight}px`;
    });

  })
})

//Navigation inside the FULL IMG element
//CLOSE
const closes = [...document.querySelectorAll(".fa-th-large")];

closes.forEach(close => {
  close.addEventListener("click", function () {
    window.scrollTo(0, 0);
    closeHiddenSection();
    thumbnailWrapper.style.transform = `translateY(0)`;
    bodyHeight = thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
    document.body.style.height = `${bodyHeight}px`;
  })
})

//BACKWARDS
const backwards = [...document.querySelectorAll(".fa-angle-left")];

backwards.forEach((backward, index) => {
  backward.addEventListener("click", function () {
    categoriesLinks.forEach(catLink => {
      if (catLink.classList.contains("active") === false) {
        if (index > 0) {
          fullImgs[index].classList.remove("active");
          window.scrollTo(0, 0);
          fullImgs[index - 1].classList.add("active");
          fullImgHeight = fullImgs[index - 1].offsetHeight;
        } else {
          fullImgs[index].classList.remove("active");
          window.scrollTo(0, 0);
          fullImgs[fullImgs.length - 1].classList.add("active");
          fullImgHeight = fullImgs[fullImgs.length - 1].offsetHeight;
        }
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      }
    })
  })
})

//FORWARD
const forwards = [...document.querySelectorAll(".fa-angle-right")];

forwards.forEach((forward, index) => { //1
  forward.addEventListener("click", function () { //2
    categoriesLinks.forEach(catLink => { //3
      if (catLink.classList.contains("active") === false) {
        if (index < forwards.length - 1) {
          fullImgs[index].classList.remove("active");
          window.scrollTo(0, 0);
          fullImgs[index + 1].classList.add("active");
          fullImgHeight = fullImgs[index + 1].offsetHeight;
        } else {
          fullImgs[index].classList.remove("active");
          window.scrollTo(0, 0);

          fullImgs[0].classList.add("active");
          fullImgHeight = fullImgs[0].offsetHeight;
        }
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
      }
    }) //trzecia linia OK
  }) //druga linia OK
}) //pierwsza linia OK

//NAWIGACJA WEWNATRZ KATEGORII
const backwardIllustrations = [...document.querySelectorAll(".bckwrd-illustration")];
const forwardIllustrations = [...document.querySelectorAll(".frwd-illustration")];
const backwardDesigns = [...document.querySelectorAll(".bckwrd-design")];
const forwardDesigns = [...document.querySelectorAll(".frwd-design")];

const sectionIllustrations = [...document.querySelectorAll(".section-illustration")];
const sectionDesigns = [...document.querySelectorAll(".section-graphic-design")];

//WEWNATZ ILUSTRACJI
forwardIllustrations.forEach((el, index) => {
  el.addEventListener("click", function () {
    illustrationLinks.forEach(illustrationLink => {
      if (illustrationLink.classList.contains("active")) {
        sectionDesigns.forEach(design => design.classList.remove("active"));
        if (index < forwardIllustrations.length - 1) {
          sectionIllustrations[index].classList.remove("active");
          sectionIllustrations[index + 1].classList.add("active");
          fullImgHeight = sectionIllustrations[index + 1].offsetHeight;
        } else {
          sectionIllustrations[index].classList.remove("active");
          window.scrollTo(0, 0);
          sectionIllustrations[0].classList.add("active");
          fullImgHeight = sectionIllustrations[0].offsetHeight;
        }
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      }
    })

  }) //2
})
//1

backwardIllustrations.forEach((el, index) => {
  el.addEventListener("click", function () {
    illustrationLinks.forEach(illustrationLink => {
      if (illustrationLink.classList.contains("active")) {
        sectionDesigns.forEach(design => design.classList.remove("active"));
        if (index > 0) {
          sectionIllustrations[index].classList.remove("active");
          sectionIllustrations[index - 1].classList.add("active");
          fullImgHeight = sectionIllustrations[index - 1].offsetHeight;
        } else {
          sectionIllustrations[index].classList.remove("active");
          window.scrollTo(0, 0);
          sectionIllustrations[sectionIllustrations.length - 1].classList.add("active");
          fullImgHeight = sectionIllustrations[sectionIllustrations.length - 1].offsetHeight;
        }
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      }
    })


  })
});

//WEWNATRZ GRAFIK

forwardDesigns.forEach((el, index) => {
  el.addEventListener("click", function () {
    designLinks.forEach(designLink => {
      if (designLink.classList.contains("active")) {
        sectionIllustrations.forEach(illustration => illustration.classList.remove("active"));
        if (index < forwardDesigns.length - 1) {
          sectionDesigns[index].classList.remove("active");
          sectionDesigns[index + 1].classList.add("active");
          fullImgHeight = sectionDesigns[index + 1].offsetHeight;
        } else {
          sectionDesigns[index].classList.remove("active");
          window.scrollTo(0, 0);
          sectionDesigns[0].classList.add("active");
          fullImgHeight = sectionDesigns[0].offsetHeight;
        }
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      }
    })


  })
});

backwardDesigns.forEach((el, index) => {
  el.addEventListener("click", function () {
    designLinks.forEach(designLink => {
      if (designLink.classList.contains("active")) {
        sectionIllustrations.forEach(illustration => illustration.classList.remove("active"));
        if (index > 0) {
          sectionDesigns[index].classList.remove("active");
          sectionDesigns[index - 1].classList.add("active");
          fullImgHeight = sectionDesigns[index - 1].offsetHeight;
        } else {
          sectionDesigns[index].classList.remove("active");
          window.scrollTo(0, 0);
          sectionDesigns[sectionDesigns.length - 1].classList.add("active");
          fullImgHeight = sectionDesigns[sectionDesigns.length - 1].offsetHeight;
        }
        thumbnailWrapper.style.transform = `translateY(${fullImgHeight}px)`;
        bodyHeight = fullImgHeight + thumbnailWrapper.offsetHeight + thumbnailWrapper.offsetTop + footerHeight;
        document.body.style.height = `${bodyHeight}px`;
      }
    })

  })
})

// const forwardBackward = (e) => {
  
//   if (e.keyCode === 37 || e.keyCode === 39) {
//     e.keyCode === 37 ? index-- : index++;
//     if (index < 0) {
//       index = slides.length - 1;
//     } else if (index === slides.length) {
//       index = 0;
//     }
//     img.src = slides[index].img;
//     h1.textContent = slides[index].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, 2000);
//   }
// };

// window.addEventListener("keydown", forwardBackword);

//STRZALKA W GORE
arrows.forEach(arrow => {
  arrow.addEventListener("click", function () {
    window.scrollTo(0, 0);
  })
})