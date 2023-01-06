const toggle = document.getElementById("pricing");
const anually = document.querySelectorAll(".anually");
const monthly = document.querySelectorAll(".monthly");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const containerPopup = document.getElementById("container-popup");
toggle.addEventListener("change", handleToggle);

function handleToggle(e) {
  if (e.target.checked) {
    anually.forEach((element) => element.setAttribute("hidden", true));
    monthly.forEach((element) => element.removeAttribute("hidden"));
  } else {
    anually.forEach((element) => element.removeAttribute("hidden"));
    monthly.forEach((element) => element.setAttribute("hidden", true));
  }
}

let card = document.querySelector(".primary-img1-container");

document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

  card.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let card2 = document.querySelector(".primary-img2-container");

document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;

  card2.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let card3 = document.querySelector(".primary-img3-container");

document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 45;

  card3.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle1 = document.querySelector(".side-images-container1");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

  circle1.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle2 = document.querySelector(".side-images-container2");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

  circle2.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});
let circle3 = document.querySelector(".side-images-container3");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;

  circle3.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle4 = document.querySelector(".side-images-container4");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 48;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 43;

  circle4.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle5 = document.querySelector(".side-images-container5");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

  circle5.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle6 = document.querySelector(".side-images-container6");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 28;

  circle6.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle8 = document.querySelector(".side-images-container8");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

  circle8.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle9 = document.querySelector(".side-images-container9");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 28;

  circle9.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

let circle10 = document.querySelector(".side-images-container10");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 18;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

  circle10.style.transform = `translate3d(${xAxis}px,${yAxis}px, 0px)`;
});

///////////make mobile navigatin work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/****************
 section testimonails
 ****************/
const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(
  ".card-carousel + .card-controller"
);

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }

  event(callback) {
    let handler;

    this.target.addEventListener("mousedown", (e) => {
      e.preventDefault();

      handler = callback(e);

      window.addEventListener("mousemove", handler);

      document.addEventListener("mouseleave", clearDraggingEvent);

      window.addEventListener("mouseup", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler);
        window.removeEventListener("mouseup", clearDraggingEvent);

        document.removeEventListener("mouseleave", clearDraggingEvent);

        handler(null);
      }
    });

    this.target.addEventListener("touchstart", (e) => {
      handler = callback(e);

      window.addEventListener("touchmove", handler);

      window.addEventListener("touchend", clearDraggingEvent);

      document.body.addEventListener("mouseleave", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler);
        window.removeEventListener("touchend", clearDraggingEvent);

        handler(null);
      }
    });
  }

  // Get the distance that the user has dragged
  getDistance(callback) {
    function distanceInit(e1) {
      let startingX, startingY;

      if ("touches" in e1) {
        startingX = e1.touches[0].clientX;
        startingY = e1.touches[0].clientY;
      } else {
        startingX = e1.clientX;
        startingY = e1.clientY;
      }

      return function (e2) {
        if (e2 === null) {
          return callback(null);
        } else {
          if ("touches" in e2) {
            return callback({
              x: e2.touches[0].clientX - startingX,
              y: e2.touches[0].clientY - startingY,
            });
          } else {
            return callback({
              x: e2.clientX - startingX,
              y: e2.clientY - startingY,
            });
          }
        }
      };
    }

    this.event(distanceInit);
  }
}

