var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-cipanku', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/cipanku.png', bounds).addTo(map);
  map.fitBounds(bounds);
  
  L.control.mousePosition().addTo(map);

  var TemMarker = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:     [39, 51], // size of the icon
        shadowSize:   [0, 0], // size of the shadow
        iconAnchor:   [22, 51], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor:  [19, 0], // point from which the popup should open relative to the iconAnchor
        tooltipAnchor: [24, -30]
    }
  });
  var npcGenericIcon = new TemMarker({iconUrl: 'images/icons/npc.png'});
  var npcMovingIcon = new TemMarker({iconUrl: 'images/icons/npc-moving.png'});
  var npcVendorIcon = new TemMarker({iconUrl: 'images/icons/npc-vendor.png'});
  var npcClothingIcon = new TemMarker({iconUrl: 'images/icons/npc-clothing.png'});
  var npcFurnitureIcon = new TemMarker({iconUrl: 'images/icons/npc-furniture.png'});
  var npcCombatIcon = new TemMarker({iconUrl: 'images/icons/npc-combat.png'});
  var npcMovingCombatIcon = new TemMarker({iconUrl: 'images/icons/npc-moving-combat.png'});
  var npcProfessorKonstantinosIcon = new TemMarker({iconUrl: 'images/icons/professor-konstantinos.png'});
  var npcAdiaTurayIcon = new TemMarker({iconUrl: 'images/icons/adia-turay.png'});  
  var npcDigitalGuardIcon = new TemMarker({iconUrl: 'images/icons/npc-digital-guard.png'});
  
  var temporiumvendor = L.marker([331, 186.56], {title: 'temporiumvendor', icon: npcVendorIcon}).bindTooltip('Temporium Vendor', {className: 'tooltip'}).addTo(map);
  temporiumvendor._icon.classList.add('temporiumvendor');
  temporiumvendor._icon.classList.add('vendor');
  markers.push(temporiumvendor);
  var aiko = L.marker([329.13, 253], {title: 'aiko', icon: npcGenericIcon}).bindTooltip('Aiko', {className: 'tooltip'}).addTo(map);
  aiko._icon.classList.add('aiko');
  markers.push(aiko);
  var hideyo = L.marker([330.5, 195.75], {title: 'hideyo', icon: npcMovingIcon}).bindTooltip('Hideyo', {className: 'tooltip'}).addTo(map);
  hideyo._icon.classList.add('hideyo');
  hideyo._icon.classList.add('moving');
  markers.push(hideyo);
  var satoshi = L.marker([247, 231.63], {title: 'satoshi', icon: npcGenericIcon}).bindTooltip('Satoshi', {className: 'tooltip'}).addTo(map);
  satoshi._icon.classList.add('satoshi');
  markers.push(satoshi);
  var saeko = L.marker([257.25, 231.5], {title: 'saeko', icon: npcGenericIcon}).bindTooltip('Saeko', {className: 'tooltip'}).addTo(map);
  saeko._icon.classList.add('saeko');
  markers.push(saeko);
  var mirai = L.marker([295.5, 307.38], {title: 'mirai', icon: npcGenericIcon}).bindTooltip('Mirai', {className: 'tooltip'}).addTo(map);
  mirai._icon.classList.add('mirai');
  markers.push(mirai);
  var nami = L.marker([284.5, 262.38], {title: 'nami', icon: npcGenericIcon}).bindTooltip('Nami', {className: 'tooltip'}).addTo(map);
  nami._icon.classList.add('nami');
  markers.push(nami);
  var hakura = L.marker([294.88, 197.25], {title: 'hakura', icon: npcGenericIcon}).bindTooltip('Hakura', {className: 'tooltip'}).addTo(map);
  hakura._icon.classList.add('hakura');
  markers.push(hakura);
  var goro = L.marker([316.13, 267.63], {title: 'goro', icon: npcGenericIcon}).bindTooltip('Goro', {className: 'tooltip'}).addTo(map);
  goro._icon.classList.add('goro');
  markers.push(goro);
  var mjuni = L.marker([309.25, 310.63], {title: 'mjuni', icon: npcGenericIcon}).bindTooltip('Mjuni', {className: 'tooltip'}).addTo(map);
  mjuni._icon.classList.add('mjuni');
  markers.push(mjuni);
  var rin = L.marker([294.63, 203.5], {title: 'rin', icon: npcGenericIcon}).bindTooltip('Rin', {className: 'tooltip'}).addTo(map);
  rin._icon.classList.add('rin');
  markers.push(rin);
  var atsushi = L.marker([669.5, 859.23], {title: 'atsushi', icon: npcGenericIcon}).bindTooltip('Atsushi', {className: 'tooltip'}).addTo(map);
  atsushi._icon.classList.add('atsushi');
  markers.push(atsushi);
  var chie = L.marker([708.5, 748.46], {title: 'chie', icon: npcGenericIcon}).bindTooltip('Chie', {className: 'tooltip'}).addTo(map);
  chie._icon.classList.add('chie');
  markers.push(chie);
  var confusedlady = L.marker([655.75, 818.47], {title: 'confusedlady', icon: npcGenericIcon}).bindTooltip('Confused Lady', {className: 'tooltip'}).addTo(map);
  confusedlady._icon.classList.add('confusedlady');
  markers.push(confusedlady);
  var drjunko = L.marker([663.25, 782.21], {title: 'drjunko', icon: npcGenericIcon}).bindTooltip('Dr. Junko', {className: 'tooltip'}).addTo(map);
  drjunko._icon.classList.add('drjunko');
  markers.push(drjunko);
  var elderlypriest = L.marker([627, 728.45], {title: 'elderlypriest', icon: npcGenericIcon}).bindTooltip('Elderly Priest', {className: 'tooltip'}).addTo(map);
  elderlypriest._icon.classList.add('elderlypriest');
  markers.push(elderlypriest);
  var formertamer = L.marker([710.25, 770.46], {title: 'formertamer', icon: npcGenericIcon}).bindTooltip('Former Tamer', {className: 'tooltip'}).addTo(map);
  formertamer._icon.classList.add('formertamer');
  markers.push(formertamer);
  var grumpypriest = L.marker([707.25, 747.46], {title: 'grumpypriest', icon: npcGenericIcon}).bindTooltip('Grumpy Priest', {className: 'tooltip'}).addTo(map);
  grumpypriest._icon.classList.add('grumpypriest');
  markers.push(grumpypriest);
  var highpriest = L.marker([707.5, 758.71], {title: 'highpriest', icon: npcGenericIcon}).bindTooltip('High Priest', {className: 'tooltip'}).addTo(map);
  highpriest._icon.classList.add('highpriest');
  markers.push(highpriest);
  var hinata = L.marker([706.5, 764.21], {title: 'hinata', icon: npcGenericIcon}).bindTooltip('Hinata', {className: 'tooltip'}).addTo(map);
  hinata._icon.classList.add('hinata');
  markers.push(hinata);
  var hiromi = L.marker([652.5, 864.73], {title: 'hiromi', icon: npcGenericIcon}).bindTooltip('Hiromi', {className: 'tooltip'}).addTo(map);
  hiromi._icon.classList.add('hiromi');
  markers.push(hiromi);
  var homura = L.marker([706.5, 752.96], {title: 'homura', icon: npcGenericIcon}).bindTooltip('Homura', {className: 'tooltip'}).addTo(map);
  homura._icon.classList.add('homura');
  markers.push(homura);
  var imamu = L.marker([626.25, 782.96], {title: 'imamu', icon: npcGenericIcon}).bindTooltip('Imamu', {className: 'tooltip'}).addTo(map);
  imamu._icon.classList.add('imamu');
  markers.push(imamu);
  var imperturablepriest = L.marker([646.25, 777.71], {title: 'imperturablepriest', icon: npcGenericIcon}).bindTooltip('Imperturable Priest', {className: 'tooltip'}).addTo(map);
  imperturablepriest._icon.classList.add('imperturablepriest');
  markers.push(imperturablepriest);
  var keiku = L.marker([701.5, 756.46], {title: 'keiku', icon: npcGenericIcon}).bindTooltip('Keiku', {className: 'tooltip'}).addTo(map);
  keiku._icon.classList.add('keiku');
  markers.push(keiku);
  var koki = L.marker([626.5, 755.21], {title: 'koki', icon: npcGenericIcon}).bindTooltip('Koki', {className: 'tooltip'}).addTo(map);
  koki._icon.classList.add('koki');
  markers.push(koki);
  var malko = L.marker([627.25, 781.61], {title: 'malko', icon: npcGenericIcon}).bindTooltip('Malko', {className: 'tooltip'}).addTo(map);
  malko._icon.classList.add('malko');
  markers.push(malko);
  var martinetpriest = L.marker([664.25, 781.61], {title: 'martinetpriest', icon: npcGenericIcon}).bindTooltip('Martinet Priest', {className: 'tooltip'}).addTo(map);
  martinetpriest._icon.classList.add('martinetpriest');
  markers.push(martinetpriest);
  var anzu = L.marker([653.25, 863.48], {title: 'anzu', icon: npcGenericIcon}).bindTooltip('Anzu', {className: 'tooltip'}).addTo(map);
  anzu._icon.classList.add('anzu');
  markers.push(anzu);
  var masashiro = L.marker([662.5, 850.25], {title: 'masashiro', icon: npcGenericIcon}).bindTooltip('Masashiro', {className: 'tooltip'}).addTo(map);
  masashiro._icon.classList.add('masashiro');
  markers.push(masashiro);
  var masaki = L.marker([631.13, 828.24], {title: 'masaki', icon: npcGenericIcon}).bindTooltip('Masaki', {className: 'tooltip'}).addTo(map);
  masaki._icon.classList.add('masaki');
  markers.push(masaki);
  var mayu = L.marker([617, 767.6], {title: 'mayu', icon: npcGenericIcon}).bindTooltip('Mayu', {className: 'tooltip'}).addTo(map);
  mayu._icon.classList.add('mayu');
  markers.push(mayu);
  var michiru = L.marker([711.13, 750.48], {title: 'michiru', icon: npcGenericIcon}).bindTooltip('Michiru', {className: 'tooltip'}).addTo(map);
  michiru._icon.classList.add('michiru');
  markers.push(michiru);
  var miku = L.marker([626.75, 770.23], {title: 'miku', icon: npcGenericIcon}).bindTooltip('Miku', {className: 'tooltip'}).addTo(map);
  miku._icon.classList.add('miku');
  markers.push(miku);
  var mitsuru = L.marker([708.75, 761.98], {title: 'mitsuru', icon: npcGenericIcon}).bindTooltip('Mitsuru ', {className: 'tooltip'}).addTo(map);
  mitsuru._icon.classList.add('mitsuru');
  markers.push(mitsuru);
  var miyakianapprentice = L.marker([661.25, 733.35], {title: 'miyakianapprentice', icon: npcGenericIcon}).bindTooltip('Miyakian Apprentice', {className: 'tooltip'}).addTo(map);
  miyakianapprentice._icon.classList.add('miyakianapprentice');
  markers.push(miyakianapprentice);
  var miyakoyouth = L.marker([662.63, 837.5], {title: 'miyakoyouth', icon: npcGenericIcon}).bindTooltip('Miyako Youth', {className: 'tooltip'}).addTo(map);
  miyakoyouth._icon.classList.add('miyakoyouth');
  markers.push(miyakoyouth);
  var mizuki = L.marker([698.88, 748.23], {title: 'mizuki', icon: npcGenericIcon}).bindTooltip('Mizuki', {className: 'tooltip'}).addTo(map);
  mizuki._icon.classList.add('mizuki');
  markers.push(mizuki);
  var myrenginspector = L.marker([619.38, 783.98], {title: 'myrenginspector', icon: npcGenericIcon}).bindTooltip('MyrEng inspector', {className: 'tooltip'}).addTo(map);
  myrenginspector._icon.classList.add('myrenginspector');
  markers.push(myrenginspector);
  var pilgrimssupplies = L.marker([634.13, 828.62], {title: 'pilgrimssupplies', icon: npcVendorIcon}).bindTooltip("Pilgrim's Supplies", {className: 'tooltip'}).addTo(map);
  pilgrimssupplies._icon.classList.add('pilgrimssupplies');
  pilgrimssupplies._icon.classList.add('vendor');
  markers.push(pilgrimssupplies);
  var proudpriest = L.marker([706.75, 754.35], {title: 'proudpriest', icon: npcGenericIcon}).bindTooltip('Proud Priest', {className: 'tooltip'}).addTo(map);
  proudpriest._icon.classList.add('proudpriest');
  markers.push(proudpriest);
  var ryuji = L.marker([641.63, 775.98], {title: 'ryuji', icon: npcGenericIcon}).bindTooltip('Ryuji', {className: 'tooltip'}).addTo(map);
  ryuji._icon.classList.add('ryuji');
  markers.push(ryuji);
  var scholarlypriest = L.marker([712.38, 772.73], {title: 'scholarlypriest', icon: npcGenericIcon}).bindTooltip('Scholarly Priest', {className: 'tooltip'}).addTo(map);
  scholarlypriest._icon.classList.add('scholarlypriest');
  markers.push(scholarlypriest);
  var temtherapist = L.marker([699.75, 762.23], {title: 'temtherapist', icon: npcGenericIcon}).bindTooltip('TemTherapist', {className: 'tooltip'}).addTo(map);
  temtherapist._icon.classList.add('temtherapist');
  markers.push(temtherapist);
  var tiredpilgrim = L.marker([632.13, 811.43], {title: 'tiredpilgrim', icon: npcGenericIcon}).bindTooltip('Tired Pilgrim', {className: 'tooltip'}).addTo(map);
  tiredpilgrim._icon.classList.add('tiredpilgrim');
  markers.push(tiredpilgrim);
  var unemotionalpriest = L.marker([700, 747.98], {title: 'unemotionalpriest', icon: npcGenericIcon}).bindTooltip('Unemotional Priest', {className: 'tooltip'}).addTo(map);
  unemotionalpriest._icon.classList.add('unemotionalpriest');
  markers.push(unemotionalpriest);
  var untroubledpriestess = L.marker([697.88, 769.86], {title: 'untroubledpriestess', icon: npcGenericIcon}).bindTooltip('Untroubled Priestess', {className: 'tooltip'}).addTo(map);
  untroubledpriestess._icon.classList.add('untroubledpriestess');
  markers.push(untroubledpriestess);
  var akashi = L.marker([616.75, 211.78], {title: 'akashi', icon: npcGenericIcon}).bindTooltip('Akashi', {className: 'tooltip'}).addTo(map);
  akashi._icon.classList.add('akashi');
  markers.push(akashi);
  var akio = L.marker([584.13, 214.53], {title: 'akio', icon: npcGenericIcon}).bindTooltip('Akio', {className: 'tooltip'}).addTo(map);
  akio._icon.classList.add('akio');
  markers.push(akio);
  var akira = L.marker([626.13, 237.4], {title: 'akira', icon: npcGenericIcon}).bindTooltip('Akira', {className: 'tooltip'}).addTo(map);
  akira._icon.classList.add('akira');
  markers.push(akira);
  var asooka = L.marker([529.25, 211.05], {title: 'asooka', icon: npcGenericIcon}).bindTooltip('Asooka', {className: 'tooltip'}).addTo(map);
  asooka._icon.classList.add('asooka');
  markers.push(asooka);
  var azuztawiejaz = L.marker([602.75, 230.55], {title: 'azuztawiejaz', icon: npcGenericIcon}).bindTooltip('Azuztawiejaz', {className: 'tooltip'}).addTo(map);
  azuztawiejaz._icon.classList.add('azuztawiejaz');
  markers.push(azuztawiejaz);
  var betisuke = L.marker([536.25, 208.05], {title: 'betisuke', icon: npcGenericIcon}).bindTooltip('Betisuke', {className: 'tooltip'}).addTo(map);
  betisuke._icon.classList.add('betisuke');
  markers.push(betisuke);
  var cipankiforeman = L.marker([596, 252.3], {title: 'cipankiforeman', icon: npcGenericIcon}).bindTooltip('Cipanki Foreman', {className: 'tooltip'}).addTo(map);
  cipankiforeman._icon.classList.add('cipankiforeman');
  markers.push(cipankiforeman);
  var forgetfulneoedan = L.marker([577.75, 156.32], {title: 'forgetfulneoedan', icon: npcMovingIcon}).bindTooltip('Forgetful Neoedan', {className: 'tooltip'}).addTo(map);
  forgetfulneoedan._icon.classList.add('forgetfulneoedan');
  forgetfulneoedan._icon.classList.add('moving');
  markers.push(forgetfulneoedan);
  var formerdojomaster = L.marker([602, 159.57], {title: 'formerdojomaster', icon: npcGenericIcon}).bindTooltip('Former Dojo Master', {className: 'tooltip'}).addTo(map);
  formerdojomaster._icon.classList.add('formerdojomaster');
  markers.push(formerdojomaster);
  var innovativeentrepreneur = L.marker([545.63, 156.29], {title: 'innovativeentrepreneur', icon: npcGenericIcon}).bindTooltip('Innovative Entrepreneur', {className: 'tooltip'}).addTo(map);
  innovativeentrepreneur._icon.classList.add('innovativeentrepreneur');
  markers.push(innovativeentrepreneur);
  var jennie = L.marker([528.75, 209.4], {title: 'jennie', icon: npcGenericIcon}).bindTooltip('Jennie', {className: 'tooltip'}).addTo(map);
  jennie._icon.classList.add('jennie');
  markers.push(jennie);
  var animeenthusiast = L.marker([591.9, 206.38], {title: 'animeenthusiast', icon: npcGenericIcon}).bindTooltip('Anime Enthusiast', {className: 'tooltip'}).addTo(map);
  animeenthusiast._icon.classList.add('animeenthusiast');
  markers.push(animeenthusiast);
  var arburianapprentice = L.marker([559, 143.3], {title: 'arburianapprentice', icon: npcGenericIcon}).bindTooltip('Arburian Apprentice', {className: 'tooltip'}).addTo(map);
  arburianapprentice._icon.classList.add('arburianapprentice');
  markers.push(arburianapprentice);
  var arburiantamer = L.marker([559.5, 146.4], {title: 'arburiantamer', icon: npcGenericIcon}).bindTooltip('Arburian Tamer', {className: 'tooltip'}).addTo(map);
  arburiantamer._icon.classList.add('arburiantamer');
  markers.push(arburiantamer);
  var barowner = L.marker([580.9, 171.8], {title: 'barowner', icon: npcGenericIcon}).bindTooltip('Bar Owner', {className: 'tooltip'}).addTo(map);
  barowner._icon.classList.add('barowner');
  markers.push(barowner);
  var biejermano = L.marker([536.8, 217.3], {title: 'biejermano', icon: npcGenericIcon}).bindTooltip('Biejermano', {className: 'tooltip'}).addTo(map);
  biejermano._icon.classList.add('biejermano');
  markers.push(biejermano);
  var cipankiarchitect = L.marker([563.4, 175.8], {title: 'cipankiarchitect', icon: npcGenericIcon}).bindTooltip('Cipanki Architect', {className: 'tooltip'}).addTo(map);
  cipankiarchitect._icon.classList.add('cipankiarchitect');
  markers.push(cipankiarchitect);
  var citizendataoffice = L.marker([536.5, 175.6], {title: 'citizendataoffice', icon: npcGenericIcon}).bindTooltip('Citizen Data Office', {className: 'tooltip'}).addTo(map);
  citizendataoffice._icon.classList.add('citizendataoffice');
  markers.push(citizendataoffice);
  var cipankibarman = L.marker([574.4, 169], {title: 'cipankibarman', icon: npcGenericIcon}).bindTooltip('Cipanki Barman', {className: 'tooltip'}).addTo(map);
  cipankibarman._icon.classList.add('cipankibarman');
  markers.push(cipankibarman);
  var cipankichef = L.marker([559.9, 141.1], {title: 'cipankichef', icon: npcGenericIcon}).bindTooltip('Cipanki Chef', {className: 'tooltip'}).addTo(map);
  cipankichef._icon.classList.add('cipankichef');
  markers.push(cipankichef);
  var cipankineighbour = L.marker([561.4, 196.6], {title: 'cipankineighbour', icon: npcGenericIcon}).bindTooltip('Cipanki Neighbour', {className: 'tooltip'}).addTo(map);
  cipankineighbour._icon.classList.add('cipankineighbour');
  markers.push(cipankineighbour);
  var cipankipatron = L.marker([574, 171.3], {title: 'cipankipatron', icon: npcGenericIcon}).bindTooltip('Cipanki Patron', {className: 'tooltip'}).addTo(map);
  cipankipatron._icon.classList.add('cipankipatron');
  markers.push(cipankipatron);
  var cipankuguide = L.marker([556.9, 141], {title: 'cipankuguide', icon: npcGenericIcon}).bindTooltip('Cipanku Guide', {className: 'tooltip'}).addTo(map);
  cipankuguide._icon.classList.add('cipankuguide');
  markers.push(cipankuguide);
  var coffeeafcionado = L.marker([518.3, 186.4], {title: 'coffeeafcionado', icon: npcGenericIcon}).bindTooltip('Coffee Afcionado', {className: 'tooltip'}).addTo(map);
  coffeeafcionado._icon.classList.add('coffeeafcionado');
  markers.push(coffeeafcionado);
  var discerningtourist = L.marker([560.5, 146.9], {title: 'discerningtourist', icon: npcGenericIcon}).bindTooltip('Discerning Tourist', {className: 'tooltip'}).addTo(map);
  discerningtourist._icon.classList.add('discerningtourist');
  markers.push(discerningtourist);
  var drowsyguest = L.marker([561, 144.8], {title: 'drowsyguest', icon: npcGenericIcon}).bindTooltip('Drowsy Guest', {className: 'tooltip'}).addTo(map);
  drowsyguest._icon.classList.add('drowsyguest');
  markers.push(drowsyguest);
  var elliot = L.marker([536.1, 175.4], {title: 'elliot', icon: npcGenericIcon}).bindTooltip('Elliot', {className: 'tooltip'}).addTo(map);
  elliot._icon.classList.add('elliot');
  markers.push(elliot);
  var fiorella = L.marker([588.9, 143.6], {title: 'fiorella', icon: npcGenericIcon}).bindTooltip('Fiorella', {className: 'tooltip'}).addTo(map);
  fiorella._icon.classList.add('fiorella');
  markers.push(fiorella);
  var furnituresalesman = L.marker([622.3, 149.4], {title: 'furnituresalesman', icon: npcFurnitureIcon}).bindTooltip('Furniture Salesman', {className: 'tooltip'}).addTo(map);
  furnituresalesman._icon.classList.add('furnituresalesman');
  furnituresalesman._icon.classList.add('furniture');
  markers.push(furnituresalesman);
  var gossipyneighbour = L.marker([565.8, 196.6], {title: 'gossipyneighbour', icon: npcGenericIcon}).bindTooltip('Gossipy Neighbour', {className: 'tooltip'}).addTo(map);
  gossipyneighbour._icon.classList.add('gossipyneighbour');
  markers.push(gossipyneighbour);
  var headadministrator = L.marker([542.6, 171.6], {title: 'headadministrator', icon: npcGenericIcon}).bindTooltip('Head Administrator', {className: 'tooltip'}).addTo(map);
  headadministrator._icon.classList.add('headadministrator');
  markers.push(headadministrator);
  var kadosensei = L.marker([562.1, 225.9], {title: 'kadosensei', icon: npcGenericIcon}).bindTooltip('Kado Sensei', {className: 'tooltip'}).addTo(map);
  kadosensei._icon.classList.add('kadosensei');
  markers.push(kadosensei);
  var kadoka = L.marker([566.1, 224.8], {title: 'kadoka', icon: npcGenericIcon}).bindTooltip('Kadoka', {className: 'tooltip'}).addTo(map);
  kadoka._icon.classList.add('kadoka');
  markers.push(kadoka);
  var kaori = L.marker([560.1, 217.6], {title: 'kaori', icon: npcMovingIcon}).bindTooltip('Kaori', {className: 'tooltip'}).addTo(map);
  kaori._icon.classList.add('kaori');
  kaori._icon.classList.add('moving');
  markers.push(kaori);
  var keenreader = L.marker([572.6, 171.8], {title: 'keenreader', icon: npcGenericIcon}).bindTooltip('Keen Reader', {className: 'tooltip'}).addTo(map);
  keenreader._icon.classList.add('keenreader');
  markers.push(keenreader);
  var kenta = L.marker([622.1, 134], {title: 'kenta', icon: npcGenericIcon}).bindTooltip('Kenta', {className: 'tooltip'}).addTo(map);
  kenta._icon.classList.add('kenta');
  markers.push(kenta);
  var laconius = L.marker([592, 143.25], {title: 'laconius', icon: npcGenericIcon}).bindTooltip('Laconius', {className: 'tooltip'}).addTo(map);
  laconius._icon.classList.add('laconius');
  markers.push(laconius);
  var loali = L.marker([541.9, 175.8], {title: 'loali', icon: npcGenericIcon}).bindTooltip('Loali', {className: 'tooltip'}).addTo(map);
  loali._icon.classList.add('loali');
  markers.push(loali);
  var localcinephile = L.marker([525.75, 239], {title: 'localcinephile', icon: npcGenericIcon}).bindTooltip('Local Cinephile', {className: 'tooltip'}).addTo(map);
  localcinephile._icon.classList.add('localcinephile');
  markers.push(localcinephile);
  var mascotdude = L.marker([597.4, 229.6], {title: 'mascotdude', icon: npcGenericIcon}).bindTooltip('Mascot Dude', {className: 'tooltip'}).addTo(map);
  mascotdude._icon.classList.add('mascotdude');
  markers.push(mascotdude);
  var nanami = L.marker([542.4, 190.6], {title: 'nanami', icon: npcMovingIcon}).bindTooltip('Nanami', {className: 'tooltip'}).addTo(map);
  nanami._icon.classList.add('nanami');
  nanami._icon.classList.add('moving');
  markers.push(nanami);
  var nantolabsreception = L.marker([617.1, 197.6], {title: 'nantolabsreception', icon: npcGenericIcon}).bindTooltip('Nanto Labs Reception', {className: 'tooltip'}).addTo(map);
  nantolabsreception._icon.classList.add('nantolabsreception');
  markers.push(nantolabsreception);
  var natsuko = L.marker([620.3, 147.6], {title: 'natsuko', icon: npcGenericIcon}).bindTooltip('Natsuko', {className: 'tooltip'}).addTo(map);
  natsuko._icon.classList.add('natsuko');
  markers.push(natsuko);
  var neoedanchild = L.marker([583.1, 245.8], {title: 'neoedanchild', icon: npcGenericIcon}).bindTooltip('Neoedan Child', {className: 'tooltip'}).addTo(map);
  neoedanchild._icon.classList.add('neoedanchild');
  markers.push(neoedanchild);
  var neoedofashions = L.marker([622.6, 223.9], {title: 'neoedofashions', icon: npcClothingIcon}).bindTooltip('Neoedo Fashions', {className: 'tooltip'}).addTo(map);
  neoedofashions._icon.classList.add('neoedofashions');
  neoedofashions._icon.classList.add('clothing');
  markers.push(neoedofashions);
  var neoedopalace = L.marker([559, 141.1], {title: 'neoedopalace', icon: npcGenericIcon}).bindTooltip('Neoedo Palace', {className: 'tooltip'}).addTo(map);
  neoedopalace._icon.classList.add('neoedopalace');
  markers.push(neoedopalace);
  var neoedotemporium = L.marker([569.3, 236.9], {title: 'neoedotemporium', icon: npcVendorIcon}).bindTooltip('Neoedo Temporium', {className: 'tooltip'}).addTo(map);
  neoedotemporium._icon.classList.add('neoedotemporium');
  neoedotemporium._icon.classList.add('vendor');
  markers.push(neoedotemporium);
  var niceneighbor = L.marker([532.6, 226], {title: 'niceneighbor', icon: npcGenericIcon}).bindTooltip('Nice Neighbor', {className: 'tooltip'}).addTo(map);
  niceneighbor._icon.classList.add('niceneighbor');
  markers.push(niceneighbor);
  var ning = L.marker([531.5, 203.6], {title: 'ning', icon: npcGenericIcon}).bindTooltip('Ning', {className: 'tooltip'}).addTo(map);
  ning._icon.classList.add('ning');
  markers.push(ning);
  var nozomi = L.marker([618.5, 145.3], {title: 'nozomi', icon: npcGenericIcon}).bindTooltip('Nozomi', {className: 'tooltip'}).addTo(map);
  nozomi._icon.classList.add('nozomi');
  markers.push(nozomi);
  var poolshark = L.marker([576.6, 174.1], {title: 'poolshark', icon: npcGenericIcon}).bindTooltip('Pool Shark', {className: 'tooltip'}).addTo(map);
  poolshark._icon.classList.add('poolshark');
  markers.push(poolshark);
  var proudfather = L.marker([540.9, 172.6], {title: 'proudfather', icon: npcGenericIcon}).bindTooltip('Proud Father', {className: 'tooltip'}).addTo(map);
  proudfather._icon.classList.add('proudfather');
  markers.push(proudfather);
  var relaxingpeasant = L.marker([580.5, 169.25], {title: 'relaxingpeasant', icon: npcGenericIcon}).bindTooltip('Relaxing Peasant', {className: 'tooltip'}).addTo(map);
  relaxingpeasant._icon.classList.add('relaxingpeasant');
  markers.push(relaxingpeasant);
  var ren = L.marker([553.4, 145.5], {title: 'ren', icon: npcGenericIcon}).bindTooltip('Ren', {className: 'tooltip'}).addTo(map);
  ren._icon.classList.add('ren');
  markers.push(ren);
  var rookieplayer = L.marker([582.6, 169.4], {title: 'rookieplayer', icon: npcGenericIcon}).bindTooltip('Rookie Player', {className: 'tooltip'}).addTo(map);
  rookieplayer._icon.classList.add('rookieplayer');
  markers.push(rookieplayer);
  var ruby = L.marker([541, 214.6], {title: 'ruby', icon: npcGenericIcon}).bindTooltip('Ruby', {className: 'tooltip'}).addTo(map);
  ruby._icon.classList.add('ruby');
  markers.push(ruby);
  var satoko = L.marker([579.6, 170.1], {title: 'satoko', icon: npcGenericIcon}).bindTooltip('Satoko', {className: 'tooltip'}).addTo(map);
  satoko._icon.classList.add('satoko');
  markers.push(satoko);
  var satoru = L.marker([539, 216], {title: 'satoru', icon: npcGenericIcon}).bindTooltip('Satoru', {className: 'tooltip'}).addTo(map);
  satoru._icon.classList.add('satoru');
  markers.push(satoru);
  var sayeon = L.marker([543.6, 210.8], {title: 'sayeon', icon: npcGenericIcon}).bindTooltip('Sayeon', {className: 'tooltip'}).addTo(map);
  sayeon._icon.classList.add('sayeon');
  markers.push(sayeon);
  var snottyguest = L.marker([561.3, 145.8], {title: 'snottyguest', icon: npcGenericIcon}).bindTooltip('Snotty Guest', {className: 'tooltip'}).addTo(map);
  snottyguest._icon.classList.add('snottyguest');
  markers.push(snottyguest);
  var sora = L.marker([531.4, 169.3], {title: 'sora', icon: npcGenericIcon}).bindTooltip('Sora', {className: 'tooltip'}).addTo(map);
  sora._icon.classList.add('sora');
  markers.push(sora);
  var taejong = L.marker([527.8, 204.5], {title: 'taejong', icon: npcGenericIcon}).bindTooltip('Taejong', {className: 'tooltip'}).addTo(map);
  taejong._icon.classList.add('taejong');
  markers.push(taejong);
  var takaya = L.marker([615.6, 194.5], {title: 'takaya', icon: npcGenericIcon}).bindTooltip('Takaya', {className: 'tooltip'}).addTo(map);
  takaya._icon.classList.add('takaya');
  markers.push(takaya);
  var tallgirl = L.marker([624.5, 222.9], {title: 'tallgirl', icon: npcGenericIcon}).bindTooltip('Tall Girl', {className: 'tooltip'}).addTo(map);
  tallgirl._icon.classList.add('tallgirl');
  markers.push(tallgirl);
  var teafanatic = L.marker([524.8, 197.5], {title: 'teafanatic', icon: npcGenericIcon}).bindTooltip('Tea Fanatic', {className: 'tooltip'}).addTo(map);
  teafanatic._icon.classList.add('teafanatic');
  markers.push(teafanatic);
  var teeoway = L.marker([525.8, 211.8], {title: 'teeoway', icon: npcGenericIcon}).bindTooltip('Teeoway', {className: 'tooltip'}).addTo(map);
  teeoway._icon.classList.add('teeoway');
  markers.push(teeoway);
  var temporiumemployee = L.marker([563.4, 223.1], {title: 'temporiumemployee', icon: npcGenericIcon}).bindTooltip('Temporium Employee', {className: 'tooltip'}).addTo(map);
  temporiumemployee._icon.classList.add('temporiumemployee');
  markers.push(temporiumemployee);
  var temtemregistration = L.marker([541.5, 168.3], {title: 'temtemregistration', icon: npcGenericIcon}).bindTooltip('Temtem Registration', {className: 'tooltip'}).addTo(map);
  temtemregistration._icon.classList.add('temtemregistration');
  markers.push(temtemregistration);
  var travelingtamer = L.marker([576, 173.5], {title: 'travelingtamer', icon: npcGenericIcon}).bindTooltip('Traveling Tamer', {className: 'tooltip'}).addTo(map);
  travelingtamer._icon.classList.add('travelingtamer');
  markers.push(travelingtamer);
  var tronkeeto = L.marker([535.3, 216.3], {title: 'tronkeeto', icon: npcGenericIcon}).bindTooltip('Tronkeeto', {className: 'tooltip'}).addTo(map);
  tronkeeto._icon.classList.add('tronkeeto');
  markers.push(tronkeeto);
  var tucmanipatron = L.marker([581.44, 170.69], {title: 'tucmanipatron', icon: npcGenericIcon}).bindTooltip('Tucmani Patron', {className: 'tooltip'}).addTo(map);
  tucmanipatron._icon.classList.add('tucmanipatron');
  markers.push(tucmanipatron);
  var veteranplayer = L.marker([581.06, 173.5], {title: 'veteranplayer', icon: npcGenericIcon}).bindTooltip('Veteran Player', {className: 'tooltip'}).addTo(map);
  veteranplayer._icon.classList.add('veteranplayer');
  markers.push(veteranplayer);
  var visitingtamer = L.marker([577.1, 172.4], {title: 'visitingtamer', icon: npcGenericIcon}).bindTooltip('Visiting Tamer', {className: 'tooltip'}).addTo(map);
  visitingtamer._icon.classList.add('visitingtamer');
  markers.push(visitingtamer);
  var wanderingtamer = L.marker([575.5, 169.8], {title: 'wanderingtamer', icon: npcGenericIcon}).bindTooltip('Wandering Tamer', {className: 'tooltip'}).addTo(map);
  wanderingtamer._icon.classList.add('wanderingtamer');
  markers.push(wanderingtamer);
  var worriedcipanki = L.marker([552.75, 232.3], {title: 'worriedcipanki', icon: npcMovingIcon}).bindTooltip('Worried Cipanki', {className: 'tooltip'}).addTo(map);
  worriedcipanki._icon.classList.add('worriedcipanki');
  worriedcipanki._icon.classList.add('moving');
  markers.push(worriedcipanki);
  var yeonyung = L.marker([532.3, 204], {title: 'yeonyung', icon: npcGenericIcon}).bindTooltip('Yeonyung', {className: 'tooltip'}).addTo(map);
  yeonyung._icon.classList.add('yeonyung');
  markers.push(yeonyung);
  var yuri = L.marker([539, 209.5], {title: 'yuri', icon: npcGenericIcon}).bindTooltip('Yuri', {className: 'tooltip'}).addTo(map);
  yuri._icon.classList.add('yuri');
  markers.push(yuri);
  var benjamin = L.marker([447.8, 291.5], {title: 'benjamin', icon: npcGenericIcon}).bindTooltip('Benjamin', {className: 'tooltip'}).addTo(map);
  benjamin._icon.classList.add('benjamin');
  markers.push(benjamin);
  var cipankuguide = L.marker([362.1, 182.6], {title: 'cipankuguide', icon: npcGenericIcon}).bindTooltip('Cipanku Guide', {className: 'tooltip'}).addTo(map);
  cipankuguide._icon.classList.add('cipankuguide');
  markers.push(cipankuguide);
  var criticalapprentice = L.marker([410.4, 213.9], {title: 'criticalapprentice', icon: npcGenericIcon}).bindTooltip('Critical Apprentice', {className: 'tooltip'}).addTo(map);
  criticalapprentice._icon.classList.add('criticalapprentice');
  markers.push(criticalapprentice);
  var dojousher = L.marker([414.4, 268], {title: 'dojousher', icon: npcGenericIcon}).bindTooltip('Dojo Usher', {className: 'tooltip'}).addTo(map);
  dojousher._icon.classList.add('dojousher');
  markers.push(dojousher);
  var elderlyneoedan = L.marker([408.8, 251.4], {title: 'elderlyneoedan', icon: npcGenericIcon}).bindTooltip('Elderly Neoedan', {className: 'tooltip'}).addTo(map);
  elderlyneoedan._icon.classList.add('elderlyneoedan');
  markers.push(elderlyneoedan);
  var joji = L.marker([357.8, 195.4], {title: 'joji', icon: npcGenericIcon}).bindTooltip('Joji', {className: 'tooltip'}).addTo(map);
  joji._icon.classList.add('joji');
  markers.push(joji);
  var naoko = L.marker([361.4, 146.1], {title: 'naoko', icon: npcGenericIcon}).bindTooltip('Naoko', {className: 'tooltip'}).addTo(map);
  naoko._icon.classList.add('naoko');
  markers.push(naoko);
  var neoedantamer = L.marker([382.3, 236.8], {title: 'neoedantamer', icon: npcGenericIcon}).bindTooltip('Neoedan Tamer', {className: 'tooltip'}).addTo(map);
  neoedantamer._icon.classList.add('neoedantamer');
  markers.push(neoedantamer);
  var viniola = L.marker([356.5, 295.3], {title: 'viniola', icon: npcMovingIcon}).bindTooltip('Viniola', {className: 'tooltip'}).addTo(map);
  viniola._icon.classList.add('viniola');
  viniola._icon.classList.add('moving');
  markers.push(viniola);
  var visitingbreeder = L.marker([371.9, 200], {title: 'visitingbreeder', icon: npcGenericIcon}).bindTooltip('Visiting Breeder', {className: 'tooltip'}).addTo(map);
  visitingbreeder._icon.classList.add('visitingbreeder');
  markers.push(visitingbreeder);
  var wisegrannie = L.marker([439.3, 261.6], {title: 'wisegrannie', icon: npcGenericIcon}).bindTooltip('Wise Grannie', {className: 'tooltip'}).addTo(map);
  wisegrannie._icon.classList.add('wisegrannie');
  markers.push(wisegrannie);
  var yayoy = L.marker([461.3, 249.1], {title: 'yayoy', icon: npcGenericIcon}).bindTooltip('Yayoy', {className: 'tooltip'}).addTo(map);
  yayoy._icon.classList.add('yayoy');
  markers.push(yayoy);
  var yoko = L.marker([461.1, 255.4], {title: 'yoko', icon: npcGenericIcon}).bindTooltip('Yoko', {className: 'tooltip'}).addTo(map);
  yoko._icon.classList.add('yoko');
  markers.push(yoko);
  
  // Use the tool over at https://codepen.io/susanpallmann/full/eYzbOyJ to format entries easier!
  
  //var name = L.marker([00, 00], {title: name, icon: npcGenericIcon}).bindTooltip("name", {className: 'tooltip'}).addTo(map);
  //name._icon.classList.add("testclass");
  //markers.push(name);
  
  function listSearchResults(query) {
    $('#results').empty();
    var counter = 0; 
    for (var i in markers){
      if (counter <= 4) {
        var markerID = markers[i].options.title;
        var markerToolTip = markers[i].getTooltip();
        var content = markerToolTip.getContent();
        var source = markers[i].options.icon.options.iconUrl;
        if (markerID.includes(query)){
          counter += 1;
          $('#results').append('<li><a href="" class="result-link" id="' + markerID + '"><img class="marker-small" src="' + source + '" alt="" /><p>' + content + '</p></a></li>');
        }
      }
    }
  }
  
  function refreshSearch(query) {
    $('.leaflet-marker-icon').addClass('hidden-icon');
    $('*[class*=' + query + ']').removeClass('hidden-icon');
  }
  
  $("#search").bind('input', function(){
    let value = $("#search").val();
    value = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
    if (value === '') {
      $('.leaflet-marker-icon').removeClass('hidden-icon');
      $('#results').empty();
    } else {
      refreshSearch(value);
      listSearchResults(value);
    }
  });
  
  $('input[type="checkbox"]').bind('input', function(){
    $('.leaflet-marker-icon').addClass('hidden-icon');
    if ($('input:checkbox:checked').length) {
      $('input:checkbox:checked').each(function(index) {
        let key = $(this).val();
        console.log(key);
        $('.' + key).removeClass('hidden-icon');
      });
    } else {
      $('.leaflet-marker-icon').removeClass('hidden-icon');
    }
  });
});

$(document).on('click','.result-link',function(e){
  function markerFunction(id){
    for (var i in markers){
      var markerID = markers[i].options.title;
      if (markerID === id){
        markers[i].openTooltip();
        map.panTo(markers[i].getLatLng());
      } else {
        markers[i].closeTooltip();
      }
    }
  }
  markerFunction($(this).attr('id'));
  e.preventDefault();
}); 
