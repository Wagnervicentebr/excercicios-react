export const DateFormatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC'
})

export const CurrencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})