import fs from 'fs'
import { promisify } from 'util'
import { join } from 'path'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const deleteFile = promisify(fs.unlink)
const fileName = join('/tmp', '/history.json')

export const addToHistory = async (message) => {
  try {
    if (fs.existsSync('/tmp/history.json')) {
      const savedData = await readFile(fileName, 'utf8')
      const parsedSavedData = JSON.parse(savedData)

      await writeFile(fileName, JSON.stringify([...parsedSavedData, message]))
    } else {
      const data = JSON.stringify([message])

      await writeFile(fileName, data)
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getHistory = async () => {
  try {
    if (fs.existsSync('/tmp/history.json')) {
      const store = await readFile(fileName, 'utf8')
      return JSON.parse(store)
    }

    return []
  } catch (error) {
    console.log(error)
    return error
  }
}

export const clearHistory = async () => {
  try {
    await deleteFile(fileName)
  } catch (error) {
    console.log(error)
    return error
  }
}
