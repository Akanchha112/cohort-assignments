/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  len=transactions.length
  arr=[]
  for(let i=0;i<len;i++){
    a=true
    for(let j=0;j<arr.length;j++){
      if(arr[j].category==transactions[i].category){  //if category in array it updates totalspent values
        arr[j].totalSpent+=transactions[i].price
        a=false
      }
    }
    if(a){    //if category is not in array
      arr.push({category:transactions[i].category,totalSpent:transactions[i].price})
    }
    
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
