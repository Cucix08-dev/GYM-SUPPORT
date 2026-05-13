#include <iostream>
using namespace std;

#define DIFFERENZA_MASSIMA 20.0

void descrizione() {
    cout << "\nDescrizione:\nQuesto programma calcola quanti kg puoi togliere da un lato "
            "senza superare la differenza massima sicura tra i lati (20 kg)."
         << endl;
}

void welcome() {
    cout << R"(
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
    )" << endl;

    descrizione();
}



int main() {
    welcome();

    double pesoLato;
    cout << "\n\nInserisci il peso per lato: ";
    cin >> pesoLato;

    if (pesoLato <= 0) {
        cout << "Non c'e' peso da togliere." << endl;
        return 0;
    }

    double pesoTogliibile = (pesoLato >= DIFFERENZA_MASSIMA)? DIFFERENZA_MASSIMA : pesoLato;

    cout << "Puoi togliere al massimo " << pesoTogliibile << " kg da un lato per volta" << endl;

    return 0;
}
