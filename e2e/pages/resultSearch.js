const { expect } = require('@playwright/test');

exports.ResultSearchPage = class ResultSearchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //this.resultSearch = page.locator('#listing > article > section > div.sc-cwpsFg.eHWKRV > div > main');
    //this.resultSearch = page.locator('> main');
    this.resultSearch = page.locator('main');
  }

  async selectProduct(product) {
  //  await this.resultSearch.locator(`text=${product}`).first().click(); 
  //  await this.resultSearch.locator(`text=${product}`).first().click();
      await this.resultSearch.getByText(product, { exact: false })
      .first()
      .click();
  }

}