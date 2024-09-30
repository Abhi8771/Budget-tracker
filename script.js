
const incomeForm = document.getElementById("income-form");
const incomeAmount = document.getElementById("income-amount");

const expenseForm = document.getElementById("expense-form");
const expenseAmount = document.getElementById("expense-amount");
const expenseDesc = document.getElementById("expenseDesc");
const expenseCategory = document.getElementById("expense-category");

const displayIncome = document.getElementById("displayIncome");
const balanceElement = document.getElementById("balance");
const expenseTableBody = document.querySelector("#expenseTable tbody");

let income = 0;
let expenses = [];

// Income Form- Event Listener
incomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    income = parseInt(incomeAmount.value);
    incomeAmount.value = "";
    displayIncome.textContent = `Income is Rs ${income}`;
    updateBalance(); 
});

// Expense Form -Event Listener
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const expense = {
        description: expenseDesc.value,
        amount: parseInt(expenseAmount.value),
        category: expenseCategory.value,
    };

   
    expenses.push(expense);

    
    expenseDesc.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "Food"; 

    
    addExpenseToTable(expense);
    updateBalance();
});

// Function to Add Expense to the Table
const addExpenseToTable = (expense) => {
    const newRow = document.createElement("tr");

    const descCell = document.createElement("td");
    descCell.textContent = expense.description;

    const amountCell = document.createElement("td");
    amountCell.textContent = expense.amount;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = expense.category;

    newRow.appendChild(descCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(categoryCell);

    expenseTableBody.appendChild(newRow);
};

// Function to Update Balance
const updateBalance = () => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = income - totalExpenses;
    balanceElement.textContent = `Balance is Rs ${balance}`;
};
