export function formatPrice(price: number) {
  const formattedPriceBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
  return formattedPriceBRL;
}
