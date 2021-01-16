// from data.js
var tableData = data;

// YOUR CODE HERE!
// define button and form objects
var button = d3.select("#filter-btn");

// Create event handler
button.on("click", runEnter);

// Populate the table initially with unfiltered data
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data
console.log(tableData);

// Use d3 to update each cell's text with UFO report values
tableData.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
  // Append a cell to the row for each value in the UFO report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Complete the event handler function for the form
// Search through the datetime column to find the rows that match user input
function runEnter() {
  // refresh the tableData before filtering
  // var tableData = data;

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console log the input value and tabledata
  console.log(inputValue);
  console.log(tableData);

  if (inputValue === "") {
    var filterData = tableData
  } else {
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
  };

  // Get a reference to the table body
  var tbody = d3.select("tbody");
  tbody.html(" ")

  // Console.log the UFO data
  console.log(filterData);

  // Use d3 to update each cell's text with UFO report values
  filterData.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
    // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};