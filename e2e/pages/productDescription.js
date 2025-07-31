const { expect } = require('@playwright/test');

exports.ProductDescriptionPage = class ProductDescriptionPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    
    this.page = page;
    this.buttonBuy = page.getByRole('button', { name: 'COMPRAR AGORA' });
    
  }

  async buy() {
    await this.buttonBuy.click();
  }

}