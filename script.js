let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    /* Add new row element to table */
    let table = document.getElementById("grid");
    let newRow = document.createElement("tr");

    if (numRows == 0) { // Edge case
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
        table.appendChild(newRow);

        /* Increment count */
        numRows++;
        numCols++;
    } else {
        /* Populate the new row with column count */
        for (let i = 0; i < numCols; i++) {
            let newCol = document.createElement("td");
            newRow.appendChild(newCol);
        }
        table.appendChild(newRow);

        /* Increment count */
        numRows++;
    }
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
