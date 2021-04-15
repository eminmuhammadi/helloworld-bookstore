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
        new bookStore([{ category: "General" }], false);
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

    it("[Negative Test] Category should be string", () => {
      try {
        new bookStore([{category: false, price: 1}], false);
      } catch (err) {
        return;
      }

      assert.fail("Category should be string");
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

    it("[Negative Test] Price should be number", () => {
      try {
        new bookStore([{ category: "General", price: "PriceString" }], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be number");
    });

    it("[Negative Test] Price should be a non-negative number", () => {
      try {
        new bookStore([{category: "General", price: -10}], false);
      } catch (err) {
        return;
      }

      assert.fail("Price should be a non-negative number");
    });

    /*
    |------------------------------------------------------------------
    | Constructor => books => price, category
    |------------------------------------------------------------------
    */
    it("[Negative Test] Books, price and isUserVIP should be included", () => {
      try {
        new bookStore();
      } catch (err) {
        return;
      }

      assert.fail("Books, price and isUserVIP should be included");
    });

    it("[Negative Test] Books DB should be include both category and price", () => {
      try {
        new bookStore([{}], false);
      } catch (err) {
        return;
      }

      assert.fail("Books DB should be include both category and price");
    });
  });

  /*
  |---------------------------------------------------------------------- 
  | Constructor => isUserVIP
  |----------------------------------------------------------------------
  */
  describe("isUserVIP", () => {
    it("[Negative Test] isUserVIP should be included", () => {
      try {
        new bookStore([{ category: "General", price: 0 }]);
      } catch (err) {
        return;
      }

      assert.fail("isUserVIP should be included");
    });

    it("[Negative Test] isUserVIP should be non-empty", () => {
      try {
        new bookStore([{ category: "General", price: 0 }], null);
      } catch (err) {
        return;
      }

      assert.fail("isUserVIP should be non-empty");
    });

    it("[Negative Test] isUserVIP should be boolean not string", () => {
      try {
        new bookStore([{ category: "General", price: 0 }], "boolean");
      } catch (err) {
        return;
      }

      assert.fail("isUserVIP should be boolean not string");
    });
  });

  /*
  |---------------------------------------------------------------------- 
  | Constructor => General
  |----------------------------------------------------------------------
  */
  describe("Init", () => {
    it("[Positive Test] Success", () => {
      new bookStore([{ category: "General", price: 7.5 }], false);
    });

    it("[Positive Test] Success", () => {
      new bookStore([{ category: "General", price: 7.5 }], true);
    });
  });
});
