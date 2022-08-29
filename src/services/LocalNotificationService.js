import PushNotificationIOS from "@react-native-community/push-notification-ios";
var PushNotification = require("react-native-push-notification");
import { Platform } from 'react-native';

class LocalNotificationService {
    configure = (onOpenNotification) => {
        PushNotification.configure({
            onRegister: function (token) {
                // console.log("[LocalNotificationService] onRegister:", token);
            },
            onNotification: function (notification) {
                // console.log("[LocalNotificationService] notification:", notification);
                if (!notification.data) {
                    return
                }
                notification.userInteraction = true;
                onOpenNotification(Platform.OS === 'ios' ? notification.data.item : notification.item)

                if (Platform.OS === 'ios') {
                    // (required) Called when a remote is received or opened, or local notification is opened
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                }
            },
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true

        })
    }

    unregister = () => {
        PushNotification.unregister()
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            // Android only properties
            ...this.buildAndroidNotification(id, title, message, data, options),
            // IOS and Android only properties
            ...this.buildIOSNotification(id, title, message, data, options),
            // IOS and Android only properties
            title: title || "",
            message: message || "",
            playsound: options.playsound || false,
            title: options.soundName || 'default',
            userInteraction: false // BOOLEAN: if the notification was opened by the user from the notification
        });
    }

    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || true,
            vibration: options.vibration || 300,
            priority: options.priority || "high", // (optional) set notification importance, default:high
            data: data
        }
    }

    buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || 'view',
            category: options.category || "",
            userInfo: {
                id: id,
                item: data
            }
        }
    }

    cancelAllLocalNotifications = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications();
        } else {
            PushNotification.cancelAllLocalNotifications();
        }
    }

    removeDeliveredNotificationByID = (notificationId) => {
        // console.log("[LocalNotificationService] removeDeliveredNotificationByID: ", notificationId);
        PushNotification.cancelLocalNotifications({ id: `${notificationId}` })
    }
}

export const localNotificationService = new LocalNotificationService();