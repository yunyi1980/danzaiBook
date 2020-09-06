interface user {
  openid: string,
  name: string,
  unionid?: string,
  
}

interface book {
  bookid: string,
  bookName: string, // 账本名称
  initDate: Date, // 初始日期
  initAmount: number, //初始资金
  currency:  'CNY'|'HK'|'US'|'EUR', //人民币 港币 美元  欧元
}

export {user, book};