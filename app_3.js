class OutOfRangeError extends Error {
    constructor(arg) {
        super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
        this.name = "OutOfRangeError";
    }
}

class InvalidExprError extends Error {
    constructor() {
        super("Expression should not have an invalid combination of expression");
        this.name = "InvalidExprError";
    }
}

function evalString() {
    try {
        const input = document.getElementById("input1").value.trim();
        if (/[^0-9+\-*/\s]/.test(input)) {
            throw new OutOfRangeError(input.match(/[^0-9+\-*/\s]/)[0]);
        }
        if (/\+\+|\-\+|\*\+|\/\+|\+\*|\+\/|\-\*|\-\/|\*\/|\/\*/.test(input)) {
            throw new InvalidExprError();
        }
        if (/^[+\/*]/.test(input)) {
            throw new SyntaxError("Expression should not start with invalid operator");
        }
        if (/[+\-\/*]$/.test(input)) {
            throw new SyntaxError("Expression should not end with invalid operator");
        }
        alert(`Valid Expression: ${eval(input)}`);
    } catch (error) {
        alert(`${error.name}: ${error.message}`);
    }
}

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