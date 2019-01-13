import RNDeviceInfo from "react-native-device-information";
import Config from "react-native-config";
import { AppContext } from "uRnFramework-app-core";
import {
  AsyncStorageUtil,
  HttpClient,
  AppConst
} from "uRnFramework-basic-components";
class NotificationService {
  constructor() {
    let headerInfo = {
      version: Config.API_VERSION,
      clientKey: Config.ENTERPRISE_KEY,
      zoneId: 5,
      sessionId: ""
    };
    let baseUrl = Config.BASE_EMS_URL;
    if (baseUrl) {
      this.httpClient = new HttpClient(
        baseUrl,
        {
          "ss-header": JSON.stringify(headerInfo)
        },
        10000
      );
    }
  }

  updateFcmToken() {
    return new Promise((resolve, reject) => {
      AsyncStorageUtil.get(AppConst.notificationDatabase).then(
        res => {
          let userId = -1;
          let appContext = AppContext.getAppContext();
          if (appContext.sessionData) {
            let sessionData = JSON.parse(appContext.sessionData);
            userId = sessionData.userId;
          }

          let deviceId = RNDeviceInfo.getUniqueID();
          let params = {};
          params["fcmToken"] = res;
          params["deviceId"] = deviceId;
          params["userId"] = userId;
          let actionUrl = "/user/saveFcmToken";
          this.httpClient.postApi(actionUrl, params).then(
            res => {
              if (res.status == 200) {
                resolve(res);
              } else {
                reject(res);
              }
            },
            err => {
              reject(err);
            }
          );
        },
        err => {
          reject(err);
        }
      );
    });
  }

  updateVoipToken(token) {
    let userId = -1;
    let appContext = AppContext.getAppContext();
    if (appContext.sessionData) {
      let sessionData = JSON.parse(appContext.sessionData);
      userId = sessionData.userId;
    }
    let deviceId = RNDeviceInfo.getUniqueID();
    let params = {};
    params["voipToken"] = token;
    params["deviceId"] = deviceId;
    params["userId"] = userId;
    let actionUrl = "/user/saveFcmToken";
    this.httpClient.postApi(actionUrl, params).then(
      res => {
        if (res.status == 200) {
          console.log("res");
        } else {
          console.log("err");
        }
      },
      err => {
        console.log("err");
      }
    );
  }
}

export default NotificationService;
