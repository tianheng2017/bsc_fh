export const formatNumber = (number) => {
    return Math.round(parseFloat(number) * 1000000) / 1000000
}