import Firebase from "react-native-firebase";
const Crashlytics = Firebase.fabric.crashlytics();
const Crash = Firebase.crash();
export class CrashlyticsLogger {
  static reportLog = msg => {
    Crashlytics.log(msg);
  };

  static reportError = (errorCode, errorDesc) => {
    Crashlytics.recordError(errorCode, errorDesc);
  };

  static enableCrash = () => {
    Crash.setCrashCollectionEnabled(true);
  };

  static forceCrash = () => {
    Crash.log("Test Logs");
    Crash.report("Test Report");
    Crashlytics.crash();
    Crashlytics.recordError(0, "manually forcing the app to crash");
  };
}
