document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const categoryInput = document.getElementById('category-input');
    const budgetInput = document.getElementById('budget-input');
    const profitInput = document.getElementById('profit-input');
    const budgetList = document.getElementById('budget-list');

    // Event listener for the budget form submission
    budgetForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the traditional way

        // Get the form values
        const category = categoryInput.value.trim();
        const budget = budgetInput.value;
        const profit = profitInput.value;

        // Check if all inputs are filled
        if (category && budget && profit) {
            // Create a new table row for the budget item
            const newRow = document.createElement('tr');

            // Create table cells for category, budget, and profit
            const categoryCell = document.createElement('td');
            categoryCell.textContent = category;

            const budgetCell = document.createElement('td');
            budgetCell.textContent = `$${parseFloat(budget).toFixed(2)}`;

            const profitCell = document.createElement('td');
            profitCell.textContent = `$${parseFloat(profit).toFixed(2)}`;

            // Append cells to the row
            newRow.appendChild(categoryCell);
            newRow.appendChild(budgetCell);
            newRow.appendChild(profitCell);

            // Append the row to the budget list (table body)
            budgetList.appendChild(newRow);

            // Clear the input fields
            categoryInput.value = '';
            budgetInput.value = '';
            profitInput.value = '';
        }
    });
});
