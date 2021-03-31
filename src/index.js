/**
 * HalloweenCampaign
 * by Hello World Bookstore
 * 
 * @version 0.1.0
 */
class HalloweenCampaign
{   
    /**
     * Constructor
     * @param {*} isUserVIP 
     */
    constructor(books, isUserVIP) 
    {
        this.books = books;
        this.cart  = [];
        this.isUserVIP  = isUserVIP;
        this.totalPrice = 0;
        this.freeHalloweenBook = 0;
    }

    /**
     * Add book to cart
     * @param {*} id 
     * 
     * @returns void
     */
    addToCart(id)
    {        
        this.totalPrice += this.books[id].price;
        return (this.cart).push(this.books[id]);
    }

    /**
     * Calculates Discounted Price
     * 
     * @returns discounted price
     */
    getDiscountedPrice()
    {
        const percentage = this.getPercentage();

        return this.totalPrice - ((this.totalPrice * percentage)/100);
    }

    /**
     * Classify books on Cart
     * @returns categories and its count
     */
    classifyBooksOnCart()
    {
        let general = 0;
        let secondHand = 0;
        let halloween  = 0;

        for(let id=0; id < (this.cart).length; id++)
        {
            if(this.cart[id].category === 'General') {
                general += 1;
            }

            if(this.cart[id].category === 'Second Hand') {
                secondHand += 1;
            }

            if(this.cart[id].category === 'Halloween') {
                halloween += 1;
            }
        }

        return {
            general,
            secondHand,
            halloween
        }
    }

    /**
     * Calculates Percentage
     * 
     * @returns percentage
     */
    getPercentage()
    {
        let percentage = 0;
        const totalPrice = this.totalPrice;

        const booksCategories = this.classifyBooksOnCart();
        let nHalloween  = booksCategories.halloween;
        let nGeneral    = booksCategories.general;
        let nSecondHand = booksCategories.secondHand;

        // Generally, customers get a 10% discount if they make a 
        // purchase of € 25 or more. However, customers must 
        // purchase at least 1 Halloween-themed book to receive this discount.
        if(totalPrice >= 25 &&
            totalPrice < 45 && 
            nHalloween > 0 + this.freeHalloweenBook) 
        {
            percentage = 10;
        }
        
        // a 15% discount if they make a purchase of  € 45 or more. However, 
        // customers must purchase at least 1 Halloween-themed
        // book to receive this discount.
        if(totalPrice >= 45 && 
            totalPrice < 75 && 
            nHalloween > 0 + this.freeHalloweenBook)
        {
            percentage = 15;
        }

        // 20% discount if they make a purchase of € 75 or
        // more. However, customers must purchase at least 1 Halloween-themed
        // book to receive this discount.
        if(totalPrice >= 75 
            && nHalloween > 0 + this.freeHalloweenBook)
        {
            percentage = 20;
        }

        // If a customer buys 3 or more books in a general category, 
        // 1 Halloween book is free. (This gift book is not considered 
        // for a general discount)

        // If a customer buys 6 or more second-hand books, 1 Halloween 
        // book is free. (This gift book is not considered for a
        // general discount)
        if((nGeneral >= 3 && this.freeHalloweenBook < 1) || 
         (nSecondHand >= 6 && this.freeHalloweenBook < 1)) 
        {
            this.freeHalloweenBook += 1;
            this.addToCart(2);
            this.totalPrice -= this.books[2].price;
        }

        // According to the general rules, each VIP customer receives a 
        // 2% discount on each book when they purchase books in a 
        // general category.
        if(this.isUserVIP) {
            percentage = percentage + 2*nGeneral;
        }

        // The percentage of the total discount cannot exceed 25%.
        if(percentage >= 25) percentage = 25;

        return percentage;
    }
}

module.exports = HalloweenCampaign;