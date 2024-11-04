document.addEventListener('DOMContentLoaded', ()=>{

    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const total = document.getElementById("total");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = [];
    let totalAmount = calculateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value.trim());

        if( name !== "" && !isNaN(amount) && amount>0){
            const newExp = {
                id: Date.now(),
                name: name,
                amount: amount
            }
            expenses.push(newExp);
            renderList();
            updateTotal();

            expenseName.value = "";
            expenseAmount.value = ""
        }
    })

    function calculateTotal(){
        return expenses.reduce((sum, exp) => sum+exp.amount,0);
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function renderList(){
        expenseList.innerHTML = "";
        expenses.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${exp.name} - ₹${exp.amount}
                <button data-id="${exp.id}">Remove</button> 
            `;
            expenseList.appendChild(li);
        })
    }

    expenseList.addEventListener('click', (event)=>{
        if(event.target.tagName === 'BUTTON'){
            const itemId = parseInt(event.target.getAttribute("data-id"));
            expenses = expenses.filter(exp => exp.id !== itemId);
            renderList();
            updateTotal();
        }
    })
    
})