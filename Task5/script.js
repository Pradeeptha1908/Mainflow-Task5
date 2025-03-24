// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
    // Handle product form submission
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");
  
    productForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const productName = document.getElementById("product-name").value;
      const productPrice = document.getElementById("product-price").value;
  
      if (productName && productPrice) {
        const li = document.createElement("li");
        li.innerHTML = `${productName} - $${productPrice} <button class="delete">Delete</button>`;
        
        // Append the new product to the list
        productList.appendChild(li);
  
        // Add delete functionality to the delete button
        li.querySelector(".delete").addEventListener("click", function () {
          productList.removeChild(li);
        });
  
        // Clear the form
        productForm.reset();
      }
    });
  
    // Handle buyer form submission
    const buyerForm = document.getElementById("buyer-form");
    const buyerList = document.getElementById("buyer-list");
  
    buyerForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const buyerName = document.getElementById("buyer-name").value;
      const buyerEmail = document.getElementById("buyer-email").value;
  
      if (buyerName && buyerEmail) {
        const li = document.createElement("li");
        li.innerHTML = `${buyerName} - ${buyerEmail} <button class="delete">Delete</button>`;
        
        // Append the new buyer to the list
        buyerList.appendChild(li);
  
        // Add delete functionality to the delete button
        li.querySelector(".delete").addEventListener("click", function () {
          buyerList.removeChild(li);
        });
  
        // Clear the form
        buyerForm.reset();
      }
    });
  });
  