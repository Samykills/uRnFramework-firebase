import Config from "react-native-config";
import { DefaultAppTheme } from "uRnFramework-basic-components";
import { AppContext } from "uRnFramework-app-core";

class NotificationService {
  constructor() {
    let appContext = AppContext.getAppContext();
    let sessionData = JSON.parse(appContext.sessionData);
    let headerInfo = {
      version: Config.API_VERSION,
      clientKey: Config.ENTERPRISE_KEY,
      zoneId: 5,
      sessionId: sessionData.sessionId
    };
    let baseUrl = Config.BASE_NOTIFICATION_URL;
    // let baseUrl = "http://10.1.20.135:8650/memberservice/userDetails/";
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

  getNotificationList(userId) {
    let url = "getNotificationCountByMemberId?member_id="+userId
    return this.httpClient.getApi(url);
  }
}

export default NotificationService;
