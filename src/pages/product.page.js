const { $ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage {
  get selectFilter() {
    return $("[data-test='product_sort_container']");
  }
  get tittle() {
    return $(
      "//body/div[@id='root']/div[@id='page_wrapper']/div[@id='contents_wrapper']/div[@id='inventory_container']/div/div[@id='inventory_container']/div[@class='inventory_list']/div[1]//div[normalize-space()='Sauce Labs Onesie']"
    );
  }
  get titleDetail() {
    return $(".inventory_details_name.large_size");
  }
  get errorMessage() {
    return $("[data-test='error']");
  }
}

module.exports = new ProductPage();
