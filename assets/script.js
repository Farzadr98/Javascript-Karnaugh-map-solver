var working_size = parseInt(localStorage.getItem('working_size'), 10);
if (!working_size) {
    working_size = 16;
}

const cells = {};
var all_cells_raw = Array(working_size).fill(0);


function initCells(totalCells) {
    for (let i = 0; i < totalCells; i++) {
        const cellVarName = `cell_${i}`;
        const cell = document.getElementById(`${i}`);
        if (cell) {
            cells[cellVarName] = cell;

            cell.addEventListener('click', () => {
                if (all_cells_raw[i] === 1) {
                    all_cells_raw[i] = 0;
                    cell.classList.remove("grid-checkbox-checked");
                } else {
                    all_cells_raw[i] = 1;
                    cell.classList.add("grid-checkbox-checked");
                }
            });
        } else {
            console.warn(`${cellVarName} not found`);
        }
    }
}
initCells(working_size);


const clearBtn = document.getElementById("clear");
function clearCells(totalCells) {
    all_cells_raw.fill(0);

    for (let i = 0; i < totalCells; i++) {
        const cell = cells[`cell_${i}`];
        if (cell) {
            cell.classList.remove("grid-checkbox-checked");
        }
    }
}
clearBtn.addEventListener("click", () => clearCells(working_size));



const popup = document.getElementById("popup")
const closer = document.getElementById("closer")
closer.addEventListener("click" , function() {
    popup.classList.remove("show")
})



const change_popup = document.getElementById("change-size");
const change_closer = document.getElementById("change-closer");
const change_btn = document.getElementById("change-btn");
change_closer.addEventListener("click" , function() {
    change_popup.classList.remove("show")
});
change_btn.addEventListener("click" , function() {
    change_popup.classList.add("show")
})


const dropdown = document.querySelector('.custom-select');

let selectedSize = localStorage.getItem('userSize');
if (selectedSize) {
    dropdown.value = selectedSize;
    createKMap(selectedSize)
} else {
    selectedSize = dropdown.value;
}

dropdown.addEventListener('change', () => {
    selectedSize = dropdown.value;
    localStorage.setItem('userSize', selectedSize);
    console.log("Selected value saved:", selectedSize);
    createKMap(selectedSize)
});



var special_situation = false
function checkArray(arr) {
    if (arr.length === 0) {
        return -1;
    }

    if (arr.every(elem => elem === 0)) {
        special_situation = true
        return 0;
    }


    if (arr.every(elem => elem === 1)) {
        special_situation = true
        return 1;
    }


    return -1;
}

function replaceUndefinedWithZero(arr) {
    return arr.map(item => item === undefined ? 0 : item);
}

all_cells_raw = replaceUndefinedWithZero(all_cells_raw);


function createKMap(size) {
    const container = document.querySelector('.grid-container');
    let html = "";

    if (size === "twoxtwo") {
        container.classList = "grid-container grid-2x2"

        html = `
            <div class="grid-item grid-title"><p>AB</p></div>
            <div class="grid-item grid-title"><span>0</span></div>
            <div class="grid-item grid-title"><span>1</span></div>

            <div class="grid-item grid-title"><span>0</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="0">m [0]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="1">m [1]</span></div>

            <div class="grid-item grid-title"><span>1</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="2">m [2]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="3">m [3]</span></div>
        `;
        working_size = 4;
    }

    else if (size === "twoxfour") {
        container.classList = "grid-container grid-2x4";

        html = `
            <div class="grid-item grid-title"><p>ABC</p></div>
            <div class="grid-item grid-title"><span>00</span></div>
            <div class="grid-item grid-title"><span>01</span></div>
            <div class="grid-item grid-title"><span>11</span></div>
            <div class="grid-item grid-title"><span>10</span></div>

            <div class="grid-item grid-title"><span>0</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="0">m [0]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="1">m [1]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="2">m [3]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="3">m [2]</span></div>

            <div class="grid-item grid-title"><span>1</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="4">m [4]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="5">m [5]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="6">m [7]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="7">m [6]</span></div>
        `;
        working_size = 8;
    }

    else if (size === "fourxfour") {

        container.classList = "grid-container grid-4x4";

        html = `
            <div class="grid-item grid-title"><p>AB \\ CD</p></div>
            <div class="grid-item grid-title"><span>00</span></div>
            <div class="grid-item grid-title"><span>01</span></div>
            <div class="grid-item grid-title"><span>11</span></div>
            <div class="grid-item grid-title"><span>10</span></div>

            <div class="grid-item grid-title"><span>00</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="0">m [0]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="1">m [1]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="2">m [3]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="3">m [2]</span></div>

            <div class="grid-item grid-title"><span>01</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="4">m [4]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="5">m [5]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="6">m [7]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="7">m [6]</span></div>

            <div class="grid-item grid-title"><span>11</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="8">m [12]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="9">m [13]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="10">m [15]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="11">m [14]</span></div>

            <div class="grid-item grid-title"><span>10</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="12">m [8]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="13">m [9]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="14">m [11]</span></div>
            <div class="grid-item"><span class="grid-checkbox" id="15">m [10]</span></div>
        `;
        working_size = 16;
    }

    container.innerHTML = html;
    initCells(working_size);
    localStorage.setItem('working_size', working_size);
    clearCells(working_size);
}

