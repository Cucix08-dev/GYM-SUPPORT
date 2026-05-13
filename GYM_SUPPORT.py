DIFFERENZA_MASSIMA = 20.0


def descrizione():
    print("\nDescrizione:")
    print("Questo programma calcola quanti kg puoi togliere da un lato "
          "senza superare la differenza massima sicura tra i lati (20 kg).")


def welcome():
    print(r"""
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
    """)
    descrizione()


def main():
    welcome()

    try:
        peso_lato = float(input("\n\nInserisci il peso per lato: "))
    except ValueError:
        print("Valore non valido.")
        return

    if peso_lato <= 0:
        print("Non c'è peso da togliere.")
        return

    peso_togliibile = DIFFERENZA_MASSIMA if peso_lato >= DIFFERENZA_MASSIMA else peso_lato
    print(f"Puoi togliere al massimo {peso_togliibile} kg da un lato per volta")


if __name__ == "__main__":
    main()
