document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const categoryInput = document.getElementById('category-input');
    const budgetInput = document.getElementById('budget-input');
    const profitInput = document.getElementById('profit-input');
    const budgetList = document.getElementById('budget-list');

    // Load the existing budget items from local storage on page load
    loadBudgetItems();

    // Event listener for form submission
    budgetForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const category = categoryInput.value.trim();
        const budget = parseFloat(budgetInput.value);
        const profit = parseFloat(profitInput.value);

        if (category && !isNaN(budget) && !isNaN(profit)) {
            const newItem = { category, budget, profit };

            // Save the new item to local storage
            saveBudgetItem(newItem);

            // Add the new item to the table
            addBudgetItemToTable(newItem);

            // Clear the input fields
            categoryInput.value = '';
            budgetInput.value = '';
            profitInput.value = '';
        }
    });

    // Function to load budget items from local storage and display them
    function loadBudgetItems() {
        const budgetItems = JSON.parse(localStorage.getItem('budgetItems')) || [];
        budgetItems.forEach(item => addBudgetItemToTable(item));
    }

    // Function to save budget item to local storage
    function saveBudgetItem(item) {
        let budgetItems = JSON.parse(localStorage.getItem('budgetItems')) || [];
        budgetItems.push(item);
        localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
    }

    // Function to remove budget item from local storage
    function removeBudgetItem(category) {
        let budgetItems = JSON.parse(localStorage.getItem('budgetItems')) || [];
        budgetItems = budgetItems.filter(item => item.category !== category);
        localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
    }

    // Function to add budget item to the table
    function addBudgetItemToTable(item) {
        const newRow = document.createElement('tr');

        // Create table cells for category, budget, profit
        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.category;

        const budgetCell = document.createElement('td');
        budgetCell.textContent = `$${item.budget.toFixed(2)}`;

        const profitCell = document.createElement('td');
        profitCell.textContent = `$${item.profit.toFixed(2)}`;

        // Create remove button
        const actionCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
            // Remove the row from the table
            newRow.remove();
            // Remove the item from local storage
            removeBudgetItem(item.category);
        });

        actionCell.appendChild(removeButton);

        // Append all cells to the row
        newRow.appendChild(categoryCell);
        newRow.appendChild(budgetCell);
        newRow.appendChild(profitCell);
        newRow.appendChild(actionCell);

        // Append the row to the budget list (table body)
        budgetList.appendChild(newRow);
    }
});
