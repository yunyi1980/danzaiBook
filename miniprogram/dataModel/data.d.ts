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
  _id: string; // 主键
  openid: string; // 用户编号
  bookid: string; // 账本编号
  actionDate: string; // 发生时间
  action: "in" | "out"; // 转入 转出
  amount: number; // 数量
  netValue?: number; // 净值
  shareNumber?: number; // 份额
  desc?: string; // 描述
}
/**
 * 账本资产改变记录
 */
export interface IBookAmountRecord {
  _id: string; // 主键
  openid: string; // 用户编号
  bookid: string; // 账本编号
  amount: number; // 数量
  updateDate: string; // 发生时间
  desc?: string; // 描述
}

/**
 * btn样式表
 */
export declare enum btnType {
  primary = "primary",
  default = "default",
}

/**
 * 检测数据是否合法 返回
 */
export interface IValidRes {
  msg: string;
  isValid: Boolean;
}
