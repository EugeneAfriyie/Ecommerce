const trackitem = JSON.parse(localStorage.getItem('trackItem'));




const trackPageHTML= `


     <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div class="product-info">
          ${trackitem.name}
        </div>

        <div class="product-info">
          Quantity: ${trackitem.quantity}
        </div>

        <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
`