// Import data from data.js file
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create table function
function buildTable(data) {
    // Clear existing data so we're not adding data to already existing data
    tbody.html("");

    // Iterate through each record withing the data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Iterate through each field in the data object
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}