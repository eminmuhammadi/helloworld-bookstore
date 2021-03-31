import React, { Component } from "react";
import BookStorePaymentService from "./../src/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserVIP: false,
      discountedPrice: 0,
      totalPrice: 0,
      getPercentage: 0,
      cart: [],
      books: [
        {
          category: "General",
          price: 10,
        },
        {
          category: "Second Hand",
          price: 5,
        },
        {
          category: "Halloween",
          price: 7.5,
        },
      ],
    };

    this.state.bookStore = new BookStorePaymentService(
      this.state.books,
      this.state.isUserVIP
    );
  }

  updateView() {
    this.setState({
      totalPrice: this.state.bookStore.totalPrice,
      discountedPrice: this.state.bookStore.getDiscountedPrice(),
      getPercentage: this.state.bookStore.getPercentage(),
      cart: this.state.bookStore.cart,
    });
  }

  render() {
    const {
      isUserVIP,
      bookStore,
      totalPrice,
      discountedPrice,
      getPercentage,
      cart,
    } = this.state;
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <span>
              <input
                type="checkbox"
                onChange={(e) => {
                  this.state.isUserVIP = !isUserVIP;
                  this.state.bookStore = new BookStorePaymentService(
                    this.state.books,
                    this.state.isUserVIP
                  );
                  this.updateView();
                }}
                className="col-6 form-check-input"
                defaultChecked={isUserVIP}
              />
              <span className="mr-2 ml-2"> Is user VIP member? </span>
            </span>
            <hr />

            <div className="row">
              <div className="col-md-6 mt-2 mb-2">
                <div className="card">
                  <div
                    className="card-img-top bg-info"
                    style={{ height: 6 + "rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">General</h5>
                    <button
                      type="button"
                      className="btn btn-primary mt-2 mb-2"
                      onClick={(e) => {
                        bookStore.addToCart(0);
                        this.updateView();
                      }}
                    >
                      Order Book
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <div className="card">
                  <div
                    className="card-img-top bg-warning"
                    style={{ height: 6 + "rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Second Hand</h5>
                    <button
                      type="button"
                      className="btn btn-primary mt-2 mb-2"
                      onClick={(e) => {
                        bookStore.addToCart(1);
                        this.updateView();
                      }}
                    >
                      Order Book
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <div className="card">
                  <div
                    className="card-img-top bg-secondary"
                    style={{ height: 6 + "rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Halloween</h5>
                    <button
                      type="button"
                      className="btn btn-primary mt-2 mb-2"
                      onClick={(e) => {
                        bookStore.addToCart(2);
                        this.updateView();
                      }}
                    >
                      Order Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge bg-secondary">{cart.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between lh-condensed"
                  >
                    <div>
                      <h6 className="my-0">{item.category}</h6>
                    </div>
                    <span className="text-muted">€ {item.price}</span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="text-center mx-auto">
                  <h6 className="my-0">
                    Total / Discounted price ({getPercentage}%)
                  </h6>
                  <hr />
                  <span className="text-muted">
                    € {totalPrice} / € {discountedPrice}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
