export default class AppScreen {
  getElementByResourceId(resourceId: string) {
    return $(`android=new UiSelector().resourceId("${resourceId}")`);
  }
  getElementsByResourceId(resourceId: string) {
    return $$(`android=new UiSelector().resourceId("${resourceId}")`);
  }
  get allowNotificationButton() {
    return this.getElementByResourceId("com.android.permissioncontroller:id/permission_allow_button");
  }
  get allowCookies() {
    return this.getElementByResourceId("eu.livesport.FlashScore_com_plus:id/btn_accept_cookies");
  }

  get skipButton() {
    return this.getElementByResourceId("eu.livesport.FlashScore_com_plus:id/btn_skip");
  }

  async allowNotifications() {
    await this.allowNotificationButton.click();
  }

  async getToastMessage(): Promise<string> {
    const element = driver.isAndroid
      ? $('//*[@class="android.widget.Toast"]')
      : $('//XCUIElementTypeTextField') // need check correct path for iOS device
    return element.getText();
  }

  // Method for access to the Homescreen app, run in Before hook
  async accessHomeScreen() {
    await this.allowCookies.click();
    const textFind = "Skip";
    const elementByText = await $(`//*[contains(@text, "${textFind}")]`);
    await elementByText.click();
    await this.skipButton.click();
  }
}
