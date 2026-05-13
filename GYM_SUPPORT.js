const readline = require("readline");

const DIFFERENZA_MASSIMA = 20.0;

function descrizione() {
    console.log("\nDescrizione:");
    console.log("Questo programma calcola quanti kg puoi togliere da un lato " +
                "senza superare la differenza massima sicura tra i lati (20 kg).");
}

function welcome() {
    console.log(String.raw`
   ____  __   __  __  __ 
  / ___| \ \ / / |  \/  |
 | |  _   \   /  | |\/| |
 | |_| |   | |   | |  | |
  \____|   |_|   |_|  |_|

   ____  _   _ ____  ____   ___  ____ _____ 
  / ___|| | | |  _ \|  _ \ / _ \|  _ \_   _|
  \___ \| | | | |_) | |_) | | | | |_) || |  
   ___) | |_| |  __/|  __/| |_| |  _ < | |  
  |____/ \___/|_|   |_|    \___/|_| \_\|_|  
    `);
    descrizione();
}

function main() {
    welcome();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("\n\nInserisci il peso per lato: ", (input) => {
        const pesoLato = parseFloat(input);

        if (isNaN(pesoLato)) {
            console.log("Valore non valido.");
        } else if (pesoLato <= 0) {
            console.log("Non c'è peso da togliere.");
        } else {
            const pesoTogliibile = (pesoLato >= DIFFERENZA_MASSIMA)? DIFFERENZA_MASSIMA : pesoLato;

            console.log(`Puoi togliere al massimo ${pesoTogliibile} kg da un lato per volta`);
        }

        rl.close();
    });
}

main();
