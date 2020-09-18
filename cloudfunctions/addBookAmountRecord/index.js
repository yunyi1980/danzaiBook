// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
  throwOnNotFound: false,
});

const addBookAmountRecord = async ({ bookid, amount, desc, updateDate }) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  const openid = wxContext.OPENID;

  const temp = await db
    .collection("bookAmountRecord")
    .where({
      updateDate,
      bookid,
      openid,
    })
    .get();

  if (temp.data.length > 0) {
    // 当天的记录存在，更新
    const id = temp.data[0]._id;
    await db
      .collection("bookAmountRecord")
      .where({
        updateDate,
        bookid,
        openid,
      })
      .update({
        data: {
          amount,
          desc,
        },
      });
  } else {
    // 当天的记录不存在，插入一条新记录
    await db.collection("bookAmountRecord").add({
      data: {
        openid,
        bookid,
        amount,
        updateDate,
        desc,
      },
    });
  }
};

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const re = await addBookAmountRecord(event);

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
