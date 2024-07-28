const { test, expect } = require('@playwright/test');
const { KabumHomePage } = require('../pages/home');
const { ResultSearchPage } = require('../pages/resultSearch');
const { ProductDescriptionPage } = require('../pages/productDescription');
const { PreCartPage } = require('../pages/preCart');
const { CartPage } = require('../pages/cart');


test('Acessa a home e pesquisa um produto', async ({ page }) => {
  const KabumHome = new KabumHomePage(page);
  const ResultSearch = new ResultSearchPage(page);
  const ProductDescription = new ProductDescriptionPage(page);
  const PreCart = new PreCartPage(page);
  const Cart = new CartPage(page);


  await KabumHome.goTo();
  await KabumHome.acceptCookies();
  await KabumHome.searchProduct('teclado');
  await ResultSearch.selectProduct('teclado');
  await ProductDescription.buy();
  await PreCart.goToCart();
  await Cart.validateQuantityProduct();


//   await expect(playwrightDev.tocList).toHaveText([
//     'Installation',
//     'First test',
//     'Configuration file',
//     'Writing assertions',
//     'Using test fixtures',
//     'Using test hooks',
//     'Command line',
//     'Configure NPM scripts',
//     'Release notes'
//   ]);
});

// test('should show Page Object Model article', async ({ page }) => {
//   const playwrightDev = new PlaywrightDevPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.pageObjectModel();
//   await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
// });