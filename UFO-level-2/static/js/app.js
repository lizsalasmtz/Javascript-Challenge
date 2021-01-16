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

  // Select the input elements and get the raw HTML node
  var inputDatetimeElement = d3.select("#datetime");
  var inputCityElement = d3.select("#city");
  var inputStateElement = d3.select("#state");
  var inputCountryElement = d3.select("#country");
  var inputShapeElement = d3.select("#shape");
  
  // Get the value properties of the input element
  var inputDatetime = inputDatetimeElement.property("value");
  var inputCity = inputCityElement.property("value");
  var inputState = inputStateElement.property("value");
  var inputCountry = inputCountryElement.property("value");
  var inputShape = inputShapeElement.property("value");

  // console log the input values and tabledata
  console.log(inputDatetime);
  console.log(inputCity);
  console.log(inputState);
  console.log(inputCountry);
  console.log(inputShape);

  console.log(tableData);

  var filterData = tableData
  if (inputDatetime !== "") {
    var filterData = filterData.filter(filterData => filterData.datetime === inputDatetime);
  };
  if (inputCity !== "") {
    var filterData = filterData.filter(filterData => filterData.city === inputCity);
  };
  if (inputState !== "") {
    var filterData = filterData.filter(filterData => filterData.state === inputState);
  };
  if (inputCountry !== "") {
    var filterData = filterData.filter(filterData => filterData.country === inputCountry);
  };
  if (inputShape !== "") {
    var filterData = filterData.filter(filterData => filterData.shape === inputShape);
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