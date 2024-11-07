class ProductPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = page.locator('.inventory_item').first();
      this.addToCartButton = this.firstProduct.locator('text=Add to cart');
      this.cartLink = page.locator('.shopping_cart_link');
    }
  
    async getFirstProductDetails() {
      const name = await this.firstProduct.locator('.inventory_item_name').textContent();
      const price = await this.firstProduct.locator('.inventory_item_price').textContent();
      return { name, price };
    }
  
    async addToCart() {
      await this.addToCartButton.click();
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  }
  
  module.exports = ProductPage;
  