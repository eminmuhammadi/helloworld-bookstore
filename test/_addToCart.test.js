/**
 *  Helpers
 */
const assert = require("assert");

/**
 * Bookstore Lib
 */
const bookStore = require("../src/index");

/*
|---------------------------------------------------------------------- 
| addToCart
|----------------------------------------------------------------------
*/
describe("Bookstore::addToCart", () => {
  const booksDB = [
    { category: "General", price: 10 },
    { category: "Second Hand", price: 5 },
    { category: "Halloween", price: 7.5 },
  ];

  const store = new bookStore(booksDB, false);

  it("[Positive Test] Add to cart", () => {
    const items = [0, 1, 1, 1, 0, 2, 0];
    let total = 0;

    items.forEach((bookId) => {
      store.addToCart(bookId);
      total += booksDB[bookId].price;
    });

    assert.strictEqual(store.totalPrice, total);
  });

  it("[Negative Test] Book id should be in range", () => {
    try {
      store.addToCart(100);
    } catch (err) {
      return;
    }

    assert.fail("Book id should be in range");
  });

  it("[Negative Test] Book id should be non-empty", () => {
    try {
      store.addToCart();
    } catch (err) {
      return;
    }

    assert.fail("Book id should be non-empty");
  });

  it("[Negative Test] Book id should be not null", () => {
    try {
      store.addToCart(null);
    } catch (err) {
      return;
    }

    assert.fail("Book id should be not null");
  });

  it("[Negative Test] Book id should be positive integer", () => {
    try {
      store.addToCart(-1);
    } catch (err) {
      return;
    }

    assert.fail("Book id should be positive integer");
  });

  it("[Negative Test] Book id should be integer", () => {
    try {
      store.addToCart("Hello World");
    } catch (err) {
      return;
    }

    assert.fail("Book id should be integer");
  });
});
