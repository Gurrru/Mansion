export function toIDR(money) {
  return new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(money)
}
