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
 | applyDiscountGetPercentage 
 |----------------------------------------------------------------------
 */
describe("Bookstore::applyDiscountGetPercentage", () => {
  /*
    |-------------------------------------------------------------------
    | VIP user
    |-------------------------------------------------------------------
    */
  describe("VIP user", () => {
    it("[Positive Test] Empty cart state", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);

      assert.strictEqual(store.applyDiscountGetPercentage(), 0);
    });

    it("[Positive Test] Add to cart 1 General books as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 2);
    });

    it("[Positive Test] Add to cart 3 General books as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0, 0, 0];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 6);
    });

    it("[Positive Test] Add to cart 3 General books and 1 Halloween as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0, 0, 0, 2];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 16);
    });

    it("[Positive Test] Add to cart 100 General books as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      let items = [];

      for (let i = 0; i <= 99; i++) {
        items.push(0);
      }

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 25);
    });
  });

  /*
    |-------------------------------------------------------------------
    | Normal User
    |-------------------------------------------------------------------
    */
  describe("Normal user", () => {
    it("[Positive Test] Empty cart state", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);

      assert.strictEqual(store.applyDiscountGetPercentage(), 0);
    });

    it("[Positive Test] 3 General books", () => {
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

      assert.strictEqual(store.applyDiscountGetPercentage(), 0);
    });

    it("[Positive Test] Add to cart 3 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 10);
    });

    it("[Positive Test] Add to cart 4 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2, 0];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 15);
    });

    it("[Positive Test] Add to cart 7 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2, 0, 0, 0, 0];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 20);
    });

    it("[Positive Test] Add to cart 6 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 2];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 10);
    });

    it("[Positive Test] Add to cart 8 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 1, 1, 2];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 15);
    });

    it("[Positive Test] Add to cart 14 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

      items.forEach((bookId) => {
        store.addToCart(bookId);
      });

      assert.strictEqual(store.applyDiscountGetPercentage(), 20);
    });
  });
});
