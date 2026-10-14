function minutosEntre(inicio: string, fim: string): number {
  const [horaInicio, minutoInicio] = inicio.split(":").map(Number);
  const [horaFim, minutoFim] = fim.split(":").map(Number);
  const diferenca = horaFim * 60 + minutoFim - (horaInicio * 60 + minutoInicio);
  return diferenca < 0 ? diferenca + 24 * 60 : diferenca;
}

console.log(minutosEntre("08:00", "17:00"));
console.log(minutosEntre("22:00", "06:00"));