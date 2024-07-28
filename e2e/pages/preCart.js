const { expect } = require('@playwright/test');

exports.PreCartPage = class PreCartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //this.buttonGoToCart = page.locator('span', {hasText: 'IR PARA O CARRINHO' });
    this.buttonGoToCart = page.locator('span', { hasText: 'IR PARA O CARRINHO' })

  }

  async goToCart() {
    await this.buttonGoToCart.click();
  }

}