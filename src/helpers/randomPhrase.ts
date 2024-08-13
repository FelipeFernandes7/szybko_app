const motivationalPhrases = [
  "Uma hora nova, uma nova chance!",
  "Hora de pensar positivo!",
  "Cada minuto conta!",
  "Faça valer esta hora!",
  "Aproveite o momento!",
  "Você está indo muito bem!",
  "Siga em frente e não olhe para trás!",
];

const jokes = [
  "Hora de uma piada: O que é um pontinho vermelho no canto da sala? Uma pimenta do reino exploradora!",
  "Por que o computador foi ao médico? Porque ele tinha um vírus!",
  "O que o tomate foi fazer no banco? Tirar extrato!",
  "Qual é o peixe mais inteligente? O atum!",
  "Por que a aranha é um animal de sucesso? Porque ela trabalha na web!",
];

const creativePhrases = [
  "Aproveite esta pausa!",
  "Sorria, alguém pensa em você!",
  "Hora de uma nova ideia!",
  "Quem não arrisca, não petisca!",
  "As melhores ideias surgem nas horas mais inesperadas!",
  "Seja a mudança que você quer ver no mundo!",
  "Pense fora da caixinha!",
];

export function getRandomPhrase(): string {
  const currentHour = new Date().getHours();

  if (currentHour % 3 === 0) {
    return motivationalPhrases[
      Math.floor(Math.random() * motivationalPhrases.length)
    ];
  } else if (currentHour % 3 === 1) {
    return jokes[Math.floor(Math.random() * jokes.length)];
  } else {
    return creativePhrases[Math.floor(Math.random() * creativePhrases.length)];
  }
}
