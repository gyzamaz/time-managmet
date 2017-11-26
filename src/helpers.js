// Convert time (1500 sec = 25 min)
export function convertTime(time) {
  let mins = Math.floor(time / 60);
  let secs = time - mins * 60;
  let timeFormatted = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  return timeFormatted;
}
