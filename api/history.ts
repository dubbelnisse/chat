import { getHistory } from '../api-utils/history'

module.exports = async (_req: any, res: any) => {
  try {
    const history = await getHistory()

    res.send(
      history
        .slice(0, 5)
        .sort(
          (a: any, b: any) =>
            new Date(a.sent).valueOf() - new Date(b.sent).valueOf()
        )
    )
  } catch (error) {
    console.log(error)
  }
}
