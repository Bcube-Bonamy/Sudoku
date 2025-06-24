console.log("JS IS RUNNING");

const LIS = document.querySelectorAll(".Child");

const array1 = [LIS[0], LIS[1], LIS[2], LIS[9], LIS[10], LIS[11], LIS[18], LIS[19], LIS[20]];
const array2 = [LIS[3], LIS[4], LIS[5], LIS[12], LIS[13], LIS[14], LIS[21], LIS[22], LIS[23]];
const array3 = [LIS[6], LIS[7], LIS[8], LIS[15], LIS[16], LIS[17], LIS[24], LIS[25], LIS[26]];
const array4 = [LIS[27], LIS[28], LIS[29], LIS[36], LIS[37], LIS[38], LIS[45], LIS[46], LIS[47]];
const array5 = [LIS[30], LIS[31], LIS[32], LIS[39], LIS[40], LIS[41], LIS[48], LIS[49], LIS[50]];
const array6 = [LIS[33], LIS[34], LIS[35], LIS[42], LIS[43], LIS[44], LIS[51], LIS[52], LIS[53]];
const array7 = [LIS[54], LIS[55], LIS[56], LIS[63], LIS[64], LIS[65], LIS[72], LIS[73], LIS[74]];
const array8 = [LIS[57], LIS[58], LIS[59], LIS[66], LIS[67], LIS[68], LIS[75], LIS[76], LIS[77]];
const array9 = [LIS[60], LIS[61], LIS[62], LIS[69], LIS[70], LIS[71], LIS[78], LIS[79], LIS[80]];

const allArrays = [array1, array2, array3, array4, array5, array6, array7, array8, array9]; 

const row1 = [LIS[0], LIS[1], LIS[2], LIS[3], LIS[4], LIS[5], LIS[6], LIS[7], LIS[8]];
const row2 = [LIS[9], LIS[10], LIS[11], LIS[12], LIS[13], LIS[14], LIS[15], LIS[16], LIS[17]];
const row3 = [LIS[18], LIS[19], LIS[20], LIS[21], LIS[22], LIS[23], LIS[24], LIS[25], LIS[26]]; 
const row4 = [LIS[27], LIS[28], LIS[29], LIS[30], LIS[31], LIS[32], LIS[33], LIS[34], LIS[35]]; 
const row5 = [LIS[36], LIS[37], LIS[38], LIS[39], LIS[40], LIS[41], LIS[42], LIS[43], LIS[44]];
const row6 = [LIS[45], LIS[46], LIS[47], LIS[48], LIS[49], LIS[50], LIS[51], LIS[52], LIS[53]];
const row7 = [LIS[54], LIS[55], LIS[56], LIS[57], LIS[58], LIS[59], LIS[60], LIS[61], LIS[62]];
const row8 = [LIS[63], LIS[64], LIS[65], LIS[66], LIS[67], LIS[68], LIS[69], LIS[70], LIS[71]];
const row9 = [LIS[72], LIS[73], LIS[74], LIS[75], LIS[76], LIS[77], LIS[78], LIS[79], LIS[80]];

const allRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

const col1 = [LIS[0], LIS[9], LIS[18], LIS[27], LIS[36], LIS[45], LIS[54], LIS[63], LIS[72]];
const col2 = [LIS[1], LIS[10], LIS[19], LIS[28], LIS[37], LIS[46], LIS[55], LIS[64], LIS[73]];
const col3 = [LIS[2], LIS[11], LIS[20], LIS[29], LIS[38], LIS[47], LIS[56], LIS[65], LIS[74]];
const col4 = [LIS[3], LIS[12], LIS[21], LIS[30], LIS[39], LIS[48], LIS[57], LIS[66], LIS[75]];
const col5 = [LIS[4], LIS[13], LIS[22], LIS[31], LIS[40], LIS[49], LIS[58], LIS[67], LIS[76]];
const col6 = [LIS[5], LIS[14], LIS[23], LIS[32], LIS[41], LIS[50], LIS[59], LIS[68], LIS[77]];
const col7 = [LIS[6], LIS[15], LIS[24], LIS[33], LIS[42], LIS[51], LIS[60], LIS[69], LIS[78]];
const col8 = [LIS[7], LIS[16], LIS[25], LIS[34], LIS[43], LIS[52], LIS[61], LIS[70], LIS[79]];
const col9 = [LIS[8], LIS[17], LIS[26], LIS[35], LIS[44], LIS[53], LIS[62], LIS[71], LIS[80]];

const allCols = [col1, col2, col3, col4, col5, col6, col7, col8, col9];


for (let y = 0; y < LIS.length; y++) {
    const cell = LIS[y].querySelector("p");
    if (cell.innerText === "0") {
        let tries = 0;
        let placed = false;

        while (!placed && tries < 20) {
            let x = Math.floor(Math.random() * 9) + 1;

            let indexArray = allArrays.findIndex(a => a.includes(LIS[y]));
            let indexRow = allRows.findIndex(r => r.includes(LIS[y]));
            let indexCol = allCols.findIndex(c => c.includes(LIS[y]));

            let inArray = allArrays[indexArray].some(el => el.querySelector("p").innerText === String(x));
            let inRow = allRows[indexRow].some(el => el.querySelector("p").innerText === String(x));
            let inCol = allCols[indexCol].some(el => el.querySelector("p").innerText === String(x));

            if (!inArray && !inRow && !inCol) {
                cell.innerText = x;
                placed = true;
            }

            tries++;
        }
    }
}


let k = 45;
let j = 0;
for (j; j < 81; j++){
    let i = Math.floor(Math.random() * 100) + 1;
    if (i < 50){
    }else if (i >= 50 && k !== 0){
        LIS[j].querySelector("p").innerText = "";
        k--;
    };
};

const nonEmpty = Array.from(LIS).filter(p => p.querySelector("p").innerText !== "");



let selectedCell = null;

LIS.forEach(p => {
    p.addEventListener("click", () => {
        selectedCell = p;
        LIS.forEach(b => b.classList.remove("highlight"));
        p.classList.add("highlight");
    })
})

document.addEventListener("keydown", (e) => {
    if (!selectedCell) return;
    const val = Number(e.key);

    let indexArray = allArrays.findIndex(a => a.includes(selectedCell));
    let indexRow = allRows.findIndex(r => r.includes(selectedCell));
    let indexCol = allCols.findIndex(c => c.includes(selectedCell));

    let inArray = allArrays[indexArray].some(el => Number(el.querySelector("p").innerText) === val);
    let inRow = allRows[indexRow].some(el => Number(el.querySelector("p").innerText) === val);
    let inCol = allCols[indexCol].some(el => Number(el.querySelector("p").innerText) === val);

    const isOriginal = nonEmpty.some(k => k.id === selectedCell.id);


    let safe = Array.from(LIS)
    if (val >= 1 && val <= 9 && !isOriginal && !inArray && !inRow && !inCol) {
        selectedCell.querySelector("p").innerText = val;
    }

    selectedCell.classList.remove("highlight");
    selectedCell = null; 

    const match = Array.from(LIS).filter(p => p.innerText === "0");
    if (match.length === 0) {
        alert("Congratulations! You completed the Sudoku puzzle!");
    }
});
