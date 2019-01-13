
# react-native-ss-react-native-firebase-notifications

## Getting started

`$ npm install react-native-ss-react-native-firebase-notifications --save`

### Mostly automatic installation

`$ react-native link react-native-ss-react-native-firebase-notifications`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ss-react-native-firebase-notifications` and add `RNSsReactNativeFirebaseNotifications.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSsReactNativeFirebaseNotifications.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSsReactNativeFirebaseNotificationsPackage;` to the imports at the top of the file
  - Add `new RNSsReactNativeFirebaseNotificationsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ss-react-native-firebase-notifications'
  	project(':react-native-ss-react-native-firebase-notifications').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ss-react-native-firebase-notifications/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ss-react-native-firebase-notifications')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSsReactNativeFirebaseNotifications.sln` in `node_modules/react-native-ss-react-native-firebase-notifications/windows/RNSsReactNativeFirebaseNotifications.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Ss.React.Native.Firebase.Notifications.RNSsReactNativeFirebaseNotifications;` to the usings at the top of the file
  - Add `new RNSsReactNativeFirebaseNotificationsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSsReactNativeFirebaseNotifications from 'react-native-ss-react-native-firebase-notifications';

// TODO: What to do with the module?
RNSsReactNativeFirebaseNotifications;
```
  