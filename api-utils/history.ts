import { get, keys, set, flushall } from '../api-adapters/redis'

export const addToHistory = async (message: any) => {
  try {
    await set(`message-${message.id}`, JSON.stringify(message), 'EX', 28800) //8h
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getHistory = async () => {
  try {
    const redisKeys = await keys('message-*')

    if (redisKeys.length > 0) {
      return Promise.all(
        redisKeys.map(async (messageKey: any) => {
          const data = await get(messageKey)

          return JSON.parse(data || '{}')
        })
      )
    }

    return []
  } catch (error) {
    console.log(error)
    return error
  }
}

export const clearHistory = async () => {
  try {
    await flushall()
  } catch (error) {
    console.log(error)
    return error
  }
}
