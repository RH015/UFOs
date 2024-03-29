// import the data from data.js
const TableData= data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

//takes two numbers an adds them 
function addition (a,b){
    return a + b;
}
console.log(addition(4, 5));

//Functions can call other functions
function doubleAddition(c,d){
    var total = addition(c,d) * 2;
    return total;
}
//builTable
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
