export function getGreeting() {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 12) {
    return "⛅";
  } else if (hours >= 12 && hours <= 18) {
    return "☀️";
  } else if (hours >= 18 && hours <= 5) {
    return "🌙";
  }
}
