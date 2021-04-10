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
| Constructor
|----------------------------------------------------------------------
*/
describe("Bookstore::Constructor", () => {

  it("[Negative Test] Books DB should be include array where length > 0", () => {
    try {
      new bookStore([], false);
    } catch (err) {
      return;
    }

    assert.fail("Books DB should be include array where length > 0");
  });

  /*
  |---------------------------------------------------------------------- 
  | Constructor => books
  |----------------------------------------------------------------------
  */
  describe("Books DB", () => {
    it("[Negative Test] Books DB should be include category", () => {
      try {
        new bookStore([{ price: 10 }], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include category");
    });

    it("[Negative Test] Books DB should be include non-empty price", () => {
      try {
        new bookStore([{ category: null }], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include non-empty price");
    });

    it("[Negative Test] Books DB should be defined", () => {
      try {
        new bookStore(null, false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be defined");
    });

    it("[Negative Test] Category should be string #1", () => {
      try {
        new bookStore([[{ category: false, price: 0 }]], false);
      } catch (err) {
        return;
      }

      assert.fail("Category should be string #1");
    });
    
    it("[Negative Test] Price should be a number #2", () => {
      try {
        new bookStore([{category: 12312312312, price: 0}], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be a number #2");
    });

    /*
    |---------------------------------------------------------------------- 
    | Constructor => books => price
    |----------------------------------------------------------------------
    */
    it("[Negative Test] Books DB should be include price", () => {
      try {
        new bookStore([{ category: "General" }], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include price");
    });

    it("[Negative Test] Books DB should be include non-empty category", () => {
      try {
        new bookStore([{ price: null }], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include non-empty category");
    });

    it("[Negative Test] Price should be integer", () => {
      try {
        new bookStore([[{ category: "General", price: "PriceString" }]], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be integer");
    });

    it("[Negative Test] Price should be positive integer", () => {
      try {
        new bookStore([[{ category: "General", price: -7 }]], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be positive integer");
    });

    /*
    |------------------------------------------------------------------
    | Constructor => books => price, category
    |------------------------------------------------------------------
    */
    it("[Negative Test] Books and price should be included", () => {
      try {
        new bookStore();
      } catch (err) {
        return;
      }

      assert.fail("Books and price should be included");
    });

    it("[Negative Test] Books DB should be include both category and price", () => {
      try {
        new bookStore([{}], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include both category and price");
    });

    it("[Negative Test] Price should be a number", () => {
      try {
        new bookStore([{category: "General", price: 'MyPrice'}], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be a number");
    });
  });

  /*
  |---------------------------------------------------------------------- 
  | Constructor => isUserVIP
  |----------------------------------------------------------------------
  */
  describe("isUserVIP", () => {
    it("[Negative Test] Books DB should be included", () => {
      try {
        new bookStore([{ category: "General", price: 0 }]);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be included");
    });

    it("[Negative Test] Books DB should be non-empty", () => {
      try {
        new bookStore([{ category: "General", price: 0 }], null);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be non-empty");
    });

    it("[Negative Test] isUserVIP should be boolean", () => {
      try {
        new bookStore([{ category: "General", price: 0 }], "boolean");
      } catch (err) {
        return;
      }

      assert.fail("isUserVIP should be boolean");
    });
  });

  /*
  |---------------------------------------------------------------------- 
  | Constructor => General
  |----------------------------------------------------------------------
  */
  describe("Init", () => {
    it("[Positive Test] Success", () => {
      new bookStore([{ category: "General", price: 0 }], false);
    });
  });
});
