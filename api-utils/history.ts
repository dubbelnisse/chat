import fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

export const addToHistory = async (message) => {
  try {
    if (fs.existsSync('/tmp/history.json')) {
      const savedData = await readFile('/tmp/history.json', 'utf8')
      const parsedSavedData = JSON.parse(savedData)

      await writeFile(
        '/tmp/history.json',
        JSON.stringify([...parsedSavedData, message])
      )
    } else {
      const data = JSON.stringify([message])

      await writeFile('/tmp/history.json', data)
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getHistory = async () => {
  try {
    if (fs.existsSync('/tmp/history.json')) {
      const store = await readFile('/tmp/history.json', 'utf8')
      return JSON.parse(store)
    }

    return []
  } catch (error) {
    console.log(error)
    return error
  }
}
