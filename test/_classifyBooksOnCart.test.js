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
 | classifyBooksOnCart
 |----------------------------------------------------------------------
 */
describe("Bookstore::classifyBooksOnCart", () => {
  it("[Positive Test] Get counts of the books by category", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const items = [0, 1, 2];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    const result = {
      general: 1,
      secondHand: 1,
      halloween: 1,
    };

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });

  it("[Positive Test] Empty cart state", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const result = {
      general: 0,
      secondHand: 0,
      halloween: 0,
    };

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });

  // Discount Before :=> 3 General books = 3 General books
  it("[Positive Test] #1 Get counts of the books by category before Discount", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const items = [0, 0, 0];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    const result = {
      general: 3,
      secondHand: 0,
      halloween: 0,
    };

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });

  // Discount After :=> 3 General books = 3 General books + 1 Halloween
  it("[Positive Test] #2 Get counts of the books by category after Discount", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const items = [0, 0, 0];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    const result = {
      general: 3,
      secondHand: 0,
      halloween: 1,
    };

    // apply discount root func
    store.applyDiscountGetPercentage();

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });

  // Discount After :=> 6 Second hand books = 6 General books
  it("[Positive Test] #3 Get counts of the books by category before Discount", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const items = [1, 1, 1, 1, 1, 1];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    const result = {
      general: 0,
      secondHand: 6,
      halloween: 0,
    };

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });

  // Discount After :=> 6 Second hand + 3 General books = 3 General books + 6 General books + 1 Halloween
  it("[Positive Test] #4 Get counts of the books by category after Discount", () => {
    const booksDB = [
      { category: "General", price: 10 },
      { category: "Second Hand", price: 5 },
      { category: "Halloween", price: 7.5 },
    ];

    const store = new bookStore(booksDB, false);
    const items = [1, 1, 1, 1, 1, 1, 0, 0, 0];

    items.forEach((bookId) => {
      store.addToCart(bookId);
    });

    const result = {
      general: 3,
      secondHand: 6,
      halloween: 1,
    };

    // apply discount root func
    store.applyDiscountGetPercentage();

    assert.deepStrictEqual(store.classifyBooksOnCart(), result);
  });
});
