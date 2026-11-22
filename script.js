var tabela = document.getElementById("tabela");
var col = 0;
var lin = 0;
var vercol = Array.from({ length: 10 }, (_, i) => i++);
var verlin = Array.from({ length: 20 }, (_, i) => i++);

var grade = Array.from({length: 20}, () => Array.from({length: 10}, () => ({"proibido": 0}) ));



class blocos {
    constructor(q1, q2, q3, q4, cor) {
        //this.nome = nome;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.cor = cor;
    } // constructor
} // class

var anterior = 0;


var pecas = ["risco", "cubo", "l", "l_invertido", "t", "z", "z_invertido"];

var random_bloco = Math.floor(Math.random() * 7);

function comecar(anterior, random) {
    var col = Math.floor(Math.random() * 10);
    var peca = !random ? pecas[random_bloco] : pecas[random];

    console.log(lin, col, peca, anterior, random_bloco);
    anterior = 0;


    var celulas = document.querySelectorAll("td");
    celulas.forEach(celula => {
        celula.style.backgroundColor = "#ffffff";
    })



    switch (peca) {
        case "risco":
           
            var bloco = new blocos(tabela.rows[lin].cells[col], tabela.rows[lin + 1].cells[col], tabela.rows[lin + 2].cells[col], tabela.rows[lin + 3].cells[col], "#ff0000");
            tabela.rows[lin].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 3].cells[col].style.backgroundColor = bloco.cor;
            break;
        case "cubo":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col], tabela.rows[lin + 1].cells[col], tabela.rows[lin].cells[col + 1], tabela.rows[lin + 1].cells[col + 1], "#00ff00");
            tabela.rows[lin].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col + 1].style.backgroundColor = bloco.cor;
            break;

        case "l":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col + 1], tabela.rows[lin + 1].cells[col + 1], tabela.rows[lin + 2].cells[col + 1], tabela.rows[lin + 2].cells[col], "#0000ff");
            tabela.rows[lin].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col].style.backgroundColor = bloco.cor;
            break;


        case "l_invertido":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col], tabela.rows[lin + 1].cells[col], tabela.rows[lin + 2].cells[col], tabela.rows[lin + 2].cells[col + 1], "#ffff00");
            tabela.rows[lin].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col + 1].style.backgroundColor = bloco.cor;
            break;

        case "t":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col], tabela.rows[lin + 1].cells[col], tabela.rows[lin + 1].cells[col + 1], tabela.rows[lin + 2].cells[col], "#ff00ff");
            tabela.rows[lin].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col].style.backgroundColor = bloco.cor;
            break;

        case "z":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col + 1], tabela.rows[lin + 1].cells[col + 1], tabela.rows[lin + 1].cells[col], tabela.rows[lin + 2].cells[col], "#00ffff");
            tabela.rows[lin].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col].style.backgroundColor = bloco.cor;
            break;

        case "z_invertido":
            if (!vercol.includes(col + 1)) {
                anterior = peca;
                comecar(anterior);
                break;
            }
            var bloco = new blocos(tabela.rows[lin].cells[col], tabela.rows[lin + 1].cells[col], tabela.rows[lin + 1].cells[col + 1], tabela.rows[lin + 2].cells[col + 1], "#ffaf00");
            tabela.rows[lin].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 1].cells[col + 1].style.backgroundColor = bloco.cor;
            tabela.rows[lin + 2].cells[col + 1].style.backgroundColor = bloco.cor;
            break;
    }
    setTimeout(() => descer(bloco), 200);



} //comecar


function descer(bloco) {

    

    

    var linha1 = bloco.q1.parentElement.nextElementSibling;
    var linha2 = bloco.q2.parentElement.nextElementSibling;
    var linha3 = bloco.q3.parentElement.nextElementSibling;
    var linha4 = bloco.q4.parentElement.nextElementSibling;

    if([linha1, linha2, linha3, linha4].some(q => !q || !verlin.includes(q.rowIndex))){
        comecar(0, Math.floor(Math.random() * 7));
        return;
    }

    var newq1 = linha1.cells[bloco.q1.cellIndex];
    var newq2 = linha2.cells[bloco.q2.cellIndex];
    var newq3 = linha3.cells[bloco.q3.cellIndex];
    var newq4 = linha4.cells[bloco.q4.cellIndex];

    bloco.q1.style.backgroundColor = "#ffffff";
    bloco.q2.style.backgroundColor = "#ffffff";
    bloco.q3.style.backgroundColor = "#ffffff";
    bloco.q4.style.backgroundColor = "#ffffff";

    Object.assign(bloco,{
        q1: newq1,
        q2: newq2,
        q3: newq3,
        q4: newq4
    });

    

    bloco.q1.style.backgroundColor = bloco.cor;
    bloco.q2.style.backgroundColor = bloco.cor;
    bloco.q3.style.backgroundColor = bloco.cor;
    bloco.q4.style.backgroundColor = bloco.cor;

    setTimeout(() => descer(bloco), 200);

}

function risco(risco, giro) {
    switch (giro) {

        case 0:
            apagar(risco);
            Object.assign(risco, {
                xq1: tabela.cells[col],
                xq2: tabela.cells[col],
                xq3: tabela.cells[col],
                xq4: tabela.cells[col],
                yq1: tabela.rows[lin],
                yq2: tabela.rows[lin] + 1,
                yq3: tabela.rows[lin] + 2,
                yq4: tabela.rows[lin] + 3
            });
            break;
        case 90:
            apagar(risco);
            Object.assign(risco, {
                xq1: tabela.cells[col],
                xq2: tabela.cells[col] + 1,
                xq3: tabela.cells[col] + 2,
                xq4: tabela.cells[col] + 3,
                yq1: tabela.rows[lin],
                yq2: tabela.rows[lin],
                yq3: tabela.rows[lin],
                yq4: tabela.rows[lin]
            });
            break;
        case 180:
            apagar(risco);
            Object.assign(risco, {
                xq1: tabela.cells[col],
                xq2: tabela.cells[col],
                xq3: tabela.cells[col],
                xq4: tabela.cells[col],
                yq1: tabela.rows[lin],
                yq2: tabela.rows[lin] + 1,
                yq3: tabela.rows[lin] + 2,
                yq4: tabela.rows[lin] + 3
            });
            break;
        case 270:
            apagar(risco);
            Object.assign(risco, {
                xq1: tabela.cells[col],
                xq2: tabela.cells[col] + 1,
                xq3: tabela.cells[col] + 2,
                xq4: tabela.cells[col] + 3,
                yq1: tabela.rows[lin],
                yq2: tabela.rows[lin],
                yq3: tabela.rows[lin],
                yq4: tabela.rows[lin]
            });
            break;
    }
}




function apagar(bloco) {
    tabela.rows(bloco.x1).cells(bloco.y1).style.backgroundColor = "#efefef";
    tabela.rows(bloco.x2).cells(bloco.y2).style.backgroundColor = "#efefef";
    tabela.rows(bloco.x3).cells(bloco.y3).style.backgroundColor = "#efefef";
    tabela.rows(bloco.x4).cells(bloco.y4).style.backgroundColor = "#efefef";
}