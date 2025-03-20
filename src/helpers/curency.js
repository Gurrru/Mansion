export function toPHP(money) {
  return new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'PHP',
  }).format(money)
}
