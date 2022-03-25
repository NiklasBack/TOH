import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
 export class HeroesPage extends Page {
    get addHeroButton() { return (async (): Promise<WebdriverIO.Element> => (await $('[data-testhooks="addHeroButton"]'))) }
}