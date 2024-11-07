class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItemName = page.locator('.cart_item .inventory_item_name').first();
      this.cartItemPrice = page.locator('.cart_item .inventory_item_price').first();
    }
  
    async getCartProductDetails() {
      const name = await this.cartItemName.textContent();
      const price = await this.cartItemPrice.textContent();
      return { name, price };
    }
  }
  
  module.exports = CartPage;
  