# Running Appium Tests with WebDriverIO and TypeScript

This project is configured for mobile app testing using Appium, WebDriverIO (WDIO) with TypeScript, and includes Allure for generating test reports. Below are the steps to get started with running your tests.

## Prerequisites

Ensure you have Node.js and npm installed on your system. The project is set up to use ES6 modules, as indicated by `"type": "module"` in `package.json`.

## Installation

Clone the project and install the dependencies by running:

```bash
npm install
```

This command installs all necessary development dependencies as listed in `package.json`, including but not limited to:

- `@wdio/cli` and related WDIO packages for running tests with WebDriverIO.
- `appium` for mobile application testing.
- `@wdio/allure-reporter` for generating test reports using Allure.
- `dotenv` for loading environment variables from a `.env` file.
- TypeScript and `ts-node` for writing and executing tests in TypeScript.

## Configuration

The project is already configured for running tests and generating reports. Key configurations are as follows:

- **WDIO Configuration:** Test configurations are specified in `wdio.conf.ts`. This includes settings for the Appium service, test framework (Mocha), and reporters (Spec and Allure).

- **Allure Reports:** Two scripts are provided for generating Allure reports for iOS and Android separately:
  - `test:report_ios` and `test:report_android` for generating reports.
  - `test:report_ios:open` and `test:report_android:open` for generating and opening the reports, respectively.

- **Environment Variables:** Use a `.env` file to specify device names and OS versions, which can be accessed in test scripts using the `dotenv` package.

## Running Tests

To run your Appium tests with WebDriverIO, execute the following command:
- **For Android:**
```bash
npm run test:android
```
- **For iOS:**
```bash
npm run test:iphone
```

## Generating and Viewing Reports

After running tests, generate and view the Allure reports using the provided scripts:

- **For iOS:**
  - Generate report: `npm run test:report_ios`
  - Open report: `npm run test:report_ios:open`

- **For Android:**
  - Generate report: `npm run test:report_android`
  - Open report: `npm run test:report_android:open`

## Troubleshooting

- Ensure the Appium server is running and accessible.
- Check that your device or emulator is correctly set up and connected.
- Verify that all necessary environment variables are correctly defined in your `.env` file.

## Further Resources

- [Appium Documentation](http://appium.io/docs/en/about-appium/intro/)
- [WebDriverIO Documentation](https://webdriver.io/docs/gettingstarted)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Allure Framework](https://docs.qameta.io/allure/)

---
