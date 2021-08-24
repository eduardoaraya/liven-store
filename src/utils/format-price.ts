export default function formatPrice(price: string) {
  return `R$ ${parseFloat(price).toFixed(2).replace(".", ",")}`;
}
