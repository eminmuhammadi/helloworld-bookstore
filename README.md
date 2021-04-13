# Hello World Bookstore
The Hello World bookstore has set out to change their sales strategies to attract more customers before Halloween.

## Demo
- [GUI](https://eminmuhammadi.github.io/helloworld-bookstore/build/)

- [Coverage Report](https://eminmuhammadi.github.io/helloworld-bookstore/build/report/)

- [CI testing](https://github.com/eminmuhammadi/helloworld-bookstore/actions/workflows/startTest.yml)

- [Docs](https://eminmuhammadi.github.io/helloworld-bookstore/docs/HalloweenCampaign.html)

## Pre-defined Bug
``src/index.js`` line ``143``

```js
...
{
    this.freeHalloweenBook += 1;

    /*  ===========
        Trivial BUG
        ===========
        Solved: 
        (this.cart).push({
            ...this.books[2],
            price: 0
        });
        ===========
    */
    this.addToCart(2);
}
...
```

## Building steps

```
npm install
```

```
npm run build
```

```
npm run test
```

## Description of contents:

- Graphic User Interface (Builded) locates in ```build/index.html```
- Coverage report locates in ```build/report/index.html```
- Unit tests locates in ```test/```
- Library locates in ```src/```
- GUI source files locates in ```gui/```

## Application
The Application should be located in the ```build``` folder. If this folder does not
exists please, run ```npm run build```.

### Spec 
```
The Hello World bookstore has set out to change their sales strategies to 
attract more customers before Halloween.
 
1) On the eve of the campaign, the bookstore has books in 3 categories: 
books in a general category, second-hand books and Halloween-themed books.
 
2) Books in a general category are € 10, second-hand books are € 5 
and Halloween-themed books are € 7.5. These books have fixed prices.
 
3) Generally, customers get a 10% discount if they make a 
purchase of € 25 or more, a 15% discount if they make a purchase of € 45 
or more, and a 20% discount if they make a purchase of € 75 or more. 
However, customers must purchase at least 1 Halloween-themed book
to receive this discount.
 
4) If a customer buys 3 or more books in a general category, 1 Halloween book is free. 
(This gift book is not considered for a general discount)
 
5) If a customer buys 6 or more second-hand books, 1 Halloween book is free. 
(This gift book is not considered for a general discount)
 
6) 4. and 5. are invalid at the same time. However, one of them must be applied.
 
7) According to the general rules, each VIP customer receives a 
2% discount on each book when they purchase books in a general category.
 
8) The percentage of the total discount cannot exceed 25%.
```
