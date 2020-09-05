// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const addBook = async ({ bookName, amount, date }) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const openid = wxContext.OPENID;

  return await db.collection('accountBook').add({
    data: {
      bookName,
      initAmount: amount,
      initDate: date,
      currency: 'CNY',
      createTime: new Date(),
      isDeleted: false,
      openid
    }
  })
}

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const re = await addBook(event);

    return {
      msg:'success'
    }

  } catch (err) {
    return {
      event,
      openid: wxContext.OPENID,
      appid: wxContext.APPID,
      unionid: wxContext.UNIONID,
    }
  }
}