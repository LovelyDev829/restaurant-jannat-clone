let initState = {
    countDish: 0,
    totalPrice: 0,
    titleList: [
        {
            tiId: 1,
            titleName: 'Warme vorspeisen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Papadam (2 Stück)',
                    dishDetail : 'hauchdünne, gewürzte Linsenfladen',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Gemischte Vorspeisen (für 2 Personen)',
                    dishDetail : 'mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Vegetable Samosa (2 Stück)',
                    dishDetail : 'Pastetchen mit frischem Gemüse gefüllt',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Chicken Pakoras',
                    dishDetail : 'Hähchenstücke in Kicherebsenmehl gebacken',
                    dishPrice: 5.00,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Onion Bhaji',
                    dishDetail : 'Zwiebeln in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Paneer Pakoras',
                    dishDetail : 'Käse in Kichererbsenmehl gebacken',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Gemüse Pakoras',
                    dishDetail : 'frisches Gemüse in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 2,
            titleName: 'Suppen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Malkatani Suppe',
                    dishDetail : 'mit Linsen, Reis und Hühnerfleisch',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Creme Soup',
                    dishDetail : 'Hühnercremesuppe',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Tomatensuppe',
                    dishDetail : 'frische Tomatencremesuppe',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Sabji Suppe',
                    dishDetail : 'indische Gemüsesuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Dal Suppe',
                    dishDetail : 'Linsensuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 3,
            titleName: 'Salate',
            list: [
                {
                    dishId: 1,
                    dishName: 'Indian Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Gemischter Salat-Mango',
                    dishDetail : 'gemischter Salat mit indischem Käse und Mangostücken',
                    dishPrice: 6.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Gemischter Salat',
                    dishDetail : 'mit verschiedenem gemischten Salaten',
                    dishPrice: 4.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Chat',
                    dishDetail : 'Kichererbsen mit Kartoffeln, Tomaten, Zwiebeln und Joghurtsauce',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 5,
            titleName: 'Beliebte gerichte',
            list: [
                {
                    dishId: 1,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Jannat Tikka Masala (pikant)',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Cashewnuss-Mandel-Sahnesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Butter Chicken',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Tomaten-Buttercremesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 6,
            titleName: 'Beilagen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Lassan Nan',
                    dishDetail : 'frisches Hefebrot mit Knoblauch',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Butter Nan',
                    dishDetail : 'frisches Hefebrot mit Butter',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Raita Gurken',
                    dishDetail : 'Joghurt und Gurken',
                    dishPrice: 3.00,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Peschawari Nan',
                    dishDetail : 'frisches Hefebrot mit Nüssen und indischem Käse gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Nan',
                    dishDetail : 'blattförmiges Hefebrot vom Tandoor',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Keema Nan',
                    dishDetail : 'frisches Fladenbrot mit Lammhackfleisch gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Chappati',
                    dishDetail : 'frischer Vollkorn-Teigfladen vom Tandoor',
                    dishPrice: 2.40,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Podina Nan',
                    dishDetail : 'frisches Hefebrot mit indischer Minze',
                    dishPrice: 3.20,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Paneer Nan',
                    dishDetail : 'frisches Hefebrot mit indischem Käse gefüllt',
                    dishPrice: 3.90,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 7,
            titleName: 'Spezialitäten aus dem tandoor',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mix Grill Platte',
                    dishDetail : 'etwas von jedem Grillgericht (mit Ausnahme von Jheenga Tandoori)',
                    dishPrice: 17.90,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Ente Tikka',
                    dishDetail : 'Entenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 15.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Malai Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Käse und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Jheenga Tandoori',
                    dishDetail : 'Riesengarnelen in Joghurt und Gewürzen mariniert',
                    dishPrice: 18.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Lamm Tikka',
                    dishDetail : 'Lammfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 16.80,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Murgh Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Pahari Tikka (scharf)',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Minze, frischem Koriander und grüner Peperoni mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 8,
            titleName: 'Vegetarische-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mango Subji',
                    dishDetail : 'gemischtes Gemüse mit Mandel-Mango-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Bhindi Masala',
                    dishDetail : 'indische Okra mit Tomaten, Zwiebeln und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Mixed Vegetables',
                    dishDetail : 'gemischtes Gemüse mit Kokosnussmilch und Gewürzen',
                    dishPrice: 11.90,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Karahi Paneer',
                    dishDetail : 'hausgemachter indischer Käse mit Tomate, Paprika und Zwiebeln',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Masala',
                    dishDetail : '1Kichererbsencurry mit Kartoffeln, Tomaten und Ingwer23',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Shai Paneer',
                    dishDetail : 'hausgemachter Käse mit Nüssen, Tomaten und Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Sabij Jalfrezi (mittelscharf)',
                    dishDetail : 'gemischtes Gemüse mit Paprika, Zwiebeln und Ingwer',
                    dishPrice: 11.00,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Malai Koftas',
                    dishDetail : 'Klößchen aus Gemüse und Paneer mit Nüssen gefüllt und mit Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 10,
                    dishName: 'Nawratan Korma',
                    dishDetail : 'gemischtes Gemüse mit Joghurt, Cashewnüssen und Mandel-Sahnesauce',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
                {
                    dishId: 11,
                    dishName: 'Dal Makni',
                    dishDetail : 'indische Linsen mit Ingwer, Koriander und Butter',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
            ],
        },


        {
            tiId: 9,
            titleName: 'Huhn-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Papadam (2 Stück)',
                    dishDetail : 'hauchdünne, gewürzte Linsenfladen',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Gemischte Vorspeisen (für 2 Personen)',
                    dishDetail : 'mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Vegetable Samosa (2 Stück)',
                    dishDetail : 'Pastetchen mit frischem Gemüse gefüllt',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Chicken Pakoras',
                    dishDetail : 'Hähchenstücke in Kicherebsenmehl gebacken',
                    dishPrice: 5.00,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Onion Bhaji',
                    dishDetail : 'Zwiebeln in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Paneer Pakoras',
                    dishDetail : 'Käse in Kichererbsenmehl gebacken',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Gemüse Pakoras',
                    dishDetail : 'frisches Gemüse in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 10,
            titleName: 'Enten-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Malkatani Suppe',
                    dishDetail : 'mit Linsen, Reis und Hühnerfleisch',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Creme Soup',
                    dishDetail : 'Hühnercremesuppe',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Tomatensuppe',
                    dishDetail : 'frische Tomatencremesuppe',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Sabji Suppe',
                    dishDetail : 'indische Gemüsesuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Dal Suppe',
                    dishDetail : 'Linsensuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 11,
            titleName: 'Lamm-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Indian Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Gemischter Salat-Mango',
                    dishDetail : 'gemischter Salat mit indischem Käse und Mangostücken',
                    dishPrice: 6.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Gemischter Salat',
                    dishDetail : 'mit verschiedenem gemischten Salaten',
                    dishPrice: 4.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Chat',
                    dishDetail : 'Kichererbsen mit Kartoffeln, Tomaten, Zwiebeln und Joghurtsauce',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 12,
            titleName: 'Fisch-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Jannat Tikka Masala (pikant)',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Cashewnuss-Mandel-Sahnesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Butter Chicken',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Tomaten-Buttercremesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 13,
            titleName: 'Reisgerichte',
            list: [
                {
                    dishId: 1,
                    dishName: 'Lassan Nan',
                    dishDetail : 'frisches Hefebrot mit Knoblauch',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Butter Nan',
                    dishDetail : 'frisches Hefebrot mit Butter',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Raita Gurken',
                    dishDetail : 'Joghurt und Gurken',
                    dishPrice: 3.00,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Peschawari Nan',
                    dishDetail : 'frisches Hefebrot mit Nüssen und indischem Käse gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Nan',
                    dishDetail : 'blattförmiges Hefebrot vom Tandoor',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Keema Nan',
                    dishDetail : 'frisches Fladenbrot mit Lammhackfleisch gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Chappati',
                    dishDetail : 'frischer Vollkorn-Teigfladen vom Tandoor',
                    dishPrice: 2.40,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Podina Nan',
                    dishDetail : 'frisches Hefebrot mit indischer Minze',
                    dishPrice: 3.20,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Paneer Nan',
                    dishDetail : 'frisches Hefebrot mit indischem Käse gefüllt',
                    dishPrice: 3.90,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 14,
            titleName: 'Nachspeisen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mix Grill Platte',
                    dishDetail : 'etwas von jedem Grillgericht (mit Ausnahme von Jheenga Tandoori)',
                    dishPrice: 17.90,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Ente Tikka',
                    dishDetail : 'Entenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 15.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Malai Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Käse und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Jheenga Tandoori',
                    dishDetail : 'Riesengarnelen in Joghurt und Gewürzen mariniert',
                    dishPrice: 18.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Lamm Tikka',
                    dishDetail : 'Lammfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 16.80,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Murgh Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Pahari Tikka (scharf)',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Minze, frischem Koriander und grüner Peperoni mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 15,
            titleName: 'Alkoholfreie getränke',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mango Subji',
                    dishDetail : 'gemischtes Gemüse mit Mandel-Mango-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Bhindi Masala',
                    dishDetail : 'indische Okra mit Tomaten, Zwiebeln und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Mixed Vegetables',
                    dishDetail : 'gemischtes Gemüse mit Kokosnussmilch und Gewürzen',
                    dishPrice: 11.90,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Karahi Paneer',
                    dishDetail : 'hausgemachter indischer Käse mit Tomate, Paprika und Zwiebeln',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Masala',
                    dishDetail : '1Kichererbsencurry mit Kartoffeln, Tomaten und Ingwer23',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Shai Paneer',
                    dishDetail : 'hausgemachter Käse mit Nüssen, Tomaten und Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Sabij Jalfrezi (mittelscharf)',
                    dishDetail : 'gemischtes Gemüse mit Paprika, Zwiebeln und Ingwer',
                    dishPrice: 11.00,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Malai Koftas',
                    dishDetail : 'Klößchen aus Gemüse und Paneer mit Nüssen gefüllt und mit Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 10,
                    dishName: 'Nawratan Korma',
                    dishDetail : 'gemischtes Gemüse mit Joghurt, Cashewnüssen und Mandel-Sahnesauce',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
                {
                    dishId: 11,
                    dishName: 'Dal Makni',
                    dishDetail : 'indische Linsen mit Ingwer, Koriander und Butter',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 16,
            titleName: 'Warme vorspeisen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Papadam (2 Stück)',
                    dishDetail : 'hauchdünne, gewürzte Linsenfladen',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Gemischte Vorspeisen (für 2 Personen)',
                    dishDetail : 'mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Vegetable Samosa (2 Stück)',
                    dishDetail : 'Pastetchen mit frischem Gemüse gefüllt',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Chicken Pakoras',
                    dishDetail : 'Hähchenstücke in Kicherebsenmehl gebacken',
                    dishPrice: 5.00,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Onion Bhaji',
                    dishDetail : 'Zwiebeln in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Paneer Pakoras',
                    dishDetail : 'Käse in Kichererbsenmehl gebacken',
                    dishPrice: 5.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Gemüse Pakoras',
                    dishDetail : 'frisches Gemüse in Kichererbsenmehl gebacken',
                    dishPrice: 4.60,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 17,
            titleName: 'Suppen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Malkatani Suppe',
                    dishDetail : 'mit Linsen, Reis und Hühnerfleisch',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Creme Soup',
                    dishDetail : 'Hühnercremesuppe',
                    dishPrice: 4.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Tomatensuppe',
                    dishDetail : 'frische Tomatencremesuppe',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Sabji Suppe',
                    dishDetail : 'indische Gemüsesuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Dal Suppe',
                    dishDetail : 'Linsensuppe',
                    dishPrice: 3.90,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 18,
            titleName: 'Salate',
            list: [
                {
                    dishId: 1,
                    dishName: 'Indian Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Chicken Salat',
                    dishDetail : '',
                    dishPrice: 7.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Gemischter Salat-Mango',
                    dishDetail : 'gemischter Salat mit indischem Käse und Mangostücken',
                    dishPrice: 6.50,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Gemischter Salat',
                    dishDetail : 'mit verschiedenem gemischten Salaten',
                    dishPrice: 4.90,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Chat',
                    dishDetail : 'Kichererbsen mit Kartoffeln, Tomaten, Zwiebeln und Joghurtsauce',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 19,
            titleName: 'Beliebte gerichte',
            list: [
                {
                    dishId: 1,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Jannat Tikka Masala (pikant)',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Cashewnuss-Mandel-Sahnesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Butter Chicken',
                    dishDetail : 'mariniertes und gegrilltes Hähnchenbrustfilet mit Tomaten-Buttercremesauce',
                    dishPrice: 13.80,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 20,
            titleName: 'Beilagen',
            list: [
                {
                    dishId: 1,
                    dishName: 'Lassan Nan',
                    dishDetail : 'frisches Hefebrot mit Knoblauch',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Butter Nan',
                    dishDetail : 'frisches Hefebrot mit Butter',
                    dishPrice: 3.30,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Raita Gurken',
                    dishDetail : 'Joghurt und Gurken',
                    dishPrice: 3.00,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Peschawari Nan',
                    dishDetail : 'frisches Hefebrot mit Nüssen und indischem Käse gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Nan',
                    dishDetail : 'blattförmiges Hefebrot vom Tandoor',
                    dishPrice: 2.60,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Keema Nan',
                    dishDetail : 'frisches Fladenbrot mit Lammhackfleisch gefüllt',
                    dishPrice: 4.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Chappati',
                    dishDetail : 'frischer Vollkorn-Teigfladen vom Tandoor',
                    dishPrice: 2.40,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Podina Nan',
                    dishDetail : 'frisches Hefebrot mit indischer Minze',
                    dishPrice: 3.20,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Paneer Nan',
                    dishDetail : 'frisches Hefebrot mit indischem Käse gefüllt',
                    dishPrice: 3.90,
                    dishCount: 0,
                }
            ],
        },
        {
            tiId: 21,
            titleName: 'Spezialitäten aus dem tandoor',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mix Grill Platte',
                    dishDetail : 'etwas von jedem Grillgericht (mit Ausnahme von Jheenga Tandoori)',
                    dishPrice: 17.90,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Ente Tikka',
                    dishDetail : 'Entenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 15.80,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Malai Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Käse und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Jheenga Tandoori',
                    dishDetail : 'Riesengarnelen in Joghurt und Gewürzen mariniert',
                    dishPrice: 18.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Lamm Tikka',
                    dishDetail : 'Lammfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 16.80,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Murgh Tikka',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt und Gewürzen mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Pahari Tikka (scharf)',
                    dishDetail : 'Hähnchenbrustfilet in Joghurt, Minze, frischem Koriander und grüner Peperoni mariniert',
                    dishPrice: 13.80,
                    dishCount: 0,
                },
            ],
        },
        {
            tiId: 22,
            titleName: 'Vegetarische-spezialitäten',
            list: [
                {
                    dishId: 1,
                    dishName: 'Mango Subji',
                    dishDetail : 'gemischtes Gemüse mit Mandel-Mango-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 2,
                    dishName: 'Bhindi Masala',
                    dishDetail : 'indische Okra mit Tomaten, Zwiebeln und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 3,
                    dishName: 'Mixed Vegetables',
                    dishDetail : 'gemischtes Gemüse mit Kokosnussmilch und Gewürzen',
                    dishPrice: 11.90,
                    dishCount: 0,
                },
                {
                    dishId: 4,
                    dishName: 'Karahi Paneer',
                    dishDetail : 'hausgemachter indischer Käse mit Tomate, Paprika und Zwiebeln',
                    dishPrice: 12.50,
                    dishCount: 0,
                },
                {
                    dishId: 5,
                    dishName: 'Channa Masala',
                    dishDetail : '1Kichererbsencurry mit Kartoffeln, Tomaten und Ingwer23',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 6,
                    dishName: 'Shai Paneer',
                    dishDetail : 'hausgemachter Käse mit Nüssen, Tomaten und Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 7,
                    dishName: 'Palak Paneer',
                    dishDetail : 'Rahmspinat mit hausgemachtem Käse und Ingwer',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 8,
                    dishName: 'Sabij Jalfrezi (mittelscharf)',
                    dishDetail : 'gemischtes Gemüse mit Paprika, Zwiebeln und Ingwer',
                    dishPrice: 11.00,
                    dishCount: 0,
                },
                {
                    dishId: 9,
                    dishName: 'Malai Koftas',
                    dishDetail : 'Klößchen aus Gemüse und Paneer mit Nüssen gefüllt und mit Mandel-Sahnesauce',
                    dishPrice: 11.50,
                    dishCount: 0,
                },
                {
                    dishId: 10,
                    dishName: 'Nawratan Korma',
                    dishDetail : 'gemischtes Gemüse mit Joghurt, Cashewnüssen und Mandel-Sahnesauce',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
                {
                    dishId: 11,
                    dishName: 'Dal Makni',
                    dishDetail : 'indische Linsen mit Ingwer, Koriander und Butter',
                    dishPrice: 10.50,
                    dishCount: 0,
                },
            ],
        },




/////////////////////////////////////////////////////////
        
    ],
    extra: 0,
}
const reducer = (state = initState, action) => {
    // console.log("Clicked : " + action.payload.tiId + ' / ' + action.payload.id);
    console.log(action.payload);
    switch (action.type) {
        case 'PLUS': {
            state?.titleList?.forEach(tiEl => {
                if (tiEl.tiId === action.tiId) {
                    tiEl.list?.forEach(el => {
                        if (el.dishId === action.id) {
                            if (el.dishCount === 0) state.countDish++;
                            el.dishCount++;
                            state.totalPrice += el.dishPrice;
                        }
                    });
                }
            })
            // console.log(state);
            // state.extra++;
            return { ...state };
        }
        case 'MINUS': {
            state?.titleList?.forEach(tiEl => {
                if (tiEl.tiId === action.tiId) {
                    tiEl.list?.forEach(el => {
                        if (el.dishId === action.id) {
                            if (el.dishCount !== 0) el.dishCount--;
                            if (el.dishCount === 0) state.countDish--;
                            state.totalPrice -= el.dishPrice;
                        }
                    })
                }
            })
            // console.log(state);
            // state.extra++;
            return { ...state };
        }
        default: return state
    }

}

export default reducer;