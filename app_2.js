let total = 0;

        function addItem() {
            const nameInput = document.getElementById("item-name-input");
            const priceInput = document.getElementById("item-price-input");
            const itemList = document.getElementById("item-list");
            const grandTotal = document.querySelector("[data-ns-test='grandTotal']");
            
            const itemName = nameInput.value.trim();
            const itemPrice = parseFloat(priceInput.value);

            if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
                alert("Please enter a valid item name and price.");
                return;
            }

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td data-ns-test="item-name">${itemName}</td>
                <td data-ns-test="item-price">${itemPrice.toFixed(2)}</td>
            `;
            
            itemList.insertBefore(newRow, itemList.lastElementChild);
            total += itemPrice;
            grandTotal.textContent = total.toFixed(2);
            
            nameInput.value = "";
            priceInput.value = "";
        }