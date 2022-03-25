import { DashBoardPage } from "../pageobjects/dash-board.po";
import { HeroesPage } from "../pageobjects/heroes.po";

const dashBoardPage = new DashBoardPage();
const heroPage = new HeroesPage();

beforeAll(async () => {
    await dashBoardPage.gotoUrl("http://localhost:4200/");
});

describe('Test Heroes page', () => {

    it('Should be possible to goto Heroes page', async () => {
        await dashBoardPage.clickHeroesButton();
        await dashBoardPage.waitForUrlContaining("heroes", 1000);
        await expect(heroPage.addHeroButton()).toBeExisting();
        await new Promise(resolve => setTimeout(resolve, 5000));
    });


});