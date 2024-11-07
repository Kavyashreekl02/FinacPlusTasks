const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const ProductPage = require('../../pages/productPage');
const CartPage = require('../../pages/cartPage');
const { writeToFile } = require('../../utils/fileUtils');

test.describe('SauceDemo Add to Cart Test', () => {
  
  let loginPage, productPage, cartPage, page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); 
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
  });

  test.afterAll(async () => {
    await page.close(); 
  });

  test('Add to Cart Test for SauceDemo', async () => {
    try {
      
      await page.goto('https://www.saucedemo.com');

      await loginPage.login('standard_user', 'secret_sauce');

      await loginPage.verifyLoginSuccess();

      const { name: productName, price: productPrice } = await productPage.getFirstProductDetails();
      writeToFile('productDetails.txt', `Name: ${productName}\nPrice: ${productPrice}`);

      await productPage.addToCart();

      await productPage.goToCart();
      const { name: cartItemName, price: cartItemPrice } = await cartPage.getCartProductDetails();

      expect(cartItemName).toBe(productName);
      expect(cartItemPrice).toBe(productPrice);

      await page.click('#react-burger-menu-btn');
      await page.click('#logout_sidebar_link');
    } catch (error) {
      console.error('Test failed:', error);
      throw error; 
    }
  });
});
