
import Firebase from 'react-native-firebase';
import React, { Component } from 'react'
import { Actions } from "react-native-router-flux";
import { AppConst, AsyncStorageUtil } from "uRnFramework-basic-components";
const FCM = Firebase.messaging();

export class FirebaseNotification extends Component {

    static fcmDatabase = AppConst.notificationDatabase

    static checkNotficationPermission = async function () {
        return await FCM.requestPermissions({ badge: true, sound: true, alert: true });
    }
    static registerFCM = function () {
        FCM.getToken().then(token => {
            console.log('===============FCM Token=====================');
            console.log(token);
            console.log('====================================');
            AsyncStorageUtil.set(this.fcmDatabase, token);

            // NotifcationService.updateFcmToken(token)
            // store fcm token in your server
        });

        FCM.onTokenRefresh(function (token) {
            console.log('===============FCM Token=====================');
            console.log(token);
            console.log('====================================');
            AsyncStorageUtil.set(this.fcmDatabase, token);

            // NotifcationService.updateFcmToken(token)
        })

        FCM.onMessage((notif) => {
            console.log('================Notification====================');
            console.log(notif);
            try {
                this.handleNotification(notif)
            } catch (e) {
                console.log(e)
            }
        });

    }


    static handleNotification = (notification, isFromInit) => {
        Actions.notification();
        console.log('clicked notification')
    }


    static openByNotification = function () {
        FCM.getInitialNotification().then((notification) => {
            if (notification) {
                this.handleNotification(notification, true);
            }
        })
    }



    // static createLocalNotification =function(data){
    //   FCM.presentLocalNotification({
    //     id: "1",                               // (optional for instant notification)
    //     title: "New Order",                     // as FCM payload
    //     body: data.length +"  New orders are waiting to be Accepted.",                    // as FCM payload (required)
    //     sound: "default",                                   // as FCM payload
    //     priority: "high",                                   // as FCM payload
    //     click_action: "ACTION",                             // as FCM payload
    //     badge: 1,                                          // as FCM payload IOS only, set 0 to clear badges
    //     number: 1,                                         // Android only
    //     auto_cancel: true,                                  // Android only (default true)
    //     large_icon: "ic_launcher",                           // Android only
    //     icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
    //     color: "red",                                       // Android only
    //     vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
    //     lights: true,     
    //     show_in_foreground:true                                  // notification when app is in foreground (local & remote)
    // });
    //  }


}





