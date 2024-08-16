export function getGreeting(): string {
  const hours = new Date().getHours();
  if (hours >= 6 && hours <= 12) return "Bom Dia!";
  if (hours > 12 && hours <= 18) return "Boa Tarde!";
  if (hours > 18 && hours < 23) return "Boa Noite!";
  if (hours >= 23 || hours < 6) return "Acordado(a) uma hora dessas??";

  return "Olá!";
}
