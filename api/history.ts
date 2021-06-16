import { getHistory } from './utils/history'

module.exports = async (_req: any, res: any) => {
  try {
    const history = await getHistory()

    res.send(history)
  } catch (e) {
    console.log(e.message)
  }
}
