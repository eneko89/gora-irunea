angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('D6', function($scope) {
  $scope.title = "6 Igandea / Domingo";
  $scope.events = [
    { hour: '14:00', description: 'Irekiera / Apertura' },
    { hour: '16:00', description: 'Kontzertuak / Conciertos: Lubaki, Iparfolk, Esne Beltza, On, Tracción, DJ Göo!' }
  ];
})

.controller('D7', function($scope) {
  $scope.title = "7 Astelehena / Lunes";
  $scope.events = [
    { hour: '17:30', description: 'Serigrafia tailerra (txikientzat aproposa) / Taller de serigrafía (apropiado para los txikis)' },
    { hour: '19:30', description: 'Kontzertuak / Conciertos: Estricalla, Proyecto pez, NX, Governors.' }
  ];
})

.controller('D8', function($scope) {
  $scope.title = "8 Asteartea / Martes (Txikien eguna)";
  $scope.events = [
    { hour: '11:00', description: 'Txiki jolasak, kutxa sensorialak, errekamari, diana / Juegos de txikis, cajas sensoriales, errekamari, diana' },
    { hour: '12:30', description: 'Erraldoi topaketa, zezenak eta dantzak / Encuentro de gigantes, toros y bailes' },
    { hour: '14:00', description: 'Bazkari txiki / Almuerzo de txikis' },
    { hour: '17:00', description: 'Antzerkia / Teatro: Arrantzara Dantzan (Irrien Lagunak)' },
    { hour: '19:00', description: 'Kontzertuak / Conciertos: Motxila 21, Irrien Lagunak Egin, Irri, Betagarri, Albaro El Columpio, Asesino DJ' }
  ];
})

.controller('D9', function($scope) {
  $scope.title = "9 Asteazkena / Miércoles";
  $scope.events = [
    { hour: '11:30', description: 'Psikomotrizitate tailerra / Taller de psicomotricidad' },
    { hour: '14:00', description: 'Bullicioko bazkaria / Comida de Bullicio' },
    { hour: '17:00', description: 'Helduentzako bakarrizketak, Pantxika / Monólogos para mayores, Pantxika' },
    { hour: '17:00', description: 'Zirko tailerra ohe elastikoekin / Taller de circo con camas elásticas' },
    { hour: '18:00', description: 'Zirika Zirkus + Adardunak' },
    { hour: '19:45', description: 'Kontzertuak / Conciertos: Las Valium, La Vamos a Liar, DJ Tirri & Tery (Jai Alai Guateque)' }
  ];
})

.controller('D10', function($scope) {
  $scope.title = "10 Osteguna / Jueves";
  $scope.events = [
    { hour: '11:00', description: 'Nafarroako ardo ekologiko eta gazta ekologiko dastaketa / Cata de Vino Ecológico de Navarra y de queso ecológico' },
    { hour: '12:00', description: 'Buru handiak tailerra, Virginia Imaz (Oihulari Klown) "Sex o no sex" / Taller de cabezudos, Virginia Imaz (Oihulari Klown) "Sex o no sex"' },
    { hour: '13:00', description: 'Txikientzako antzerkia, teatro para txikis: "El gran telón que cubre el mundo" (El Pirata Zein)' },
    { hour: '14:00', description: 'San Fermin peñako bazkaria / Comida de la peña San Fermín' },
    { hour: '17:00', description: 'Disco txiki, forjaketa erakustaldia Forjas Brun-en eskutik / Disco txiki, demostración de forjado de manos de Forjas Brun' },
    { hour: '19:00', description: 'Talo tailerra, DJ Tailerra DJ Jotatxorekin / Taller de talo, taller de DJ con DJ Jotatxo' },
    { hour: '19:30', description: 'Kontzertuak / Conciertos: Radikal Fruit, Itziarren Semeak, Trikiteens' }
  ];
})

