<br/>
<div align="center">
<a href="https://github.com/darksky6666/group-wallet">
<img style="border-radius:20%;" class="rounded-image" src="./assets/images/icon.png" alt="Logo" width="100" height="100">
</a>
<br/><br/>

![Platform - iOS](https://img.shields.io/badge/platform-iOS-blue.svg)
![Platform - Android](https://img.shields.io/badge/platform-android-red.svg)
![Platform - Web](https://img.shields.io/badge/platform-web-green.svg)

</div>
<br/>

## 💰 Group Wallet

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

Wallet for All
<br/>

## 📝 TODO

- [x] Setup Project
- [ ] Add Login

Please suggest any feature or report any bug!
<br/>

## 🚀 Dependencies

- **Nativewind:** TailwindCSS for React Native
- **Redux:** State Management
- **Firebase:** Database (Haven't decided yet)
<br/>

## 🏗️ Build

1. **Install NodeJS, Android SDK and JDK 21:** <br/>
   
   [NodeJS](https://nodejs.org) <br />
   [JDK](https://www.azul.com/downloads/?version=java-21-lts&os=windows&architecture=x86-64-bit&package=jdk#zulu) <br />
   [Android SDK](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&buildEnv=local)

2. **Navigate to project directory and install npm dependencies:**
   
   ```sh
    npm install
   ```

3. **Run prebuild and build project:**
   **Android Device(APK):**
   ```sh
   npx expo prebuild
   cd android
   ./gradlew assembleRelease
   ```
   **Or use Expo Run (All Device):**
   ```sh
   npm run web
   npm run android
   npm run ios
   ```