import { CHANGEREADNOTIFICATION, LISTNOTIFICATIONS, LOADING, NOTIFICATIONS, NOTIFICATIONSICON, SNACK, SOCKET } from "./NavActions";

export const showHideLoading = (data) => ({
  type: LOADING,
  data: data
})

export const setSocket = (data) => ({
  type: SOCKET,
  data: data
})

export const setNotifications = (data) => ({
  type: NOTIFICATIONS,
  data: data
})

export const setNotificationsIcon = (data) => ({
  type: NOTIFICATIONSICON,
  data: data
})

export const setSnackBar = (data) => ({
  type: SNACK,
  data: data
})

export const setListNotifications = (data) => ({
  type: LISTNOTIFICATIONS,
  data: data
})


export const changeReadNotification = (data) => ({
  type: CHANGEREADNOTIFICATION,
  data: data
})
