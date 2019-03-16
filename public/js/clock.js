function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  let ampm = ''
  h >= 12 ? ampm = 'pm' : ampm = 'am'

  document.getElementById('clock').innerHTML = h + ":" + m + ' ' + ampm;
  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}