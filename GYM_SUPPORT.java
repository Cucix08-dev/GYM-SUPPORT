import java.util.Scanner;

public class GYM_SUPPORT {
    public static final double DIFFERENZA_MASSIMA = 20.0;

    public static void descrizione() {
        System.out.println("\nDescrizione:");
        System.out.println("Questo programma calcola quanti kg puoi togliere da un lato "
                + "senza superare la differenza massima sicura tra i lati (20 kg).");
    }

    public static void welcome() {
        System.out.println("""
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
        """);
        descrizione();
    }

    public static void main(String[] args) {
        welcome();

        Scanner input = new Scanner(System.in);
        System.out.print("\n\nInserisci il peso per lato: ");
        double pesoLato = input.nextDouble();

        if (pesoLato <= 0) {
            System.out.println("Non c'è peso da togliere.");
            input.close();
            return;
        }

        double pesoTogliibile = (pesoLato >= DIFFERENZA_MASSIMA)
                ? DIFFERENZA_MASSIMA
                : pesoLato;

        System.out.println("Puoi togliere al massimo " + pesoTogliibile + " kg da un lato per volta");
    
        input.close();
    }
}