function large_table_generator() {

    var working_size = parseInt(localStorage.getItem('working_size'), 10);
    if (!working_size) {
        working_size = 16;
    }
    all_cells_raw = replaceUndefinedWithZero(all_cells_raw);

    const size = working_size;
    let large_table = [];

    if (size === 4) {

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const idx = (j % 2) + 2 * (i % 2);
                large_table.push({
                    content: all_cells_raw[idx],
                    id: idx,
                    row: i,
                    column: j
                });
            }
        }
    }
    else if (size === 8) {

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const idx = (j % 4) + 4 * (i % 2);
                large_table.push({
                    content: all_cells_raw[idx],
                    id: idx,
                    row: i,
                    column: j
                });
            }
        }
    }
    else if (size === 16) {

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const idx = (j % 4) + 4 * (i % 4);
                large_table.push({
                    content: all_cells_raw[idx],
                    id: idx,
                    row: i,
                    column: j
                });
            }
        }
    }
    else {
        console.error("Unsupported working size:", size);
    }

    return large_table;
}



function id_array_generator() {
    id_validations = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            var id_validations_member = {
                "id": j + 4*i,
                "row": i,
                "column": j,
                "is_valid": true
            }
            id_validations.push(id_validations_member);
        }
    }
    return id_validations;
}



function additional_groups_remover(an_array_of_arrays) {

    an_array_of_arrays.sort((a, b) => a.length - b.length);

    if (an_array_of_arrays.length > 0) {
        for (let i = 0; i < an_array_of_arrays.length; i++) {

            let selected_array = an_array_of_arrays[i];

            let unselectedMembers = [];
            for (let j = 0; j < an_array_of_arrays.length; j++) {
                if (j !== i) {
                    unselectedMembers = unselectedMembers.concat(an_array_of_arrays[j]);
                }
            }
            let allMembersFound = true;
            for (let k = 0; k < selected_array.length; k++) {
                if (!unselectedMembers.includes(selected_array[k])) {
                    allMembersFound = false;
                    break;
                }
            }
            if (allMembersFound) {
                an_array_of_arrays.splice(i, 1);
                i--;
            }
        }
    }

    return an_array_of_arrays;

}


function adjustArrays(arrays) {
    function nearestPowerOf2(num) {
        let power = 1;
        while (power * 2 <= num) {
            power *= 2;
        }
        return power;
    }

    if (arrays && arrays.length > 0) {
        for (let i = 0; i < arrays.length; i++) {
            const nestedArray = arrays[i];
            const originalLength = nestedArray.length;

            const desiredLength = nearestPowerOf2(originalLength);

            if (originalLength > desiredLength) {
                const trimmedArray = nestedArray.slice(0, desiredLength);
                arrays[i] = trimmedArray;
            }
        }

        return arrays;
    }

    return []
}


