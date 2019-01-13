import { StyleSheet } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { DefaultAppTheme } from "uRnFramework-basic-components";

const NotificationStyle = StyleSheet.create({
  notificationWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: height(2.5),
    paddingBottom: height(2.5),
    borderBottomColor: DefaultAppTheme.grayColor,
    borderBottomWidth: 1
  },
  serviceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width(6.1),
    marginRight: width(3.1),
    padding: 5
  },
  imageParaWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: width(3.1),
    marginRight: width(1.1),
    padding: 5
  },
  visitorImageiOS: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "stretch",
    marginTop: height(1.1)
  },
  visitorImageAndroid: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: "stretch",
    marginTop: height(1.1)
  },
  textLabel: {
    fontSize: 12,
    color: "#000"
  },
  messageTextLabels: {
    fontSize: 15,
    color: "#000"
  },
  messageWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 5,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: width(2.1)
  },
  notifyTextLabels: {
    fontSize: 12,
    color: "#aaa",
    padding: 5
  }
});

export default NotificationStyle;