.controller('D11', function($scope) {
  $scope.title = "11 Ostirala / Viernes (Gazte eguna)";
  $scope.events = [
    { hour: '11:30', description: 'Oharkabe dantzaldia / Baile con Oharkabe' },
    { hour: '13:30', description: 'Ekitaldia: Miren Amuriza, Irati Majuelo eta Ander Perez bertsolariekin + Gazte Peñak 10 urte - parodia / Ekitaldi con los bertsolaris Miren Amuriza, Irati Majuelo eta Ander Perez + Gazte Peñak 10 urte - parodia' },
    { hour: '14:15', description: 'Gazte bazkaria / Comida de los jóvenes' },
    { hour: '16:00', description: 'Herri olinpiadak elektro txarangarekin AZ-tik / Olimpiadas populares con electro charanga' },
    { hour: '18:30', description: 'Kontzertuak / Conciertos: Legez Kanpo, Arkada, Xaiko, Skatu, DJ Kreator' }
  ];
})

.controller('D12', function($scope) {
  $scope.title = "12 Larunbata / Sábado (Gora Iruñea eguna)";
  $scope.events = [
    { hour: '11:00', description: 'Zezenak, artisauak, Bizi Sagardoa! Sagardo jai mundiala! / Toros, artesanos, Bizi Sagardoa! Fiesta de la cerveza' },
    { hour: '11:30', description: 'Herri kirolak, Gynkana txiki / Deporte popular y Gyncana para txikis' },
    { hour: '13:00', description: 'Omenaldia / Homenaje, Bertso trama Julio Soto, Maialen Lujanbio, Amets Arzallus' },
    { hour: '14:30', description: 'Comida' },
    { hour: '16:30', description: 'Bertsolariak + Ostatu Ibiltaria / Bertsolaris + Ostatu Ibiltaria' },
    { hour: '16:30', description: 'Elektrtxaranga Alde Zaharretik jai gunera / Electrocharanga desde la parte vieja hasta el jaigune' },
    { hour: '18:00', description: 'Kontzertuak / Conciertos: Manolo Kabezabolo, Bad Sound System, Últimos Reyes, Herabe, Dkuajo'}
  ];
})

.controller('D13', function($scope) {
  $scope.title = "13 Igandea / Domingo (Dantza eguna)";
  $scope.events = [
    { hour: '10:00', description: 'Trenera ecológica navarra' },
    { hour: '11:00', description: 'Kamishibai' },
    { hour: '12:00', description: 'Ur jolasak, karrikadantza / Juegos de agua, karrikadantza' },
    { hour: '14:30', description: 'Dantzarien bazkaria / Comida de los dantzaris' },
    { hour: '17:00', description: 'Karikaturak / Caricaturas' },
    { hour: '17:00', description: 'Ribaforadako dantza autoktonoak / Bailes autóctonos de Ribaforada'},
    { hour: '18:00', description: 'Dantzara Plazara'},
    { hour: '20:00', description: 'Kontzertuak / Conciertos: Kashbad, Berri Txarrak, En Tol Sarmiento, Karlos Oisnaga, Lisabö DJ'}
  ];
})

.controller('D14', function($scope) {
  $scope.title = "14 Astelehena / Lunes (EH11 Kolore eguna)";
  $scope.events = [
    { hour: '9:30', description: 'Kultura Aniztasuna lehiaketa gastronomikoa / Concurso gastronómico Pluralidad Cultural' },
    { hour: '11:00', description: 'Herri indigenetako instrumentuekin tailerra / Taller con los instrumentos de los pueblos indígenas' },
    { hour: '12:00', description: 'Txikientzako jolasa / Juego para txikis' },
    { hour: '13:30', description: 'Bazkaria / Comida' },
    { hour: '16:15', description: 'Txotxongiloak / Marionetas: "La niña embrujada"' },
    { hour: '17:30', description: 'Kontzertuak / Conciertos: La Jodedera, ZTK RAP, Benation, Los Chicos del Maíz, DJ Bull'},
    { hour: '20:15', description: 'Sari banaketa / Reparto de premios' },
    { hour: '0:30', description: '2x1 barran / 2x1 en la barra' }
  ];
})