////////////////// CLOCK FUNTION

var partytime;
var wakeuptime = 7;
var lunchtime = 12;
var naptime = lunchtime + 2;

(function() {
  setInterval(function() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    let fullTime = hour + ":" + minute + ":" + seconds;

    let elTime = document.getElementById("time");
    elTime.textContent = `Time is ${fullTime}`;
  }, 1000);
})();

/////////////// Image and Button Change FUNCTION

var image_tracker = "f";
function changeImage() {
  var image = document.getElementById("img-now");
  if (image_tracker === "f") {
    image.src = "vendor/cats-party.jpg";
    image_tracker = "t";
  } else {
    image.src = "vendor/bed-time.jpg";
    image_tracker = "f";
  }
}

function changeButton() {
  if (document.getElementById("party-btn").value === "Sleep Time") {
    document.getElementById("party-btn").value = "Party Time";
  } else {
    document.getElementById("party-btn").value = "Sleep Time";
  }
}

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

function change() {
  changeImage();
  changeButton();
}
