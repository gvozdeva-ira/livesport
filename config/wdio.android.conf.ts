import { join } from 'node:path';
import { config as baseConfig } from './wdio.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results-android',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:autoGrantPermissions': true,
        'appium:platformVersion': process.env.ANDROID_VERSION,
        //'appium:deviceName': process.env.ANDROID_DEVICE,
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(
            process.cwd(),
            'test','data',
            'flashscore-com.apk',
        ),
    }],
}
