import redis from 'redis'
import { promisify } from 'util'

const {
  REDIS_HOST: host,
  REDIS_PORT: port,
  REDIS_PASSWORD: password,
} = process.env

const client = redis.createClient({
  host,
  port: parseInt(port || '15479', 10),
  password,
})

export const get = promisify(client.get).bind(client)
export const set = promisify(client.set).bind(client)
export const getAll = promisify(client.hgetall).bind(client)
export const keys = promisify(client.keys).bind(client)
export const flushall = promisify(client.flushall).bind(client)
