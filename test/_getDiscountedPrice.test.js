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
 | getDiscountedPrice
 |----------------------------------------------------------------------
 */
describe("Bookstore::getDiscountedPrice", () => {
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
      let total = 0;

      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] Add to cart 1 General books as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*2)/100));
    });

    it("[Positive Test] Add to cart 3 General books as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0, 0, 0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*6)/100));
    });

    it("[Positive Test] Add to cart 3 General books and 1 Halloween as a Vip User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, true);
      const items = [0, 0, 0, 2];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*16)/100));
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

      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*25)/100));
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
      let total = 0;
      
      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] 2 General books", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] 5 Second Hand books", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] 3 General books", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] 6 Second Hand books", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total);
    });

    it("[Positive Test] Add to cart 3 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*10)/100));
    });

    it("[Positive Test] Add to cart 4 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2, 0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*15)/100));
    });

    it("[Positive Test] Add to cart 7 General books and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [0, 0, 0, 2, 0, 0, 0, 0];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*20)/100));
    });

    it("[Positive Test] Add to cart 6 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 2];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*10)/100));
    });

    it("[Positive Test] Add to cart 8 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 1, 1, 2];
      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*15)/100));
    });

    it("[Positive Test] Add to cart 14 Second Hand and 1 Halloween as a Normal User", () => {
      const booksDB = [
        { category: "General", price: 10 },
        { category: "Second Hand", price: 5 },
        { category: "Halloween", price: 7.5 },
      ];

      const store = new bookStore(booksDB, false);
      const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

      let total = 0;

      items.forEach((bookId) => {
        store.addToCart(bookId);
        total += booksDB[bookId].price;
      });

      assert.strictEqual(store.getDiscountedPrice(), total - ((total*20)/100));
    });
  });
});
