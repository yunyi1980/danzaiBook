// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

/* 
获取用户的账本列表
 */
const getBooklist = async () => {
  const { OPENID } = cloud.getWXContext()
  const db = cloud.database()
  const res = await db.collection('accountBook').where({
    openid: OPENID
  }).get()

  return res.data
}

// 云函数入口函数
exports.main = async (event, context) => {
  let bookList = []

  try {
    bookList = await getBooklist()
  } catch (err) {
    // do nothing
  }

  return {
    bookList
  }
}