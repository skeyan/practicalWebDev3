/* Useful Methods + Properties + Events:
- `getElementById()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`
- `createElement()`
- `appendChild()`
- `removeChild()`
- `onclick`
- `node.children`
- `node.lastElementChild`
Useful VSCode Extensions Used:
- Live Server
*/

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
    /* Add new col element to table */
    let table = document.getElementById("grid");

    if (numRows == 0) { // Edge case
        let newRow = document.createElement("tr");
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
        table.appendChild(newRow);

        /* Increment count */
        numRows++;
        numCols++;
    } else {
        /* Populate all existing rows with the new column */
        let curRow = document.getElementsByTagName("tr");
        for (let i = 0; i < numRows; i++) {
            let newCol = document.createElement("td");
            curRow[i].appendChild(newCol);
        }

        /* Increment count */
        numCols++;
    }
}

//Remove a row
function removeR() {
    let table = document.getElementById("grid")

    if(numRows == 0 || numCols == 0){ // Edge Case
        alert("Clicked Remove Row With 0 Rows or 0 Cols")
    } else {
        // Remove row based on row count
        table.removeChild(table.lastChild) //delete current row 'tr'

        // Decrement count
        numRows--
        if (numRows == 0) { // Reset Table
            numCols = 0; 
        }
        //console.log(numCols, numRows)
    }
    
}
//Remove a column
function removeC() {
    let table = document.getElementById("grid")

    if(numRows == 0 || numCols == 0){ // Edge Case
        alert("Clicked Remove Col With 0 Rows or 0 Cols")
    } else {
        let curRow = table.getElementsByTagName("tr");
        for (let i = 0; i < numRows; i++) {
            curRow[i].removeChild(curRow[i].lastChild)
        }

        //Decrement count
        numCols--
        if (numCols == 0) { // Reset Table
            for (let i = 0; i < numRows; i++) { 
                table.removeChild(table.lastChild); 
            }   // delete 'tr' rows with empty columns for safe-measure..
            numRows = 0;
            //console.log(curRow[0]);
        }
        //console.log(numCols, numRows)
    }
    
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    
    alert("Clicked Fill All")

    // check if a color is selected
    if (colorSelected == null) {
        return alert("Select a color!")
    }

    // fill all cells
    var table = document.getElementsByTagName('td')
    for(var i=0; i < table.length; i++) {
        table[i].style.background = colorSelected
    }

}

function clearAll(){
    alert("Clicked Clear All")

    // clear all cells of their color/restore original color
   var table = document.getElementsByTagName('td')
   for(var i=0; i < table.length; i++) {
       table[i].style.background = ''
   }

}

function fillU(){
    if(colorSelected == null)
    {
        alert("No color selected, select a color")
    }
    // alert("Clicked Fill All Uncolored")
    let tableCells = document.getElementsByTagName('td')
    for(let i = 0; i<tableCells.length; i++){
        if(tableCells[i].style.background === '')
        {
            tableCells[i].style.background = colorSelected
        }
    }
            
}

function fillCell(){
    
    alert("Clicked on Fill Cell")
}