function forward_row_group(large_table, id_array) {

    var group_id = 0
    var groups = []
    previous_was_zero = true

    for (let i = 0; i <= 7; i++) {

        if (large_table[8*i]["content"] === 1 && previous_was_zero === false) {

            group_id ++;
        }

        for (let j = 0; j <= 7; j ++) {

            let id = large_table[j + 8*i]["id"]
            large_table_content = large_table[j + 8*i]["content"]

            if (large_table[j + 8*i]["content"] === 1 && id_array[id]["is_valid"] === true) {

                previous_was_zero = false
                id_array[id]["is_valid"] = false

                if (!groups[group_id]) {
                    groups[group_id] = []
                }

                groups[group_id].push(large_table[j + 8*i]["id"])

                let neighbor = 1
                while(large_table[j + 8*i + neighbor]["content"] === 1 && (neighbor + j) <= 8 && neighbor <= 3) {

                    groups[group_id].push(large_table[j + 8*i + neighbor]["id"])
                    neighbor ++;
                }

                if (groups[group_id] && groups[group_id].length === 3) {
                    let removed_cell = groups[group_id].pop()
                    group_id++;
                    groups[group_id] = []
                    groups[group_id].push(removed_cell)
                }

                group_id ++;
            } else {

                previous_was_zero = true

            }

        }

    }

    for(let i = 0; i < groups.length; i++) {
        let emptyArr
        if (groups[i] === emptyArr) {
            groups.splice(i, 1)
        }
    }

    groups = additional_groups_remover(groups)
    return groups
}

function removeDuplicates(arrays) {
    if (arrays && arrays.length > 0) {
        function removeDuplicates(array) {
            return Array.from(new Set(array));
        }

        for (let i = 0; i < arrays.length; i++) {
            const nestedArray = arrays[i];
            const uniqueArray = removeDuplicates(nestedArray);
            arrays[i] = uniqueArray;
        }

        return arrays;
    }

    return []
}

function more_detailed_groups_generator(large_table, groups) {
    more_detailed_groups = []

    for (let i = 0; i < groups.length; i ++) {
        if (groups[i]) {
            selected_group = groups[i]
            selected_large_table_cells = []
            if (selected_group.length > 0) {
                outerLoop: for (let j = 0; j < selected_group.length; j ++) {

                    selected_group_cell = selected_group[j]

                    for (let k = 0; k < large_table.length; k++) {
                        if (large_table[k]["id"] === selected_group_cell) {
                            selected_large_table_cells.push(large_table[k])
                            continue outerLoop
                        }
                    }
                }
            }
            more_detailed_groups.push(selected_large_table_cells)
        }
    }

    return more_detailed_groups
}

function downside_vertical_groups(large_table, groups, id_array) {

    if (groups.length > 0) {

        more_detailed_groups = more_detailed_groups_generator(large_table, groups)

        if (more_detailed_groups && more_detailed_groups.length > 0) {

            let updated_more_detailed_groups = []

            for (let i = 0; i < more_detailed_groups.length; i ++) {

                let current_group = more_detailed_groups[i]

                let looping = true

                let neighbor = 1

                while (looping) {

                    let conditions_to_be_met = more_detailed_groups[i].length

                    let conditions_met = 0

                    let new_group = []

                    for (let j = 0; j < more_detailed_groups[i].length; j++) {

                        let current_cell_column = more_detailed_groups[i][j]["column"]

                        let current_cell_row = more_detailed_groups[i][j]["row"]

                        let under_cell_row = current_cell_row + neighbor

                        for (let k = 0; k < large_table.length; k++) {

                            if (large_table[k]["row"] === under_cell_row && large_table[k]["column"] === current_cell_column && large_table[k]["content"] === 1) {
                                conditions_met += 1
                                new_group.push(large_table[k])
                                break;
                            }

                        }

                    }

                    if (conditions_met === conditions_to_be_met) {

                        current_group = current_group.concat(new_group)
                        neighbor ++;

                    } else {
                        looping = false
                    }
                }

                updated_more_detailed_groups.push(current_group)

            }

            var new_id_array = []

            for (let i = 0; i < updated_more_detailed_groups.length; i++) {

                let group = []

                for (let j = 0; j < updated_more_detailed_groups[i].length; j ++) {
                    let new_id_array_cell = updated_more_detailed_groups[i][j]["id"]
                    group.push(new_id_array_cell)
                }

                new_id_array.push(group)
            }

            return new_id_array

        }
    }
}

