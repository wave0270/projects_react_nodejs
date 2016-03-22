/* current status:

*/

Inherit from Cordova

http://ionicframework.com/getting-started/

//install ionic
npm install -g cordova ionic

//new a default project:(blank / tabs / sidemenu)
ionic start myApp blank  

//run in browser
ionic serve

//add platform
ionic platform add android

//define android variable
export ANDROID_HOME="/home/binh.nguyen/Android/Sdk"

//build android, file .sdk will be create at /platforms/android/build/outputs/apk/android-debug.apk
ionic build android
