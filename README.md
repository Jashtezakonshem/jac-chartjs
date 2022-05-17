# Bootstrap
- ### `yarn` per installare tutte le dipendenze
- installare la libreria chartjs (https://react-chartjs-2.js.org/)

# JSON
 Tutti i dati sono presenti sotto src/json.
manipolare i dati affinché la struttura dati sia uguale a quella richiesta dalla libreria dei grafici

# Esercizio

- Creare un grafico di tipo Line chart per plottare l'andamento nel tempo delle due caldaie
- creare un grafico a torta per plottare la percentuale di giorni in cui la caldaia ha lavorato ad un ritmo sostenuto (>50) e i giorni in cui ha lavorato ad un ritmo ridotto (<=50)
- attaccarsi alle api di https://api.covidtracking.com per creare un istogramma dove sull'asse delle X ci sono i primi 3 giorni di aprile. Per ogni giorno prendere 3 valori da plottare. https://api.covidtracking.com/v1/us/20200501.json ( persone morte, ospitalizzate, dimesse etc..)
