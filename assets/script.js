const cell_0 = document.getElementById('0');
const cell_1 = document.getElementById('1');
const cell_2 = document.getElementById('2');
const cell_3 = document.getElementById('3');
const cell_4 = document.getElementById('4');
const cell_5 = document.getElementById('5');
const cell_6 = document.getElementById('6');
const cell_7 = document.getElementById('7');
const cell_8 = document.getElementById('8');
const cell_9 = document.getElementById('9');
const cell_10 = document.getElementById('10');
const cell_11 = document.getElementById('11');
const cell_12 = document.getElementById('12');
const cell_13 = document.getElementById('13');
const cell_14 = document.getElementById('14');
const cell_15 = document.getElementById('15');


var all_cells_raw = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


cell_0.addEventListener("click", function() {
    if (all_cells_raw[0] === 1) {
        all_cells_raw[0] = 0
        cell_0.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[0] === 0) {
        all_cells_raw[0] = 1
        cell_0.classList.add("grid-checkbox-checked")
    }
})
cell_1.addEventListener("click", function() {
    if (all_cells_raw[1] === 1) {
        all_cells_raw[1] = 0
        cell_1.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[1] === 0) {
        all_cells_raw[1] = 1
        cell_1.classList.add("grid-checkbox-checked")
    }
})
cell_2.addEventListener("click", function() {
    if (all_cells_raw[2] === 1) {
        all_cells_raw[2] = 0
        cell_2.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[2] === 0) {
        all_cells_raw[2] = 1
        cell_2.classList.add("grid-checkbox-checked")
    }
})
cell_3.addEventListener("click", function() {
    if (all_cells_raw[3] === 1) {
        all_cells_raw[3] = 0
        cell_3.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[3] === 0) {
        all_cells_raw[3] = 1
        cell_3.classList.add("grid-checkbox-checked")
    }
})
cell_4.addEventListener("click", function() {
    if (all_cells_raw[4] === 1) {
        all_cells_raw[4] = 0
        cell_4.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[4] === 0) {
        all_cells_raw[4] = 1
        cell_4.classList.add("grid-checkbox-checked")
    }
})
cell_5.addEventListener("click", function() {
    if (all_cells_raw[5] === 1) {
        all_cells_raw[5] = 0
        cell_5.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[5] === 0) {
        all_cells_raw[5] = 1
        cell_5.classList.add("grid-checkbox-checked")
    }
})
cell_6.addEventListener("click", function() {
    if (all_cells_raw[6] === 1) {
        all_cells_raw[6] = 0
        cell_6.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[6] === 0) {
        all_cells_raw[6] = 1
        cell_6.classList.add("grid-checkbox-checked")
    }
})
cell_7.addEventListener("click", function() {
    if (all_cells_raw[7] === 1) {
        all_cells_raw[7] = 0
        cell_7.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[7] === 0) {
        all_cells_raw[7] = 1
        cell_7.classList.add("grid-checkbox-checked")
    }
})
cell_8.addEventListener("click", function() {
    if (all_cells_raw[8] === 1) {
        all_cells_raw[8] = 0
        cell_8.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[8] === 0) {
        all_cells_raw[8] = 1
        cell_8.classList.add("grid-checkbox-checked")
    }
})
cell_9.addEventListener("click", function() {
    if (all_cells_raw[9] === 1) {
        all_cells_raw[9] = 0
        cell_9.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[9] === 0) {
        all_cells_raw[9] = 1
        cell_9.classList.add("grid-checkbox-checked")
    }
})
cell_10.addEventListener("click", function() {
    if (all_cells_raw[10] === 1) {
        all_cells_raw[10] = 0
        cell_10.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[10] === 0) {
        all_cells_raw[10] = 1
        cell_10.classList.add("grid-checkbox-checked")
    }
})
cell_11.addEventListener("click", function() {
    if (all_cells_raw[11] === 1) {
        all_cells_raw[11] = 0
        cell_11.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[11] === 0) {
        all_cells_raw[11] = 1
        cell_11.classList.add("grid-checkbox-checked")
    }
})
cell_12.addEventListener("click", function() {
    if (all_cells_raw[12] === 1) {
        all_cells_raw[12] = 0
        cell_12.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[12] === 0) {
        all_cells_raw[12] = 1
        cell_12.classList.add("grid-checkbox-checked")
    }
})
cell_13.addEventListener("click", function() {
    if (all_cells_raw[13] === 1) {
        all_cells_raw[13] = 0
        cell_13.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[13] === 0) {
        all_cells_raw[13] = 1
        cell_13.classList.add("grid-checkbox-checked")
    }
})
cell_14.addEventListener("click", function() {
    if (all_cells_raw[14] === 1) {
        all_cells_raw[14] = 0
        cell_14.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[14] === 0) {
        all_cells_raw[14] = 1
        cell_14.classList.add("grid-checkbox-checked")
    }
})
cell_15.addEventListener("click", function() {
    if (all_cells_raw[15] === 1) {
        all_cells_raw[15] = 0
        cell_15.classList.remove("grid-checkbox-checked")
    } else if (all_cells_raw[15] === 0) {
        all_cells_raw[15] = 1
        cell_15.classList.add("grid-checkbox-checked")
    }
})

