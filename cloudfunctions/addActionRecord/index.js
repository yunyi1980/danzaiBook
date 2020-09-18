// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
  throwOnNotFound: false,
});

/**
 * 新增转入转出记录
 * @param {} param0
 */
const addActionRecord = async ({
  bookid,
  amount,
  desc,
  action,
  actionDate,
  netValue,
  shareNumber,
}) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  const openid = wxContext.OPENID;

  return await db.collection("actionRecord").add({
    data: {
      openid,
      amount,
      desc,
      bookid,
      action,
      actionDate,
      netValue,
      shareNumber,
    },
  });
};
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const re = await addActionRecord(event);
    return {
      msg: "success",
    };
  } catch (err) {
    return {
      event,
      msg: "fail: " + err,
    };
  }
};
