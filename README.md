# Running Appium Tests with WebDriverIO and TypeScript

This README provides guidance on setting up and running mobile app tests using Appium, WebDriverIO (WDIO), and TypeScript. It includes steps for integrating Allure Reporter for test result visualization and managing environment variables through a `.env` file.

## Prerequisites

Ensure you have the following installed and configured:
- Node.js and npm
- Appium
- WebDriverIO CLI
- Java Development Kit (JDK) for Android testing
- Android SDK for Android testing or Xcode for iOS testing
- TypeScript
- An IDE or text editor of your choice

## Installation

1. **Node.js and npm**
   - Download from [nodejs.org](https://nodejs.org/) and install.

2. **Appium**
   - Install globally with npm: `npm install -g appium`.
   - Verify installation: `appium --version`.

3. **WebDriverIO CLI**
   - Install the WDIO CLI globally: `npm install -g @wdio/cli`.

4. **JDK and Android SDK / Xcode**
   - Install JDK for Android testing and configure `JAVA_HOME`.
   - Install Android Studio or Xcode for the respective platform SDKs.

5. **TypeScript**
   - Install TypeScript globally: `npm install -g typescript`.
   - Initialize a new TypeScript project: `tsc --init` in your project directory.

6. **Allure Report**
   - Install Allure command-line: `npm install -g allure-commandline`.

## Configuration

1. **Setup Your Project**
   - Initialize a new Node.js project: `npm init`.
   - Install WebDriverIO and Appium service: `npm install @wdio/cli wdio-appium-service`.
   - Set up WDIO: `wdio config` and follow the interactive setup wizard. Choose Appium in the services section and TypeScript for compilation.

2. **Configure TypeScript**
   - Modify `tsconfig.json` as necessary for your project, ensuring compatibility with WDIO and Appium.

3. **Environment Variables**
   - Create a `.env` file in your project root.
   - Add device and OS version variables:
     ```
     DEVICE_NAME=YourDeviceName
     OS_VERSION=YourOSVersion
     ```
   - Use `dotenv` package to load these in your test setup: `npm install dotenv`.

4. **Test Configuration**
   - In your WDIO config file, utilize the environment variables for device configuration.
   - For TypeScript, ensure your test files match the `specs` pattern in `wdio.conf.ts`.

5. **Allure Reporter**
   - Add Allure Reporter to your WDIO config:
     ```javascript
     reporters: [['allure', {outputDir: 'allure-results'}]],
     ```

## Running Tests

1. **Start Appium Server**
   - Run `appium` in a terminal.

2. **Run Tests with WDIO**
   - Execute tests: `npm run wdio.conf.ts`.

3. **Generate Allure Report**
   - Generate and open Allure report:
     ```
     npm run test:report_android:open
     ```

## Troubleshooting

Ensure all dependencies are correctly installed and environment variables are set. If encountering issues, verify the Appium server is running, and device connectivity is established.

## Further Resources

- [Appium Documentation](http://appium.io/docs/en/about-appium/intro/)
- [WebDriverIO Documentation](https://webdriver.io/docs/gettingstarted)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Allure Framework](https://docs.qameta.io/allure/)

---

Adapt and expand upon this README based on your project's specific setup, dependencies, and configurations. This template provides a solid foundation for teams looking to leverage Appium, WebDriverIO, TypeScript, and Allure in their mobile app testing processes.