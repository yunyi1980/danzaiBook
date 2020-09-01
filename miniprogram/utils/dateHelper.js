export function toFormatString(pDate) {
  const year = pDate.getFullYear();
  const date = pDate.getDate();
  const month = pDate.getMonth() + 1;

  return `${year}-${month}-${date}`
}
