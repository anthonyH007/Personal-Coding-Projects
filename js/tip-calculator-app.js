let totalBill = parseFloat(prompt('What was the total bill amount?'))

let tipAmounts = [5.0, 10.00, 15.00, 20.00, 50.00]

console.log(tipAmounts)

let selectedTipAmount = parseFloat(prompt('What Percentage of Tip do you want to give?'))

let found = false
for (let i = 0; i < tipAmounts.length; i++) {
    if (selectedTipAmount === tipAmounts[i]) {
        let newBillTotal = totalBill + (totalBill * selectedTipAmount / 100)
        console.log(`Your total bill amount with tip is $: ${newBillTotal}`)
        found = true
        break
    }
}

if (!found) {
    console.log('Invalid tip amount selected')
}

