/**
 * HalloweenCampaign
 * by Hello World Bookstore
 * 
 * @author Emin Muhammadi
 * @version 0.1.0
 */
class HalloweenCampaign
{   
    /**
     * Constructor
     * @param {*} books 
     * @param {*} userIsVIP 
     */
    constructor(books, userIsVIP) 
    {
        this.books = books;
        this.cart  = [];
        this.userIsVIP = userIsVIP;
    }

    /**
     * Add item.id to cart
     * @param {*} id 
     * 
     * @returns void
     */
    addToCart(id)
    {
        return (this.cart).push(this.books[id]);
    }


    /**
     * Calculates Total Price
     * 
     * @returns total price
     */
    totalPrice()
    {
        let totalPrice = 0;

        for(let i=0; i < (this.books).length; i++) {
            totalPrice += this.books[i].price
        }

        return this.applyDiscount(totalPrice);
    }


    /**
     * Calculates Discount
     * @param {*} totalPrice 
     * 
     * @returns discounted price
     */
    applyDiscount(totalPrice)
    {
        return totalPrice;
    }

}

module.exports = HalloweenCampaign;