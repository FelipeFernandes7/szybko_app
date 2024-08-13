export function getGreeting() {
  const hours = new Date().getHours();
  if (hours <= 12) return "Bom Dia!";
  if (hours > 12 && hours <= 18) return "Boa Tarde!";
  if (hours > 23 && hours <= 5) return "Acordado(a) uma hora dessas??";
  return hours.toString();
}