function upside_vertical_groups(groups) {

    if (groups && groups.length > 0) {

        more_detailed_groups = more_detailed_groups_generator(large_table, groups)

        if (more_detailed_groups && more_detailed_groups.length > 0) {

            let updated_more_detailed_groups = []

            for (let i = 0; i < more_detailed_groups.length; i ++) {

                let current_group = more_detailed_groups[i]

                let looping = true

                let neighbor = 1

                while (looping) {

                    let conditions_to_be_met = more_detailed_groups[i].length

                    let conditions_met = 0

                    let new_group = []

                    for (let j = 0; j < more_detailed_groups[i].length; j++) {

                        let current_cell_column = more_detailed_groups[i][j]["column"]

                        let current_cell_row = more_detailed_groups[i][j]["row"]
                        if (current_cell_row == 0) {
                            current_cell_row += 4
                        }

                        let under_cell_row = current_cell_row - neighbor

                        for (let k = 0; k < large_table.length; k++) {

                            if (large_table[k]["row"] === under_cell_row && large_table[k]["column"] === current_cell_column && large_table[k]["content"] === 1) {

                                conditions_met += 1
                                new_group.push(large_table[k])
                                break;
                            }

                        }

                    }

                    if (conditions_met === conditions_to_be_met) {

                        current_group = current_group.concat(new_group)
                        neighbor ++;

                    } else {
                        looping = false
                    }
                }

                updated_more_detailed_groups.push(current_group)

            }

            var new_id_array = []

            for (let i = 0; i < updated_more_detailed_groups.length; i++) {

                let group = []

                for (let j = 0; j < updated_more_detailed_groups[i].length; j ++) {
                    let new_id_array_cell = updated_more_detailed_groups[i][j]["id"]
                    group.push(new_id_array_cell)
                }

                new_id_array.push(group)
            }

            return new_id_array

        }

    }

}

function reorderNestedArrays(arr) {
    function reorderArray(array) {
        return array.sort((a, b) => a - b);
    }

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr[i] = reorderArray(arr[i]);
        }
    }

    return arr;
}

function findCommonElements(arrays) {
    if (!arrays || !Array.isArray(arrays) || arrays.length === 0) {
        return [];
    }

    const firstArray = arrays[0];

    const commonElements = firstArray.filter((element) => {
        return arrays.every((array) => array.includes(element));
    });

    return commonElements;
}

function translator(more_detailed_groups) {
    console.log("more_detailed_groups");
    console.log(more_detailed_groups);

    let rows, cols;

    if (working_size === 4) {

        rows = [["A'"], ["A"]];
        cols = [["B'"], ["B"]];
    }
    else if (working_size === 8) {

        rows = [["A'"], ["A"]];
        cols = [["B'", "C'"], ["B'", "C"], ["B", "C"], ["B", "C'"]];
    }
    else if (working_size === 16) {

        rows = [["A'", "B'"], ["A'", "B"], ["A", "B"], ["A", "B'"]];
        cols = [["C'", "D'"], ["C'", "D"], ["C", "D"], ["C", "D'"]];
    }
    else {
        console.error("Unsupported working size:", working_size);
        return;
    }

    let new_groups = [];

    for (let i = 0; i < more_detailed_groups.length; i++) {
        let translated_rows = [];
        let translated_cols = [];

        for (let j = 0; j < more_detailed_groups[i].length; j++) {
            translated_rows.push(rows[more_detailed_groups[i][j]["row"]]);
            translated_cols.push(cols[more_detailed_groups[i][j]["column"]]);
        }

        new_groups.push([translated_rows, translated_cols]);
    }

    let final_output = [];

    for (let i = 0; i < new_groups.length; i++) {
        let r = findCommonElements(new_groups[i][0]);
        let c = findCommonElements(new_groups[i][1]);

        let this_group_final = '';
        for (let j = 0; j < r.length; j++) this_group_final += r[j];
        for (let j = 0; j < c.length; j++) this_group_final += c[j];

        final_output.push(this_group_final);
    }

    let translated_final_output = final_output.join(" + ");
    if(translated_final_output.length === 0) {
        translated_final_output = "1";
    }
    displayer(translated_final_output);
    return translated_final_output;
}


const final_content = document.getElementById("final-content")

function displayer(translated_final_output) {
    final_content.innerText = translated_final_output
    popup.classList.add("show")
}

const calculate = document.getElementById("calculate")

