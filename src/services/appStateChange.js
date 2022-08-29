// import { store } from "../store";
// import { socket } from "./socket";
// import { localNotificationService } from '../services/LocalNotificationService'

// // let newlyOpen = true

// export const handleAppStateChange = (nextAppState, forceConnect) => {
//   console.log('handleAppStateChange', nextAppState)

//   const userId = store.getState().profile.userid;
//   if (!userId) return; // If user not logged in

//   // if (newlyOpen) {
//   //   newlyOpen = false
//   //   return; // If app is opende newly
//   // }

//   if (forceConnect) {
//     socket.emit("user_connected", userId);
//     return; // force connect
//   }

//   if (userId && nextAppState === 'active') {
//     localNotificationService.cancelAllLocalNotifications() // it's clear all BitPost notifications from background when open app
//     socket.connected && socket.emit("user_connected", userId);
//   }
//   else if (userId && (nextAppState === 'inactive' || nextAppState === "background")) {
//     console.log('user_disconnect')
//     socket.emit('user_disconnect', userId);
//   }

// }