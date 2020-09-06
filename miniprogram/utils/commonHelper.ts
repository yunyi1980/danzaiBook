export function toFormatString(pDate: Date): string {
  const year = pDate.getFullYear();
  const date = pDate.getDate();
  const month = pDate.getMonth() + 1;

  const formatMonth = month < 10 ? `0${month}` : `${month}`;
  const formateDate = date < 10 ? `0${date}` : `${date}`;

  return `${year}-${formatMonth}-${formateDate}`
}

export const HIDDEN_AMOUNT_FLAG: string = '****'
