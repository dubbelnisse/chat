import React from 'react'

export const useTabNotification = () => {
  const [notifications, setNotifications] = React.useState(1)
  const [pageIsInView, setPageIsInView] = React.useState(true)

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setPageIsInView(document.hidden)

      if (document.hidden === false) {
        document.title = 'Chat'
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
    if (!pageIsInView && notifications) {
      setNotifications(notifications + 1)
    }
  }

  return addNotification
}
