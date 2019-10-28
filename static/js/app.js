// from data.js
var tableData = data;
//console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufosighting) => {
  var row = tbody.append("tr");
  Object.entries(ufosighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
 });

var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");
  var filteredDate = tableData;
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredDate);

  //tbody = d3.select("tbody");

  filteredDate.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
   });
  });

// d3.select("h1>span").text(inputValue);