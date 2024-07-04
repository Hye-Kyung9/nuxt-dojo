export default defineEventHandler(async (event) => {
  // //handle query params
  // // useQuery -> getQuery로 변경
  // const { name } = getQuery(event)

  // //handle post data
  // //useBody -> readBody로 변경
  // const { age } = await readBody(event)

  //api 호출 (currentcyapi로 private key생성)
  //TODO: apikey env로이동
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_ZhVAdgIxP8BHiwbaRyUXfJ6HcsgATGWrHq6T851H')

  // return {
  //   message: `Hello ${name}! You are ${age} years old`,
  // }
  return data
})