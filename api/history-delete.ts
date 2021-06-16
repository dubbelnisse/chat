import { clearHistory } from '../api-utils/history'

module.exports = async (_req: any, res: any) => {
  await clearHistory()

  res.send({
    message: 'ok',
  })
}
