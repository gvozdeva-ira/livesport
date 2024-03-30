import { expect } from '@wdio/globals'
import HomeScreen from '../screenobjects/home.ts'

describe('Application simple tests', () => {

    before(async function() {
        // Accept cookies, click on continue and etc
        await HomeScreen.accessHomeScreen();
    })
    it('should do search by team and add this team to fav, check fav and remove team from fav', async () => {
        const TEAM = 'Arsenal';
        await HomeScreen.searchButton.waitForDisplayed();
        await HomeScreen.searchButton.click();
        await HomeScreen.typeInputField(await HomeScreen.searchInput, TEAM);
        const results = await HomeScreen.searchResults;
        // Check first resalt is Team name
        expect( await results[0].getText()).toEqual(TEAM);
        // Add to fav
        await HomeScreen.addToFavIcons[0].click();

        //check toast message
        expect(await HomeScreen.getToastMessage()).toEqual('Added team to Favorites.');
        
        //Go back to home screen
        await HomeScreen.backButton.click();
        
        //Click on Fav in the bottom
        await HomeScreen.clickOnFavBottomMenu();
        await HomeScreen.skipButton.click();

        // Check team is in Fav
        (await HomeScreen.favIcon).click();
        expect( await results[0].getText()).toEqual(TEAM);
        
        // Remove team from fav
        await HomeScreen.addToFavIcons[0].click();
        await HomeScreen.removeFromFavAgree.click();
        expect(await HomeScreen.getToastMessage()).toEqual('Removed team from Favorites.');
    })
})

