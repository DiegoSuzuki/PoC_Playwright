const { expect } = require('@playwright/test');

exports.KabumHomePage = class KabumHomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator('input[data-testid="searchbar-search-input"]');
    this.buttonSearchBar = page.locator('button[data-testid="buttonBuscaKabum"]');
    this.buttonCookieConsent = page.locator('button', { hasText: 'Entendi'});

    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });
    this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });
    this.tocList = page.locator('article ul > li > a');
  }

  async goTo() {
    await this.page.goto('https://www.kabum.com.br/');
  }

  async acceptCookies() {
    if(this.buttonCookieConsent.isVisible){
      await this.buttonCookieConsent.click();
    }
  }

  async searchProduct(product) {
    await this.searchBar.fill(product);
    await this.buttonSearchBar.click();
  }

}