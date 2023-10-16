var nft = document.querySelectorAll("#nft-item");

var nft_market = document.querySelectorAll(".nft-market_item")

console.log(nft)
console.log(nft_market)

for (var i = 0, len = nft.length; i < len; i++) {
  (function (index) {
    nft[i].onmouseenter = function () {
      this.children[2].style.marginTop = "-30px";
      this.style.cursor = "pointer";
    },
    nft[i].onmouseleave = function () {
      this.children[2].style.marginTop = "-150px";
    };
  })(i);
}

for (var i = 0, len = nft_market.length; i < len; i++) {
  (function (index) {
    (nft_market[i].onmouseenter = function () {
      this.classList.add('gradient-border')

      Object.values(this.children).forEach((e) => {
          e.style.cursor = 'pointer';
      });

      this.children[0].style.transition = "all 0.1s ease-in-out";
      this.children[0].style.transform = 'scale(1.005)';

      this.children[1].style.transform = "scale(1.02)";
      this.children[1].style.transition = "all 0.1s ease-in-out";
    }),
      (nft_market[i].onmouseleave = function () {
        this.classList.remove('gradient-border')
        this.children[0].style.transform = "scale(1)";

        this.children[1].style.transform = "scale(1)";
        this.children[1].style.boxShadow = "none";
      });
  })(i);
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("element-show2");
    }
  });
});

observer2.observe(document.querySelector("#hero-4_title"));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("element-show3");
    }
  });
});

observer3.observe(document.querySelector("#hero-4_subtitle"));

let gallery = document.querySelector(".nft-gal2")
let gal_children = Array.from(gallery.children)
console.log(gal_children)

for (var i = 0, len = gal_children.length; i < len; i++) {
  (function (index) {
    (gal_children[i].onmouseenter = function () {
      Object.values(gal_children).forEach((e) => {
        e.style.filter = "grayscale(0.6)";
      });
      this.style.filter = "grayscale(0)";
      this.style.cursor = "pointer";
      this.style.transform = "scale(1.1)";
    }),
      (gal_children[i].onmouseleave = function () {
        Object.values(gal_children).forEach((e) => {
          e.style.filter = "grayscale(0)";
          this.style.transform = "scale(1)";
        });
      });
  })(i);
}
