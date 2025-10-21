// Setting the Launch Date.
var comingdate = new Date("October 24, 2025 00:00:00");

// Accepting the elements.
var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

// Making Countdown work.
var x = setInterval(function(){
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 *60));
  var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
  var secs = Math.floor(des%(1000 * 60) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  if(des <= 0){
    clearInterval(x);
    d.innerHTML = "00";
    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
  }

},1000);

function getTrueNumber(x) {
  if (x<10) return '0'+x;
  else return x;
}