class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container);

    // DOM elements
    this.container = container;
    this.controllerElement = controller;
    this.cards = container.querySelectorAll(".card");

    // Carousel data
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth =
      (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;
    this.xScale = {};

    // Resizing
    window.addEventListener("resize", this.updateCardWidth.bind(this));

    if (this.controllerElement) {
      this.controllerElement.addEventListener(
        "keydown",
        this.controller.bind(this)
      );
    }

    // Initializers
    this.build();

    // Bind dragging event
    super.getDistance(this.moveCards.bind(this));
  }

  updateCardWidth() {
    this.cardWidth =
      (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;

    this.build();
  }

  build(fix = 0) {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const zIndex = -Math.abs(i - this.centerIndex);

      const leftPos = this.calcPos(x, scale2);

      this.xScale[x] = this.cards[i];

      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex,
      });
    }
  }

  controller(e) {
    const temp = { ...this.xScale };

    if (e.keyCode === 39) {
      // Left arrow
      for (let x in this.xScale) {
        const newX =
          parseInt(x) - 1 < -this.centerIndex
            ? this.centerIndex
            : parseInt(x) - 1;

        temp[newX] = this.xScale[x];
      }
    }

    if (e.keyCode == 37) {
      // Right arrow
      for (let x in this.xScale) {
        const newX =
          parseInt(x) + 1 > this.centerIndex
            ? -this.centerIndex
            : parseInt(x) + 1;

        temp[newX] = this.xScale[x];
      }
    }

    this.xScale = temp;

    for (let x in temp) {
      const scale = this.calcScale(x),
        scale2 = this.calcScale2(x),
        leftPos = this.calcPos(x, scale2),
        zIndex = -Math.abs(x);

      this.updateCards(this.xScale[x], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex,
      });
    }
  }

  calcPos(x, scale) {
    let formula;

    if (x < 0) {
      formula = (scale * 100 - this.cardWidth) / 2;

      return formula;
    } else if (x > 0) {
      formula = 100 - (scale * 100 + this.cardWidth) / 2;

      return formula;
    } else {
      formula = 100 - (scale * 100 + this.cardWidth) / 2;

      return formula;
    }
  }

  updateCards(card, data) {
    if (data.x || data.x == 0) {
      card.setAttribute("data-x", data.x);
    }

    if (data.scale || data.scale == 0) {
      card.style.transform = `scale(${data.scale})`;

      if (data.scale == 0) {
        card.style.opacity = data.scale;
      } else {
        card.style.opacity = 1;
      }
    }

    if (data.leftPos) {
      card.style.left = `${data.leftPos}%`;
    }

    if (data.zIndex || data.zIndex == 0) {
      if (data.zIndex == 0) {
        card.classList.add("highlight");
      } else {
        card.classList.remove("highlight");
      }

      card.style.zIndex = data.zIndex;
    }
  }

  calcScale2(x) {
    let formula;

    if (x <= 0) {
      formula = 1 - (-1 / 5) * x;

      return formula;
    } else if (x > 0) {
      formula = 1 - (1 / 5) * x;

      return formula;
    }
  }

  calcScale(x) {
    const formula = 1 - (1 / 5) * Math.pow(x, 2);

    if (formula <= 0) {
      return 0;
    } else {
      return formula;
    }
  }

  checkOrdering(card, x, xDist) {
    const original = parseInt(card.dataset.x);
    const rounded = Math.round(xDist);
    let newX = x;

    if (x !== x + rounded) {
      if (x + rounded > original) {
        if (x + rounded > this.centerIndex) {
          newX =
            x + rounded - 1 - this.centerIndex - rounded + -this.centerIndex;
        }
      } else if (x + rounded < original) {
        if (x + rounded < -this.centerIndex) {
          newX =
            x + rounded + 1 + this.centerIndex - rounded + this.centerIndex;
        }
      }

      this.xScale[newX + rounded] = card;
    }

    const temp = -Math.abs(newX + rounded);

    this.updateCards(card, { zIndex: temp });

    return newX;
  }

  moveCards(data) {
    let xDist;

    if (data != null) {
      this.container.classList.remove("smooth-return");
      xDist = data.x / 250;
    } else {
      this.container.classList.add("smooth-return");
      xDist = 0;

      for (let x in this.xScale) {
        this.updateCards(this.xScale[x], {
          x: x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex),
        });
      }
    }

    for (let i = 0; i < this.cards.length; i++) {
      const x = this.checkOrdering(
          this.cards[i],
          parseInt(this.cards[i].dataset.x),
          xDist
        ),
        scale = this.calcScale(x + xDist),
        scale2 = this.calcScale2(x + xDist),
        leftPos = this.calcPos(x + xDist, scale2);

      this.updateCards(this.cards[i], {
        scale: scale,
        leftPos: leftPos,
      });
    }
  }
}

const carousel = new CardCarousel(cardsContainer);

// testimonials
$(document).ready(function () {
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass("active");
    targetElement.not(targetElement[i]).removeClass("active");
  });
  $(".testimonial .tabs li").click(function () {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass("active");
    targetElement.not($(this)).removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this)
      .text(i + 1)
      .prepend("0");
  });
});

// pricing
const setup = () => {
  return {
    isNavOpen: false,

    billPlan: "monthly",

    plans: [
      {
        name: "Easy",
        discretion:
          "All the basics for businesses that are just getting started.",
        price: {
          monthly: 29,
          annually: 29 * 12 - 199,
        },
        features: ["One project", "Your dashboard"],
      },
      {
        name: "Basic",
        discretion: "Better for growing businesses that want more customers.",
        price: {
          monthly: 59,
          annually: 59 * 12 - 100,
        },
        features: [
          "Two projects",
          "Your dashboard",
          "Components included",
          "Advanced charts",
        ],
      },
      {
        name: "Custom",
        discretion: "Advanced features for pros who need more customization.",
        price: {
          monthly: 139,
          annually: 139 * 12 - 100,
        },
        features: [
          "Unlimited projects",
          "Your dashboard",
          "+300 Components",
          "Chat support",
        ],
      },
    ],
  };
};

// popup

signUpButton.addEventListener("click", () => {
  containerPopup.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  containerPopup.classList.remove("right-panel-active");
});
