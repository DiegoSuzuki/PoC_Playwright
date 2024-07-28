const { expect } = require('@playwright/test');

exports.ProductDescriptionPage = class ProductDescriptionPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
   // this.buttonBuy = page.locator('button', {hasText: 'COMPRAR' });
    this.buttonBuy = page.locator('#blocoValores').getByRole('button', { name: 'COMPRAR' });
    
  }

  async buy() {
    await this.buttonBuy.click();
  }

}