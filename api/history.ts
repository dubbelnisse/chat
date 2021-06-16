import { getHistory } from '../api-utils/history'

module.exports = async (_req: any, res: any) => {
  try {
    const history = await getHistory()

    res.send(history)
  } catch (error) {
    console.log(error)
  }
}
