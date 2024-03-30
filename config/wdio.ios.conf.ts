import { config as baseConfig } from './wdio.conf.ts';
import { join } from 'node:path';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results-ios',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: '',
        'appium:autoGrantPermissions': true,
        'appium:platformVersion': process.env.IOS_VERSION,
        //'appium:deviceName': process.env.IOS_DEVICE,
        platformName: 'iOS',
        'appium:app': join(
            process.cwd(),
            'test','data',
            'flashscore-com.zip',
        ),       
        'appium:udid': 'ed38d0f8e36c17b4274b06030400247a4bec9684'
    }],
}
