////////////////// CLOCK FUNTION

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
var image = document.getElementById("img-now");
function changeImage() {
  if (image_tracker === "f") {
    image.src = "vendor/cats-party.jpg";
    image_tracker = "t";
  } else {
    image.src = "vendor/normal.png";
    image_tracker = "f";
  }
}

function changeButton() {
  if (document.getElementById("party-btn").value === "Back To Fat") {
    document.getElementById("party-btn").value = "Party Time";
  } else {
    document.getElementById("party-btn").value = "Back To Fat";
  }
}

////////////////////// DOM SELECTIONS
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var bedTimeSelector = document.getElementById("napTimeSelector");

///////////////////// Activates Wake-Up selector
var wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
  console.log(wakeuptime);
  var time = new Date().getHours().toString();
  console.log(time);
  if (time === wakeuptime) {
    image.src = "vendor/wakeup.gif";
  } else if (time !== wakeuptime) {
    image.src = "vendor/normal.png";
  }
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//////////////////// Activates Lunch selector
var lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
  console.log(lunchtime);
  var time = new Date().getHours().toString();
  console.log(time);
  if (time === lunchtime) {
    image.src = "vendor/lunch-time.jpg";
  } else if (time !== lunchtime) {
    image.src = "vendor/normal.png";
  }
};
lunchTimeSelector.addEventListener("change", lunchEvent);

///////////////////////// Activates Wake-Up selector
var bedEvent = function() {
  bedtime = bedTimeSelector.value;
  console.log(bedtime);
  var time = new Date().getHours().toString();
  console.log(time);
  if (time === bedtime) {
    image.src = "vendor/bed-time.jpg";
  } else if (time !== bedtime) {
    image.src = "vendor/normal.png";
  }
};
bedTimeSelector.addEventListener("change", bedEvent);

function change() {
  changeImage();
  changeButton();
}
