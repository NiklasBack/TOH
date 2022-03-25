/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    public async waitForUrlContaining(urlPart: string, timeOut: number) {
        console.log("Waiting for url " + urlPart);
        await browser.waitUntil(async () =>
            (await browser.getUrl()).includes(urlPart), {
            timeout: timeOut,
            timeoutMsg: 'waitForUrlContaining cant find <' + urlPart + '> after ' + timeOut + ' ms'
        });
    }

    public async waitForPageFinishLoading(timeOut:number) {
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: timeOut, 
                timeoutMsg: 'Page hasnt finished loading in ' + timeOut + "ms"
            }
        );

    }

    public async getCurrentUrl() {
        return browser.getUrl();
    }

    async gotoUrl(url: string){
        await browser.url(url);
    }

}
