const teddy = document.getElementById("teddy");
const message = document.getElementById("message");

let currentDress = null;

function dressUp(dressNumber) {
  dressNumber = Number(dressNumber);

  if (currentDress === dressNumber) {
    // Remove dress and show sad teddy with a forced image reload
    teddy.src = "images/teddy_sad.png?" + new Date().getTime();
    // message.textContent = "Teddy is sad now!";
    currentDress = null;
    console.log("Dress removed");
  } else {
    // Change to new dress
    teddy.src = `images/teddy_dress${dressNumber}.png`;
    // message.textContent = `Teddy loves Dress ${dressNumber}!`;
    currentDress = dressNumber;
    console.log("Dress applied:", dressNumber);
  }
}
