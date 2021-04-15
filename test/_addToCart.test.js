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

  it("[Positive Test] Add to cart", () => {
  	const store = new bookStore(booksDB, false);

    const items = [0, 1, 1, 1, 0, 2, 0];
    let total = 0;

    items.forEach((bookId) => {
      store.addToCart(bookId);
      total += booksDB[bookId].price;
    });

    assert.strictEqual(store.totalPrice, total);
  });

  it("[Positive Test] Empty cart", () => {
  	const store = new bookStore(booksDB, false);

    assert.strictEqual(store.totalPrice, 0);
  });

  it("[Positive Test] 1 Free book => 3 General books", () => {
  	const store = new bookStore(booksDB, false);

    const items = [0, 0, 0];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    store.applyDiscountGetPercentage();

    assert.strictEqual(store.freeHalloweenBook, 1);
  });

  it("[Positive Test] 1 Free book => 6 Second Hand books", () => {
  	const store = new bookStore(booksDB, false);

    const items = [1, 1, 1, 1, 1, 1];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    store.applyDiscountGetPercentage();

    assert.strictEqual(store.freeHalloweenBook, 1);
  });

  it("[Positive Test] 0 Free book => 1 General book", () => {
    const store = new bookStore(booksDB, false);

    const items = [0];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    store.applyDiscountGetPercentage();

    assert.strictEqual(store.freeHalloweenBook, 0);
  });

  it("[Positive Test] 1 Free book => 3 General books and 6 Second hand book", () => {
    const store = new bookStore(booksDB, false);

    const items = [0, 0, 0, 1, 1, 1, 1, 1, 1];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    store.applyDiscountGetPercentage();

    assert.strictEqual(store.freeHalloweenBook, 1);
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

  it("[Negative Test] Book id should be less than 0", () => {
    try {
      store.addToCart(-1);
    } catch (err) {
      return;
    }

    assert.fail("Book id should be less than 0");
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
