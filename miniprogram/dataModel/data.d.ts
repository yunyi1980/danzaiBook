interface user {
  openid: string,
  name: string,
  unionid?: string,
  
}

interface Ibook {
  _id: string, // 账本唯一标识
  bookName: string, // 账本名称
  initDate: string, // 初始日期 MMMM-YY-dd
  initAmount: number, //初始资金
  currency:  'CNY'|'HK'|'US'|'EUR', //人民币 港币 美元  欧元
  currAmount: number, // 当前资金
  desc?: string, // 账本描述
}

declare enum btnType {
  primary = 'primary',
  default = 'default'
}

export {user, Ibook as Ibook, btnType as btnType};