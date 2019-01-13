import React, { Component } from "react";
import { View, Text, FlatList, Image, Platform } from "react-native";
import { DefaultAppTheme } from "uRnFramework-basic-components";
import NotificationData from "./notificationData";
import NotificationStyle from "./notificationStyle";
import NotificationService from "./notificationService";
import { AppContext } from "uRnFramework-app-core";
import { DefaultAvatar } from "uRnFramework-basic-assets";
export class NotificationComponent extends Component {
  constructor(props) {
    super(props);
    let appContext = AppContext.getAppContext();
    let sessionData = JSON.parse(appContext.sessionData);
    this.state = { notificationCollection: [], userInfo: sessionData };
    this.notificationService = new NotificationService();
  }

  componentDidMount() {
    try {
      debugger;
      // this.setState({notificationCollection:NotificationData})
      this.notificationService
        .getNotificationList(this.state.userInfo.userId)
        .then(
          res => {
            if (res.status == 200) {
              this.setState({ notificationCollection: res.data.notifications });
            } else {
            }
          },
          err => {}
        );
    } catch (err) {
      console.log(err);
    }
  }
  renderNotifyList = item => {
    let addedDate = this.postedDate(new Date(item.addedDate));
    return (
      <View style={NotificationStyle.notificationWrapper}>
        <View style={NotificationStyle.serviceWrapper}>
          <Text style={NotificationStyle.textLabel} />
          <Text style={NotificationStyle.textLabel}>{addedDate}</Text>
        </View>
        <View style={NotificationStyle.imageParaWrapper}>
          {Platform.OS == "ios" ? (
            <Image
              source={DefaultAvatar}
              style={NotificationStyle.visitorImageiOS}
            />
          ) : (
            <Image
              source={DefaultAvatar}
              style={NotificationStyle.visitorImageAndroid}
            />
          )}
          <View style={NotificationStyle.messageWrapper}>
            <Text style={[NotificationStyle.messageTextLabels]}>
              {item.parameters.Event}
            </Text>
            <Text style={[NotificationStyle.notifyTextLabels]}>
              {item.message}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  renderNotications = () => {
    return (
      <FlatList
        data={this.state.notificationCollection}
        renderItem={({ item, index }) => this.renderNotifyList(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  postedDate = function(value) {
    var today = new Date();
    var mins;
    var d = today.getDate() - value.getDate();
    var m = today.getMonth() - value.getMonth();
    var y = today.getFullYear() - value.getFullYear();
    var h = today.getHours() - value.getHours();
    var mm = today.getMinutes() - value.getMinutes();
    if (mm < 0) {
      mins = mm + h * 60;
      if (mins > 59) {
        h = Math.floor(mins / 60);
        mins = 0;
      }
    } else if (h > 0) {
      mins = 0;
    } else {
      mins = mm;
    }
    var diff =
      d > 0
        ? d + " days ago"
        : mins > 0
          ? mins + " minutes ago"
          : h > 0
            ? h + " hours ago"
            : mins < 1
              ? "just now"
              : mins + " minutes ago";
    if (y > 0) {
      diff = "a while ago";
    } else if (m > 0) {
      diff = m + " months ago";
    }
    return diff;
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: DefaultAppTheme.whiteColor }}>
        {this.renderNotications()}
      </View>
    );
  }
}
