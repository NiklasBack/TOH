import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class DashBoardPage extends Page {
    
    get dashBoardButton() { return (async (): Promise<WebdriverIO.Element> => (await $('[data-testhooks="dashBoardButton"]'))) }
    get heroesButton() { return (async (): Promise<WebdriverIO.Element> => (await $('[data-testhooks="heroesButton"]'))) }
    get heroesSearchBox() { return (async (): Promise<WebdriverIO.Element> => (await $('[data-testhooks="heroSearchBox"]'))) }
    get heroesSearchResultList() { return (async (): Promise<WebdriverIO.Element> => (await $('[data-testhooks="heroSearchResult"]'))) }


    async clickHeroesButton() {
        await (await this.heroesButton()).click();
    }
}