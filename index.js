export default function numeralCommaFormatter (input) {
  if (input) {
    const rawValue = input.replace(/[^\d.]|[.](?=.*[.])/g, '')
    const [wholePart, decimalPart] = rawValue.split('.')
    const formattedWholePart = Number(wholePart).toLocaleString()
    const formattedValue = decimalPart
      ? `${formattedWholePart}.${decimalPart}`
      : formattedWholePart

    return formattedValue
  }
  return ''
}