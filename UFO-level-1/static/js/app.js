// ***IMPORTANT NOTE*** 
    // What: Any custom functions or variables that can be called anything will start with a prefix of ce_
    // Why: This is to help make it clear to observers of this code to understand the code interactions much more clearly.

// ***GIVEN***
    // from data.js
    var ce_tableData = data;


// !!! BEGINNING OF INPUTTED CODE !!!

// 1.0 - START - We need to first transfer the data from data.js into the html using Javascript.
    //NOTE: Define a function that will take an array and will unpack each entry's variables by adding in a <tr> tag, and then a <td> tag per variable.
    //NOTE: We use a variable "ce_newRow" so that it inputs multiple <td> entries within that singular <tr>.

    function ce_sendTableData(ce_INPUT){
        ce_INPUT.forEach(ce_dataEntry => {
            var ce_newRow = d3.select("tbody").append("tr");
            Object.entries(ce_dataEntry).forEach(([key,value])=>{
                var entry = ce_newRow.append("td").text(value);
            });
        });
    };

    //ACTION: FUNCTION EXECUTION
    ce_sendTableData(ce_tableData);
// 1.0 - END



// 2.0 - START - We now need to make use of the "form entry" that takes in a typed text input from the USER and the button to apply.
    //NOTE: Define a function that will take in input inside the "form" and store it as a value.
    //NOTE: Once that value is stored, use the filter action to output the entries within the table that has the same value in datetime.
    //NOTE: Also, we need to make sure we use the previous function, that creates the table inside html, to output the new filtered table.
    //NOTE: Lastly, we need to create a function so that each click on the "filter" button will activate our new filter function!

    function ce_commitFilter() {
        d3.select("tbody").html("");

        var ce_formInput = d3.select(".form-control").property("value");
        
        var ce_filteredTableData = ce_tableData.filter(
            ce_tableData => ce_tableData.datetime === ce_formInput
            );
        //NESTED ACTION WITHIN FUNCTION: EXECUTION OF TABLE OUTPUT IN HTML
        ce_sendTableData(ce_filteredTableData);
    };

    //ACTION: FUNCTION EXECUTION VIA BUTTON
    d3.select("#filter-btn").on("click",ce_commitFilter)
//2.0 - END