import React from 'react'

export const useTabNotification = () => {
  const [notifications, setNotifications] = React.useState(0)
  const [pageIsInView, setPageIsInView] = React.useState(true)

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setPageIsInView(document.hidden)

      if (document.hidden === false) {
        document.title = 'Chat'
        setNotifications(0)
      }
    }

    window.addEventListener('visibilitychange', handleVisibilityChange)

    return () =>
      window.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  React.useEffect(() => {
    if (notifications > 0) {
      document.title = `(${notifications}) Chat`
    }
  }, [notifications])

  const addNotification = () => {
    if (!pageIsInView) {
      setNotifications(notifications + 1)
    }
  }

  return addNotification
}
