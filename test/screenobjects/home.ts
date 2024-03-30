import { $ } from '@wdio/globals'
import AppScreen from './app.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
const APP_ID = 'eu.livesport.FlashScore_com_plus:id/';

class HomeScreen extends AppScreen {
    /*constructor() {
        super('id=home.profile');
      }*/
    /**
     * define selectors using getter methods
     */
    get searchButton() {
        return $(`id=${APP_ID}action_bar_item_3`);
    }

    get backButton() {
        return $(`id=${APP_ID}back_button`);
    }
    get searchInput(){
        return $(`id=${APP_ID}search_input`)
    }
    // get search Results
    get searchResults(){
        return this.getElementsByResourceId(`${APP_ID}participant_name`)
    }

    get addToFavIcons(){
        return this.getElementsByResourceId(`${APP_ID}my_teams_icon`)
    }
    get favIcon(){
        return $(`id=${APP_ID}action_bar_item_7`);
    }

    get removeFromFavAgree(){
        return $(`id=${APP_ID}positive_button`);
    }
    async clickOnFavBottomMenu(){
        const element = this.getElementByResourceId(`${APP_ID}bottom_nav_view`);
        const elementFav = driver.isAndroid
        ? element.$('//android.view.View[4]')
        : element.$('//XCUIElementTypeTextField');  // smth else
        await elementFav.click()
    }






    // //android.widget.Toast[@text="Added team to Favorites."]
    ////android.widget.Toast[@text="Added team to Favorites."]
        ////android.widget.Toast[@text="Removed team from Favorites."]

// eu.livesport.FlashScore_com_plus:id/back_button 
    async typeInputField(element: WebdriverIO.Element, value: string): Promise<void> {
        await element.setValue(value);
      }
}

export default new HomeScreen();
