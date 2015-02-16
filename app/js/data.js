var tree = {
    "q1": {
        "question": "Waarvoor zoekt u een betaaloplossing?",
        "values": {
            "Voor mijn webwinkel":                                                         q2,
            "Ik verkoop niet in een webwinkel maar wil mijn klanten per e-mail facturen.": "form:aanmeld",
            "Ik wil direct afrekenen op markplaats.nl met gratis kopersbescherming.":      "info:marktplaats",
            "Ik wil direct afrekenen op ebay.nl met gratis kopersbescherming.":            "info:marktplaats",
            "Geen van deze keuzes.":                                                       "form:question"
        }
    },
    "q2": {
        "question": "Hoe wilt u dat uw klanten u betalen?",
        "values": {
            "Ik wil klanten eenvoudig in 3 klikken vanaf de productpagina in mijn webwinkel laten afrekenen.": q3,
            "Ik wil PayPal als betaaloptie aan mijn eigen online afrekenmethode toevoegen.":                   q3,
            "Ik weet niet/anders":                                                                             "form:question"
        }
    },
    "q3": {
        "question": "Hoe wilt u onze betaaloplossing integreren?",
        "values": {
            "Ik wil het integreren in mijn webwinkel via HTML":              "form:aanmeld",
            "Ik wil het integreren in mijn webwinkel via API's/webservices": q5,
            "Ik weet niet/anders":                                           "form:question"
        }
    },
    "q4": {
        "question": "Hoe wilt u zich aanmelden voor de webwinkelbetalingen (HTML)?",
        "values" : {
            "Aanmelden bij PayPal":                          "form:aanmeld",
            "Aanmelden bij een PSP":                         "overzicht:psp",
            "Aanmelden bij een webwinkel hosting provider":  "overzicht:hosting",
            "Aanmelden bij een webwinkel software provider": "overzicht:software",
        }
    },
    "q5": {
        "question": "Hoe wilt u zich aanmelden voor de webwinkelbetalingen (API)?",
        "values" : {
            "Aanmelden bij PayPal":                          "form:aanmeld",
            "Aanmelden bij een PSP":                         "overzicht:psp",
            "Aanmelden bij een webwinkel hosting provider":  "overzicht:hosting",
            "Aanmelden bij een webwinkel software provider": "overzicht:software",
        }
    }
};

var text = {
    "q2": {
        "title": "Met alle betaaloplossingen van PayPal kunt u",
        "values": [
            "Betalingen accepteren via elke bank of creditcard binnen en buiten nederland",
            "Betalingen accepteren via elke bank of creditcard binnen en buiten nederland",
            "Betalingen accepteren via elke bank of creditcard binnen en buiten nederland",
            "Betalingen accepteren via elke bank of creditcard binnen en buiten nederland",
        ],
    },
    "q3": {
        "title": "Met alle betaaloplossingen van PayPal kunt u",
        "values": [
            "geen exta opstartkosten",
            "geen exta opstartkosten",
            "geen exta opstartkosten",
            "geen exta opstartkosten",
        ],
    },
}

var info = {
    "marktplaats": {
        "title": "balbla",
        "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt",
    }
};

var summaries = {
    "psp": {
        "title": "Overzicht van PSP's",
        "items": [
            {
                "title": "iDeal",
                "link":  "http://github.com",
            },
            {
                "title": "Mobiel",
                "link":  "http://github.com",
            },
            {
                "title": "Bank overschrijving",
                "link":  "http://github.com",
            },
        ],
    },
    "hosting": {
        "title": "Overzicht van Webwinkel Hosting Providers",
        "items": [
            {
                "title": "Namecheap",
                "link":  "http://github.com",
            },
            {
                "title": "Versio",
                "link":  "http://github.com",
            },
            {
                "title": "Transip",
                "link":  "http://github.com",
            },
        ],
    },
    "software": {
        "title": "Overzicht van Webwinkel Software Providers",
        "items": [
            {
                "title": "Shopify",
                "link":  "http://github.com",
            },
            {
                "title": "wooCommerce",
                "link":  "http://github.com",
            },
            {
                "title": "Magento",
                "link":  "http://github.com",
            },
        ],
    }
};

var forms = {
    "aanmeld": {
        "title":  "Aanmeld formulier",
        "fields": [
                {
                    "type":  "text",
                    "value": "Naam",
                    "name":  "naam"
                },
                {
                    "type":  "text",
                    "value": "Email",
                    "name":  "email"
                },
            ]
    },
    "question": {
        "title": "Vraag uw vraag",
        "fields": [
                {
                    "type":  "text",
                    "value": "Naam",
                    "name":  "naam"
                },
                {
                    "type":  "text",
                    "value": "Email",
                    "name":  "email"
                },
                {
                    "type":  "textarea",
                    "value": "Bericht",
                    "name":  "message"
                }
            ]
    }
};

