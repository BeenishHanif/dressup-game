

const teddy = document.getElementById("teddy");
let currentDress = null;

function dressUp(dressNumber) {
  dressNumber = Number(dressNumber);

  document.querySelectorAll('.dress-option').forEach(option => {
    option.classList.remove('selected');
  });

  if (currentDress === dressNumber) {
    teddy.src = "images/teddy_sad.png?" + new Date().getTime();
    currentDress = null;
    console.log("Dress removed");
  } else {
    teddy.src = `images/teddy_dress${dressNumber}.png`;
    currentDress = dressNumber;

    document.getElementById(`dress${dressNumber}`).classList.add('selected');

    teddy.classList.add('clicked');
    setTimeout(() => {
      teddy.classList.remove('clicked');
    }, 300);

    console.log("Dress applied:", dressNumber);
  }
}

function resetTeddy() {
  teddy.src = "images/teddy_animated.gif";
  currentDress = null;
  document.querySelectorAll('.dress-option').forEach(option => {
    option.classList.remove('selected');
  });
}


teddy.addEventListener('click', function () {
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 300);
});