function calculator() {

    special_situation = false
    let result = checkArray(all_cells_raw)

    if (!special_situation) {
        large_table = large_table_generator()
        id_array = id_array_generator()
        groups = forward_row_group(large_table, id_array)
        new_id_array = downside_vertical_groups(large_table, groups, id_array)
        new_id_array = adjustArrays(new_id_array)
        new_id_array = additional_groups_remover(new_id_array)
        new_id_array = removeDuplicates(new_id_array)

        new_id_array = upside_vertical_groups(new_id_array)
        new_id_array = removeDuplicates(new_id_array)
        new_id_array = adjustArrays(new_id_array)
        new_id_array = reorderNestedArrays(new_id_array)
        new_id_array = additional_groups_remover(new_id_array)

        new_id_array = more_detailed_groups_generator(large_table, new_id_array)

        let final_output = translator(new_id_array)

        storeCalculation(final_output, all_cells_raw, working_size);
    } else {
        displayer(result)
    }

}

function storeCalculation(final_output, all_cells_raw, working_size) {
    let history = JSON.parse(localStorage.getItem("calc_history")) || [];

    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

    const newEntry = {
        id: uniqueId,
        final_output: final_output,
        all_cells_raw: [...all_cells_raw], // clone array
        working_size: working_size,
        date: new Date().toISOString()
    };

    history.push(newEntry);

    history.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (history.length > 20) {
        history = history.slice(0, 20);
    }

    localStorage.setItem("calc_history", JSON.stringify(history));

    const select = document.getElementById("history_select");
    if (select) {
        select.innerHTML = "";

        const blankOption = document.createElement("option");
        blankOption.value = "";
        blankOption.textContent = "-- Select history --";
        select.appendChild(blankOption);

        history.forEach(entry => {
            const option = document.createElement("option");
            option.value = entry.id;
            option.textContent = entry.final_output;
            select.appendChild(option);
        });

        select.value = "";
    }
}

function loadHistoryOptions() {
    const select = document.getElementById("history_select");
    select.innerHTML = "";

    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = "-- Select history --";
    select.appendChild(blankOption);

    let history = JSON.parse(localStorage.getItem("calc_history")) || [];

    history.forEach(entry => {
        let option = document.createElement("option");
        option.value = entry.id;
        option.textContent = entry.final_output;
        select.appendChild(option);
    });

    select.value = "";
}

window.addEventListener("DOMContentLoaded", loadHistoryOptions);

function sizeNameFromWorkingSize(ws) {
    if (ws === 4) return "twoxtwo";
    if (ws === 8) return "twoxfour";
    return "fourxfour"; // default for 16 and fallback
}

function onHistorySelectChange(e) {
    const select = e.target;
    const chosenId = select.value;
    if (!chosenId) return;

    const history = JSON.parse(localStorage.getItem("calc_history")) || [];
    const entry = history.find(it => it.id === chosenId);
    if (!entry) {
        select.value = "";
        return;
    }

    const sizeName = sizeNameFromWorkingSize(Number(entry.working_size));

    const sizeDropdown = document.querySelector('.custom-select');
    if (sizeDropdown) {
        sizeDropdown.value = sizeName;
        localStorage.setItem('userSize', sizeName);
        if (typeof selectedSize !== 'undefined') selectedSize = sizeName;
    }

    createKMap(sizeName);

    const ws = Number(entry.working_size) || working_size;

    const saved = Array.isArray(entry.all_cells_raw) ? entry.all_cells_raw : [];
    all_cells_raw = Array(ws).fill(0);

    for (let i = 0; i < ws; i++) {
        const val = saved[i];
        if (Number(val) === 1) {
            all_cells_raw[i] = 1;
            const cellEl = cells[`cell_${i}`] || document.getElementById(String(i));
            if (cellEl) cellEl.classList.add("grid-checkbox-checked");
        } else {
            const cellEl = cells[`cell_${i}`] || document.getElementById(String(i));
            if (cellEl) cellEl.classList.remove("grid-checkbox-checked");
        }
    }

    select.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
    const historySelect = document.getElementById("history_select");
    if (historySelect) {
        historySelect.addEventListener("change", onHistorySelectChange);
    }
});

calculate.addEventListener("click", calculator)
clearBtn.click();
