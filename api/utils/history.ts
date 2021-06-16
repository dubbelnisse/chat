import fs from 'fs'

export const addToHistory = async (message) => {
  if (fs.existsSync('/tmp/history.json')) {
    const savedData = await fs.readFileSync('/tmp/history.json', 'utf8')
    const parsedSavedData = JSON.parse(savedData)

    fs.writeFileSync(
      '/tmp/history.json',
      JSON.stringify([...parsedSavedData, message])
    )
  } else {
    const data = JSON.stringify([message])

    fs.writeFileSync('/tmp/history.json', data)
  }
}

export const getHistory = async () => {
  let stored = []

  if (fs.existsSync('/tmp/history.json')) {
    const fromFile = await fs.readFileSync('/tmp/history.json', 'utf8')
    stored = JSON.parse(fromFile)
  }

  return stored
}
