# Contrats JSON

## 1) Lister les horaires

**GET /horaires** : tableau de "jour"

Un "horaire" :

* libelle : string

* content: tableau de "horaire"


Un "horaire" :

* heureDebut : number

* heureFin : number

* contenu : string
  

Exemple :

	[
	    {
	        "libelle": "Lundi",
	        "content": [
	            {
	                "heureDebut": 12,
	                "heureFin": 20,
	                "contenu": "Horaires"
	            },
	            {
	                "heureDebut": 18,
	                "heureFin": 19,
	                "contenu": "Happy Hour"
	            }
	        ]
	    },
	    {
	        "libelle": "Mardi",
	        "content": []
	    }
	]


## 2) Lister les produits

**GET /produits** : tableau de "produit"

Un "produit" :

* lienImg : string

* libelle : string

* prix : string

Exemple :

	[
	    {
	    	"urlImg": "assets/vin_rouge.jpg",
	    	"libelle": "Vin Rouge",
	    	"prix": "8.00€"
	    },
	    {
	    	"urlImg": "assets/vodka.jpg",
	    	"libelle": "Vodka",
	    	"prix": "14.00€"
	    }
	]
