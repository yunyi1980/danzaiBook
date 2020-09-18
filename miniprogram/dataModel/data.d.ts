/**
 * 用户实体类
 */
export interface user {
  openid: string;
  name: string;
  unionid?: string;
}
/**
 * 账本的实体类
 */
export interface IBook {
  _id: string; // 账本唯一标识
  bookName: string; // 账本名称
  initDate: string; // 初始日期 MMMM-YY-dd
  initAmount: number; //初始资金
  currency: "CNY" | "HK" | "US" | "EUR"; //人民币 港币 美元  欧元
  currAmount: number; // 当前资金
  desc?: string; // 账本描述
}
/**
 * 动作实体类
 */
export interface IActionRecord {
  _id: String; // 主键
  openid: String; // 用户编号
  bookid: String; // 账本编号
  actionDate: String; // 发生时间
  action: "in" | "out"; // 转入 转出
  amount: Number; // 数量
  netValue?: Number; // 净值
  shareNumber?: Number; // 份额
  desc?: string; // 描述
}
/**
 * 账本资产改变记录
 */
export interface IBookAmountRecord {
  _id: String; // 主键
  openid: String; // 用户编号
  bookid: String; // 账本编号
  amount: Number; // 数量
  updateDate: String; // 发生时间
  desc?: string; // 描述
}

/**
 * btn样式表
 */
export declare enum btnType {
  primary = "primary",
  default = "default",
}
