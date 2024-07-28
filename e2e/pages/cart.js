const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.quantityProduct = page.locator('div > input[value="1"]');
    //this.quantityProduct = page.locator('#sellersContainer > div > div > div > div.sc-kYHfwS.ikFqlA > div.sc-dUbtfd.sc-htJRVC.hzmIJD.dNJAjO > div > input');
  }

  async validateQuantityProduct() {
    await expect(this.quantityProduct).toBeVisible();
  }

}