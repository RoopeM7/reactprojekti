Roope Myllymäki
(2025_04_17_09_41_20_581)

# Tehtävä: tuote


## Tehtävä: Luo tuotteen tietojen käsittelyyn verkkosivu
Luo verkkosivu React-komponenteilla tuotetietojen näyttämistä varten. Käytettävä tietovarasto välitetään oliolle palvelimelta json-muodossa. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Tietoja saa muuttaa, kunhan rakenne säilyy samanlaisena.

Lisää verkkosivuun ostoskori, johon voit lisätä tuotetietoja. Sivulla tulee olla myös yhteenveto ostoskorin sisällöstä. Yhteenveto näyttää ostoskorissa olevat tuotteet ja niiden lukumäärät. Sivulla tulee olla näkyvissä myös korin yhteishinta.

### tietovarasto.json

```json
[
  {
    "tuoteID": 4,
    "hinta": 25,
    "tuotenimi": "MaxEffect 2000",
    "tyyppi": "pesukone",
    "tuotemäärä": 15,
    "valmistaja": "Koje oy",
    "värit": [
      "musta",
      "keltainen",
      "oranssi"
    ],
    "lisätiedot": {
      "kommentti": "vanha malli",
      "malli": "XL",
      "energialuokka": "A+"
    }
  },
  {
    "tuoteID": 1,
    "hinta": 123,
    "tuotenimi": "XZL 34",
    "tyyppi": "tomutin",
    "tuotemäärä": 5,
    "valmistaja": "Hilavitkutin Oy",
    "värit": [
      "oranssi",
      "vihreä",
      "valkoinen"
    ],
    "lisätiedot": {
      "kommentti": "ei kommentteja",
      "malli": "VIP",
      "energialuokka": "A"
    }
  },
  {
    "tuoteID": 6,
    "hinta": 200,
    "tuotenimi": "Luuri S43",
    "tyyppi": "jääkaappi",
    "tuotemäärä": 100,
    "valmistaja": "Leila Hökki oy",
    "värit": [
      "oranssi",
      "sininen",
      "punainen"
    ],
    "lisätiedot": {
      "kommentti": "-",
      "malli": "silver",
      "energialuokka": "E"
    }
  },
  {
    "tuoteID": 3,
    "hinta": 10,
    "tuotenimi": "Future 2025",
    "tyyppi": "älypuhelin",
    "tuotemäärä": 1,
    "valmistaja": "Hilavitkutin Oy",
    "värit": [
      "valkoinen",
      "musta",
      "keltainen"
    ],
    "lisätiedot": {
      "kommentti": "huippulaite",
      "malli": "GT",
      "energialuokka": "B"
    }
  },
  {
    "tuoteID": 7,
    "hinta": 300,
    "tuotenimi": "Silo delux",
    "tyyppi": "jääkaappi",
    "tuotemäärä": 10,
    "valmistaja": "Vempain oy",
    "värit": [
      "punainen",
      "keltainen"
    ],
    "lisätiedot": {
      "kommentti": "ei huomauttamista",
      "malli": "gold",
      "energialuokka": "A++"
    }
  },
  {
    "tuoteID": 2,
    "hinta": 123,
    "tuotenimi": "Frost XL",
    "tyyppi": "imuri",
    "tuotemäärä": 7,
    "valmistaja": "Hilavitkutin Oy",
    "värit": [
      "valkoinen",
      "musta",
      "keltainen"
    ],
    "lisätiedot": {
      "kommentti": "laadukas",
      "malli": "chrome",
      "energialuokka": "C"
    }
  }
]
```

# Projekti

## rajapinta
Luo komponentille tapahtumarajapinta, joka reagoi muutoksiin sivulla. Valitse seurattaviksi arvoiksi mielestäsi olennaiset.


## Luo kansio projektille
- luo uusi Vite-projekti
- nimeä projektikansio nimellä `Myllymäki_Roope_tuote`
- lisää asenna tarvittavat riippuvuudet
- lisää datapalvelimeen tietovarastoksi **tuotevarasto**. 


## Palauta projektikansio
Palauta projektikansio pakattuna (zip) erikseen annettavien ohjeiden mukaan. 
Poista palautettavasta projektikansiosta node_modules kansio. Lisää pakattuun kansioon myös tietovarastokansio ja varaston asetustiedosto (json).