const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function() {
    for (let i = 0; i < all_cells_raw.length; i ++) {
        all_cells_raw[i] = 0
    }
    cell_0.classList.remove("grid-checkbox-checked")
    cell_1.classList.remove("grid-checkbox-checked")
    cell_2.classList.remove("grid-checkbox-checked")
    cell_3.classList.remove("grid-checkbox-checked")
    cell_4.classList.remove("grid-checkbox-checked")
    cell_5.classList.remove("grid-checkbox-checked")
    cell_6.classList.remove("grid-checkbox-checked")
    cell_7.classList.remove("grid-checkbox-checked")
    cell_8.classList.remove("grid-checkbox-checked")
    cell_9.classList.remove("grid-checkbox-checked")
    cell_10.classList.remove("grid-checkbox-checked")
    cell_11.classList.remove("grid-checkbox-checked")
    cell_12.classList.remove("grid-checkbox-checked")
    cell_13.classList.remove("grid-checkbox-checked")
    cell_14.classList.remove("grid-checkbox-checked")
    cell_15.classList.remove("grid-checkbox-checked")
})

const popup = document.getElementById("popup")
const closer = document.getElementById("closer")
closer.addEventListener("click" , function() {
    popup.classList.remove("show")
})

var special_situation = false

function checkArray(arr) {
    // Check if array is empty
    if (arr.length === 0) {
        return -1; // Return -1 for empty array (undefined)
    }

    // Check if all elements are 0
    if (arr.every(elem => elem === 0)) {
        special_situation = true
        return 0;
    }

    // Check if all elements are 1
    if (arr.every(elem => elem === 1)) {
        special_situation = true
        return 1;
    }

    // If neither all 0s nor all 1s
    return -1;
}

function large_table_generator() {
    var large_table = []
    var large_table_index = 0;
    for (let i = 0; i <= 1; i++) {

        for (let j = 0; j <= 3; j++) {

            for (let k = 0; k <= 1; k++) {

                for (let l = 0; l <= 3; l++) {

                    var large_table_cell = {"content": all_cells_raw[l + 4*j],"id": (l + 4*j), "row": (j + 4*i), "column": (l + 4*k)}
                    large_table[large_table_index] = large_table_cell
                    large_table_index ++;

                }

            }

        }

    }
    return large_table
}

function id_array_generator() {
    id_validations = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            var id_validations_member = {"id": j + 4*i, "row": i, "column": j, "is_valid": true}
            id_validations.push(id_validations_member);
        }
    }
    return id_validations;
}


function id_array_modifier(id_validations, id, bool) {
    id_validations[id]["is_valid"] = bool 
}

function additional_groups_remover(an_array_of_arrays) {

    an_array_of_arrays.sort((a, b) => a.length - b.length);

    if (an_array_of_arrays.length > 0) {
        for (let i = 0; i < an_array_of_arrays.length; i++) {
            // Select the current nested array
            let selected_array = an_array_of_arrays[i];
            // Combine all members from unselected arrays
            let unselectedMembers = [];
            for (let j = 0; j < an_array_of_arrays.length; j++) {
                if (j !== i) {
                    unselectedMembers = unselectedMembers.concat(an_array_of_arrays[j]);
                }
            }
            // Check if all members of selected array are found in unselected members
            let allMembersFound = true;
            for (let k = 0; k < selected_array.length; k++) {
                if (!unselectedMembers.includes(selected_array[k])) {
                    allMembersFound = false;
                    break;
                }
            }
            // If all members found, delete the selected array and break out of loop
            if (allMembersFound) {
                an_array_of_arrays.splice(i, 1);
                // Decrement i to account for the removed element
                i--;
            }
        }
    }

    return an_array_of_arrays;

}


function adjustArrays(arrays) {
    // Helper function to find the nearest power of 2 less than or equal to a given number
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

            // Determine the desired length (nearest power of 2)
            const desiredLength = nearestPowerOf2(originalLength);

            // Trim the nested array if needed
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
        // Helper function to remove duplicates from an array
        function removeDuplicates(array) {
            return Array.from(new Set(array));
        }

        // Iterate through each nested array
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
    // Helper function to reorder array elements from low to high
    function reorderArray(array) {
        return array.sort((a, b) => a - b);
    }

    // Iterate through each nested array and reorder its elements
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

    let rows = [
        ["A'", "B'"], ["A'", "B"], ["A", "B"], ["A", "B'"]
    ]
    let cols = [
        ["C'", "D'"], ["C'", "D"], ["C", "D"], ["C", "D'"]
    ]

    new_groups = []

    for (let i = 0; i < more_detailed_groups.length; i ++) {

        let translated_rows = []
        let translated_cols = []

        for (let j = 0; j < more_detailed_groups[i].length; j ++) {

            translated_rows.push(rows[more_detailed_groups[i][j]["row"]])
            translated_cols.push(cols[more_detailed_groups[i][j]["column"]])

        }

        new_groups.push([translated_rows, translated_cols])

    }

    let final_output = []

    for (let i = 0; i < new_groups.length; i ++) {
        rows = new_groups[i][0]
        cols = new_groups[i][1]

        rows = findCommonElements(rows)
        cols = findCommonElements(cols)
        
        let this_group_final = ''

        for (let j = 0; j < rows.length; j++) {
            this_group_final = this_group_final.concat(rows[j])
        }
        for (let j = 0; j < cols.length; j++) {
            this_group_final = this_group_final.concat(cols[j])
        }

        final_output.push(this_group_final)
    }

    let translated_final_output = ''

    for (let i = 0; i < final_output.length; i ++) {
        translated_final_output = translated_final_output.concat(" + " + final_output[i])
    }

    translated_final_output = translated_final_output.substring(3)
    displayer(translated_final_output)
    
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

        translator(new_id_array)
    } else {
        displayer(result)
    }

}

calculate.addEventListener("click", calculator)

