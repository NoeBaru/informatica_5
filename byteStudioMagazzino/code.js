let parameter = "marca";
let data = [];
let codeProd = "codiceProd"

function loadData() {
    fetch('./magazzino.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            // Genera dinamicamente la tabella dopo che i dati sono stati caricati
            generateTable();
        })
        .catch(error => console.error('Errore durante il caricamento dei dati:', error));
}

// Funzione per generare la tabella dinamicamente
function generateTable() {
    let table = document.getElementById('table');
    table.innerHTML = `<table class="table">
        <thead>
          <tr>
            <th scope="col">codiceProd</th>
            <th scope="col">reparto</th>
            <th scope="col">tipoProdotto</th>
            <th scope="col">marca</th>
            <th scope="col">modelloNome</th>
            <th scope="col">qt</th>
            <th scope="col">prezzo</th>
            <th scope="col">nominativoResponsabile</th>
            <th scope="col">cellResp</th>
            <th scope="col">fornitore1</th>
            <th scope="col">costo1</th>
            <th scope="col">fornitore2</th>
            <th scope="col">costo2</th>
            <th scope="col">iva</th>
            <th scope="col">azione</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>`;

    // Genera dinamicamente le righe
    let tableBody = document.getElementById('table-body');
    data.forEach(forecast => {
        let row = `
          <tr>
            <td>${forecast.codiceProd}</td>
            <td>${forecast.reparto}</td>
            <td>${forecast.tipoProdotto}</td>
            <td>${forecast.marca}</td>
            <td>${forecast.modelloNome}</td>
            <td>${forecast.qt}</td>
            <td>${forecast.prezzo}</td>
            <td>${forecast.nominativoResponsabile}</td>
            <td>${forecast.cellResp}</td>
            <td>${forecast.fornitore1}</td>
            <td>${forecast.costo1}</td>
            <td>${forecast.fornitore2}</td>
            <td>${forecast.costo2}</td>
            <td>${forecast.iva}</td>
            <td>
              <button id="delete_button_${forecast.codiceProd}" class="action_button">
                <img src="img/delete.png" alt="delete" class="action-icon">
              </button>
              <button id="modify_button_${forecast.codiceProd}" class="action_button">
              <img src="img/edit.png" alt="edit" class="action-icon">
              </button>
            </td>
          </tr>`;
        tableBody.innerHTML += row;
    });

    // Aggiungi i listener per i pulsanti di eliminazione
    ready_delete();
}

// Associa il listener per il click al menu
// Associa il listener per il click al menu
document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        // Ottieni il parametro dal link cliccato
        parameter = event.target.getAttribute('data-value');
    }
    
    // Assicurati che i dati siano già stati caricati
    if (data && data.length > 0) {
        // Esegui la ricerca nei dati
        data.forEach(forecast => {
            //console.log(forecast[parameter]); 

            if (forecast[parameter] === "informatica") {
                console.log(forecast);
            }
        });
    } else {
        console.log('Dati non disponibili o non ancora caricati.');
    }
});

function ready_delete(){
    console.log("ready");
    data.forEach(forecast => {
        console.log(forecast[codeProd]);
        let code = 'delete_button_' + forecast[codeProd];
        document.getElementById(code).addEventListener('click', function(event){
            data.forEach((look, index) => {
                if (look[codeProd] === forecast[codeProd]) {
                    data.splice(index, 1); // Rimuove l'elemento dall'array
                    console.log(data); // Mostra l'array aggiornato
                    generateTable()
                }
            });
        });
    });

function new(){
    console.log("new");
    data.forEach(forecast =>{
    let form = 
        `<div id="form-container" style="display:none;">
        <h2>Aggiungi un nuovo prodotto</h2>
        <form id="prodottoForm">
            <label for="reparto">Reparto:</label>
            <select id="reparto" required></select><br>

            <label for="tipoProdotto">Tipo Prodotto:</label>
            <input type="text" id="tipoProdotto" required><br>

            <label for="marca">Marca:</label>
            <input type="text" id="marca" required><br>

            <label for="modelloNome">Modello Nome:</label>
            <input type="text" id="modelloNome" required><br>

            <label for="qt">Quantità:</label>
            <input type="number" id="qt" required><br>

            <label for="prezzo">Prezzo:</label>
            <input type="number" id="prezzo" required><br>

            <label for="nominativoResponsabile">Responsabile:</label>
            <select id="nominativoResponsabile" required></select><br>

            <label for="cellResp">Cellulare Responsabile:</label>
            <input type="text" id="cellResp" required readonly><br>

            <label for="fornitore1">Fornitore 1:</label>
            <input type="text" id="fornitore1" required><br>

            <label for="costo1">Costo 1:</label>
            <input type="number" id="costo1" required><br>

            <label for="fornitore2">Fornitore 2:</label>
            <input type="text" id="fornitore2"><br>

            <label for="costo2">Costo 2:</label>
            <input type="number" id="costo2"><br>

            <label for="iva">IVA:</label>
            <select id="iva" required></select><br>

            <button type="submit">Salva</button>
        </form>
    </div>`
    }

    )
}
}

loadData();
