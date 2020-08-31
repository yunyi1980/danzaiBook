// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const userCollection = db.collection('user');

  const isNewUser = await userCollection.where({
    openid: wxContext.OPENID // 填入当前用户 openid
  }).count() === 0

  // 新用户
  if (isNewUser) {
    const data = {
      openid: xContext.OPENID,
      unionid: wxContext.UNIONID
    }
    userCollection.add({ data })
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}