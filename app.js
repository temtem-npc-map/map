var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-container', {
        crs: L.CRS.Simple,
        attributionControl: false,
        center: [500, 500],
        maxBounds: [[0,0], [1000,1000]],
        minZoom: 1,
    });
  
  
  var bounds = [[0,0], [1000,1000]];
  //var image = L.imageOverlay('images/maps/kisiwa.png', bounds).addTo(map);
  map.fitBounds(bounds);
  
  L.TileLayer.MyCustomLayer = L.TileLayer.extend({
    getTileUrl: function(coords) {
        // increment our x/y coords by 1 so they match our tile naming scheme
        coords.x = coords.x + 1;
        coords.y = coords.y + 1;

        // pass the new coords on through the original getTileUrl
        // see http://leafletjs.com/examples/extending/extending-1-classes.html 
        // for calling parent methods
        return L.TileLayer.prototype.getTileUrl.call(this, coords);
    }
  });

  // static factory as recommended by http://leafletjs.com/reference-1.0.3.html#class
  L.tileLayer.myCustomLayer = function(templateUrl, options) {
      return new L.TileLayer.MyCustomLayer(templateUrl, options);
  }

  // create the layer and add it to the map
  L.tileLayer.myCustomLayer('images/tiles/kisiwa/kisiwa-{z}-{x}-{y}.jpg', {
      minZoom: 0,
      maxZoom: 3,
      zoomOffset: 1,
      tms: true,
      continuousWorld: 'true',
      noWrap: false,
      defaultRadius: 1,
  }).addTo(map);
  
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
  var npcMailIcon = new TemMarker({iconUrl: 'images/icons/npc-mail.png'});
  var npcProfessorKonstantinosIcon = new TemMarker({iconUrl: 'images/icons/professor-konstantinos.png'});
  var npcAdiaTurayIcon = new TemMarker({iconUrl: 'images/icons/adia-turay.png'});
  
  var otesha = L.marker([415.6, 611.3], {title:"otesha", icon: npcGenericIcon}).bindTooltip("Otesha", {className: 'tooltip'}).addTo(map);
  otesha._icon.classList.add("otesha");
  markers.push(otesha);  
  var kimweri = L.marker([496.3, 603.9], {title:"kimweri", icon: npcGenericIcon}).bindTooltip("Kimweri", {className: 'tooltip'}).addTo(map); 
  kimweri._icon.classList.add("kimweri");
  markers.push(kimweri);
  var overjoyedfisherwoman = L.marker([615.3, 629.4], {title:"overjoyedfisherwoman", icon: npcMovingIcon}).bindTooltip("Overjoyed Fisherwoman", {className: 'tooltip'}).addTo(map); //moves
  overjoyedfisherwoman._icon.classList.add("overjoyedfisherwoman");
  overjoyedfisherwoman._icon.classList.add("moving");
  markers.push(overjoyedfisherwoman);
  var jubilantkisiwan = L.marker([669.6, 635.3], {title:"jubilantkisiwan", icon: npcMovingIcon}).bindTooltip("Jubilant Kisiwan", {className: 'tooltip'}).addTo(map); //moves
  jubilantkisiwan._icon.classList.add("jubilantkisiwan");
  jubilantkisiwan._icon.classList.add("moving");
  markers.push(jubilantkisiwan);
  var bibi1 = L.marker([710.8, 634.6], {title:"bibi1", icon: npcGenericIcon}).bindTooltip("Bibi", {className: 'tooltip'}).addTo(map);
  bibi1._icon.classList.add("bibi1");
  markers.push(bibi1);
  var bibi2 = L.marker([706, 639.4], {title:"bibi2", icon: npcGenericIcon}).bindTooltip("Bibi", {className: 'tooltip'}).addTo(map);  
  bibi2._icon.classList.add("bibi2");
  markers.push(bibi2);
  var lala = L.marker([596.5, 585.5], {title:"lala", icon: npcGenericIcon}).bindTooltip("Lala", {className: 'tooltip'}).addTo(map);
  lala._icon.classList.add("lala");
  markers.push(lala);
  var belsotodiehard = L.marker([744.63, 640.25], {title:"belsotodiehard", icon: npcGenericIcon}).bindTooltip("Belsoto Diehard", {className: 'tooltip'}).addTo(map);
  belsotodiehard._icon.classList.add("belsotodiehard");
  markers.push(belsotodiehard);
  var kisiwanranger = L.marker([718.2, 693.1], {title:"kisiwanranger", icon: npcGenericIcon}).bindTooltip("Kisiwan Ranger", {className: 'tooltip'}).addTo(map);
  kisiwanranger._icon.classList.add("kisiwanranger");
  markers.push(kisiwanranger);
  var abandonedbelsoto = L.marker([769.3, 692.1], {title:"abandonedbelsoto", icon: npcGenericIcon}).bindTooltip("Abandoned Belsoto", {className: 'tooltip'}).addTo(map); 
  abandonedbelsoto._icon.classList.add("abandonedbelsoto");
  markers.push(abandonedbelsoto);
  var dati = L.marker([719.4, 715.7], {title:"dati", icon: npcGenericIcon}).bindTooltip("Dati", {className: 'tooltip'}).addTo(map);
  dati._icon.classList.add("dati");
  markers.push(dati);
  var meleani = L.marker([718.2, 725], {title:"meleani", icon: npcGenericIcon}).bindTooltip("Meleani", {className: 'tooltip'}).addTo(map);
  meleani._icon.classList.add("meleani");
  markers.push(meleani);
  var ngapera = L.marker([721.3, 727.9], {title:"ngapera", icon: npcGenericIcon}).bindTooltip("Ngapera", {className: 'tooltip'}).addTo(map);
  ngapera._icon.classList.add("ngapera");
  markers.push(ngapera);
  var omninesianprospector = L.marker([735.4, 732.8], {title:"omninesianprospector", icon: npcGenericIcon}).bindTooltip("Omninesian Prospector", {className: 'tooltip'}).addTo(map);
  omninesianprospector._icon.classList.add("omninesianprospector");
  markers.push(omninesianprospector);
  var mixtli = L.marker([749.5, 721.8], {title:"mixtli", icon: npcGenericIcon}).bindTooltip("Mixtli", {className: 'tooltip'}).addTo(map);
  mixtli._icon.classList.add("mixtli");
  markers.push(mixtli);
  var malinalli = L.marker([752, 721.6], {title:"malinalli", icon: npcGenericIcon}).bindTooltip("Malinalli", {className: 'tooltip'}).addTo(map);
  malinalli._icon.classList.add("malinalli");
  markers.push(malinalli);
  var restlessrefugee = L.marker([714.9, 740.9], {title:"restlessrefugee", icon: npcMovingIcon}).bindTooltip("Restless Refugee", {className: 'tooltip'}).addTo(map); //moves
  restlessrefugee._icon.classList.add("restlessrefugee");
  restlessrefugee._icon.classList.add("moving");
  markers.push(restlessrefugee);
  var kisiwanrepresentative = L.marker([714.9, 743.9], {title:"kisiwanrepresentative", icon: npcGenericIcon}).bindTooltip("Kisiwan Representative", {className: 'tooltip'}).addTo(map);
  kisiwanrepresentative._icon.classList.add("kisiwanrepresentative");
  markers.push(kisiwanrepresentative);
  var tucmanirepresentative = L.marker([716.9, 740.9], {title:"tucmanirepresentative", icon: npcGenericIcon}).bindTooltip("Tucmani Representative", {className: 'tooltip'}).addTo(map);
  tucmanirepresentative._icon.classList.add("tucmanirepresentative");
  markers.push(tucmanirepresentative);
  var resistancerepresentative = L.marker([716.9, 743.9], {title:"resistancerepresentative", icon: npcGenericIcon}).bindTooltip("Resistance Representative", {className: 'tooltip'}).addTo(map);
  resistancerepresentative._icon.classList.add("resistancerepresentative");
  markers.push(resistancerepresentative);
  var akihiro = L.marker([718.9, 740.9], {title:"akihiro", icon: npcGenericIcon}).bindTooltip("Akihiro", {className: 'tooltip'}).addTo(map);
  akihiro._icon.classList.add("akihiro");
  markers.push(akihiro);
  var strandedbusinesswoman = L.marker([718.9, 743.9], {title:"strandedbusinesswoman", icon: npcGenericIcon}).bindTooltip("Stranded Businesswoman", {className: 'tooltip'}).addTo(map);
  strandedbusinesswoman._icon.classList.add("strandedbusinesswoman");
  markers.push(strandedbusinesswoman);
  var kupelelezavendor = L.marker([720.9, 740.9], {title:"kupelelezavendor", icon: npcVendorIcon}).bindTooltip("Kupeleleza Vendor", {className: 'tooltip'}).addTo(map);
  kupelelezavendor._icon.classList.add("kupelelezavendor");
  kupelelezavendor._icon.classList.add("vendor");
  markers.push(kupelelezavendor);
  var kamaria = L.marker([468.1, 739.9], {title:"kamaria", icon: npcGenericIcon}).bindTooltip("Kamaria", {className: 'tooltip'}).addTo(map);
  kamaria._icon.classList.add("kamaria");
  markers.push(kamaria);
  var hasani = L.marker([466.9, 738.3], {title:"hasani", icon: npcGenericIcon}).bindTooltip("Hasani", {className: 'tooltip'}).addTo(map);
  hasani._icon.classList.add("hasani");
  markers.push(hasani);
  var lyato = L.marker([722.6, 488.9], {title:"lyato", icon: npcGenericIcon}).bindTooltip("Lyato", {className: 'tooltip'}).addTo(map);
  lyato._icon.classList.add("lyato");
  markers.push(lyato);
  var bahati = L.marker([451.8, 699.6], {title:"bahati", icon: npcGenericIcon}).bindTooltip("Bahati", {className: 'tooltip'}).addTo(map);
  bahati._icon.classList.add("bahati");
  markers.push(bahati);
  var imara = L.marker([451.8, 683.9], {title:"imara", icon: npcGenericIcon}).bindTooltip("Imara", {className: 'tooltip'}).addTo(map);
  imara._icon.classList.add("imara");
  markers.push(imara);
  var postofficemanager = L.marker([738.9, 465.25], {title:"postofficemanager", icon: npcMailIcon}).bindTooltip("Post Office Manager", {className: 'tooltip'}).addTo(map);
  postofficemanager._icon.classList.add("postofficemanager");
  postofficemanager._icon.classList.add("mail");
  markers.push(postofficemanager);
  var postalworker = L.marker([738, 459], {title:"postalworker", icon: npcGenericIcon}).bindTooltip("Postal Worker", {className: 'tooltip'}).addTo(map);
  postalworker._icon.classList.add("postalworker");
  markers.push(postalworker);
  var ige = L.marker([720, 490.5], {title:"ige", icon: npcGenericIcon}).bindTooltip("Ige", {className: 'tooltip'}).addTo(map);
  ige._icon.classList.add("ige");
  markers.push(ige);
  var kisiwantraitor = L.marker([463.9, 690.3], {title:"kisiwantraitor", icon: npcMovingIcon}).bindTooltip("Kisiwan Traitor", {className: 'tooltip'}).addTo(map); //moves
  kisiwantraitor._icon.classList.add("kisiwantraitor");
  kisiwantraitor._icon.classList.add("moving");
  markers.push(kisiwantraitor);
  var paharotrainer = L.marker([736.44, 472.9], {title:"paharotrainer", icon: npcGenericIcon}).bindTooltip("Paharo Trainer", {className: 'tooltip'}).addTo(map);
  paharotrainer._icon.classList.add("paharotrainer");
  markers.push(paharotrainer);
  var clothesvendor = L.marker([722.38, 446.98], {title:"clothesvendor", icon: npcClothingIcon}).bindTooltip("Clothes Vendor", {className: 'tooltip'}).addTo(map);
  clothesvendor._icon.classList.add("clothesvendor");
  clothesvendor._icon.classList.add("clothing");
  markers.push(clothesvendor);
  var fashionistem = L.marker([725.25, 446.48], {title:"fashionistem", icon: npcGenericIcon}).bindTooltip("Fashionistem", {className: 'tooltip'}).addTo(map);
  fashionistem._icon.classList.add("fashionistem");
  markers.push(fashionistem);
  var ometeotl = L.marker([694.47, 451.66], {title:"ometeotl", icon: npcGenericIcon}).bindTooltip("Ometeotl", {className: 'tooltip'}).addTo(map);
  ometeotl._icon.classList.add("ometeotl");
  markers.push(ometeotl);
  var citlalli = L.marker([704.56, 430.38], {title:"citlalli", icon: npcGenericIcon}).bindTooltip("Citlalli", {className: 'tooltip'}).addTo(map);
  citlalli._icon.classList.add("citlalli");
  markers.push(citlalli);
  var jafari = L.marker([474.6, 703.7], {title:"jafari", icon: npcGenericIcon}).bindTooltip("Jafari", {className: 'tooltip'}).addTo(map);
  jafari._icon.classList.add("jafari");
  markers.push(jafari);
  var oyibo = L.marker([715.06, 442.81], {title:"oyibo", icon: npcGenericIcon}).bindTooltip("Oyibo", {className: 'tooltip'}).addTo(map);
  oyibo._icon.classList.add("oyibo");
  markers.push(oyibo);
  var resistancescout = L.marker([466, 712.7], {title:"resistancescout", icon: npcGenericIcon}).bindTooltip("Resistance Scout", {className: 'tooltip'}).addTo(map);
  resistancescout._icon.classList.add("resistancescout");
  markers.push(resistancescout);
  var sifiso = L.marker([697.34, 420.54], {title:"sifiso", icon: npcGenericIcon}).bindTooltip("Sifiso", {className: 'tooltip'}).addTo(map);
  sifiso._icon.classList.add("sifiso");
  markers.push(sifiso);
  var opeyemi = L.marker([695.66, 420.22], {title:"opeyemi", icon: npcGenericIcon}).bindTooltip("Opeyemi", {className: 'tooltip'}).addTo(map);
  opeyemi._icon.classList.add("opeyemi");
  markers.push(opeyemi);
  var els = L.marker([661.81, 427.07], {title:"els", icon: npcGenericIcon}).bindTooltip("Els", {className: 'tooltip'}).addTo(map);
  els._icon.classList.add("els");
  markers.push(els);
  var temtembreeder = L.marker([677, 439.94], {title:"temtembreeder", icon: npcGenericIcon}).bindTooltip("Temtem Breeder", {className: 'tooltip'}).addTo(map);
  temtembreeder._icon.classList.add("temtembreeder");
  markers.push(temtembreeder);
  var ara = L.marker([691.25, 468.57], {title:"ara", icon: npcGenericIcon}).bindTooltip("Ara", {className: 'tooltip'}).addTo(map);
  ara._icon.classList.add("ara");
  markers.push(ara);
  var ariadne = L.marker([692.75, 468.82], {title:"ariadne", icon: npcGenericIcon}).bindTooltip("Ariadne", {className: 'tooltip'}).addTo(map);
  ariadne._icon.classList.add("ariadne");
  markers.push(ariadne);
  var makena = L.marker([644.44, 452.13], {title:"makena", icon: npcGenericIcon}).bindTooltip("Makena", {className: 'tooltip'}).addTo(map);
  makena._icon.classList.add("makena");
  markers.push(makena);
  var lauren = L.marker([631.63, 490.88], {title:"lauren", icon: npcGenericIcon}).bindTooltip("Lauren", {className: 'tooltip'}).addTo(map);
  lauren._icon.classList.add("lauren");
  markers.push(lauren);
  var olivia = L.marker([625.38, 461.27], {title:"olivia", icon: npcGenericIcon}).bindTooltip("Olivia", {className: 'tooltip'}).addTo(map);
  olivia._icon.classList.add("olivia");
  markers.push(olivia);
  var george = L.marker([627.25, 467.26], {title:"george", icon: npcGenericIcon}).bindTooltip("George", {className: 'tooltip'}).addTo(map);
  george._icon.classList.add("george");
  markers.push(george);
  var petter = L.marker([611, 445.65], {title:"petter", icon: npcGenericIcon}).bindTooltip("Petter", {className: 'tooltip'}).addTo(map);
  petter._icon.classList.add("petter");
  markers.push(petter);
  var freshfruitcandy = L.marker([652, 408.77], {title:"freshfruitcandy", icon: npcGenericIcon}).bindTooltip("FreshFruit Candy", {className: 'tooltip'}).addTo(map);
  freshfruitcandy._icon.classList.add("freshfruitcandy");
  markers.push(freshfruitcandy);
  var kweli = L.marker([601.69, 479.75], {title:"kweli", icon: npcGenericIcon}).bindTooltip("Kweli", {className: 'tooltip'}).addTo(map);
  kweli._icon.classList.add("kweli");
  markers.push(kweli);
  var uhuruguard = L.marker([604.06, 489.68], {title:"uhuruguard", icon: npcGenericIcon}).bindTooltip("Uhuru Guard", {className: 'tooltip'}).addTo(map);
  uhuruguard._icon.classList.add("uhuruguard");
  markers.push(uhuruguard);
  var uhuruguard2 = L.marker([604, 501.68], {title:"uhuruguard2", icon: npcGenericIcon}).bindTooltip("Uhuru Guard 2", {className: 'tooltip'}).addTo(map);
  uhuruguard2._icon.classList.add("uhuruguard2");
  markers.push(uhuruguard2);
  var breakfastenthusiast = L.marker([607.94, 538.47], {title:"breakfastenthusiast", icon: npcGenericIcon}).bindTooltip("Breakfast enthusiast", {className: 'tooltip'}).addTo(map);
  breakfastenthusiast._icon.classList.add("breakfastenthusiast");
  markers.push(breakfastenthusiast);
  var tezcatl = L.marker([625.91, 530.22], {title:"tezcatl", icon: npcMovingIcon}).bindTooltip("Tezcatl", {className: 'tooltip'}).addTo(map);  //moves
  tezcatl._icon.classList.add("tezcatl");
  tezcatl._icon.classList.add("moving");
  markers.push(tezcatl);
  var cipankitourist = L.marker([644.63, 538.76], {title:"cipankitourist", icon: npcGenericIcon}).bindTooltip("Cipanki Tourist", {className: 'tooltip'}).addTo(map);
  cipankitourist._icon.classList.add("cipankitourist");
  markers.push(cipankitourist);
  var akili = L.marker([643.81, 547.13], {title:"akili", icon: npcGenericIcon}).bindTooltip("Akili", {className: 'tooltip'}).addTo(map);
  akili._icon.classList.add("akili");
  markers.push(akili);
  var nuru = L.marker([645.56, 559.94], {title:"nuru", icon: npcGenericIcon}).bindTooltip("Nuru", {className: 'tooltip'}).addTo(map);
  nuru._icon.classList.add("nuru");
  markers.push(nuru);
  var gary = L.marker([654.97, 570.94], {title:"gary", icon: npcGenericIcon}).bindTooltip("Gary", {className: 'tooltip'}).addTo(map);
  gary._icon.classList.add("gary");
  markers.push(gary);
  var damon = L.marker([665.38, 557.63], {title:"damon", icon: npcGenericIcon}).bindTooltip("Damon", {className: 'tooltip'}).addTo(map);
  damon._icon.classList.add("damon");
  markers.push(damon);
  var greg = L.marker([667.47, 562.94], {title:"greg", icon: npcGenericIcon}).bindTooltip("Greg", {className: 'tooltip'}).addTo(map);
  greg._icon.classList.add("greg");
  markers.push(greg);
  var tumbo = L.marker([676.53, 512.38], {title:"tumbo", icon: npcGenericIcon}).bindTooltip("Tumbo", {className: 'tooltip'}).addTo(map);
  tumbo._icon.classList.add("tumbo");
  markers.push(tumbo);
  var newspapermwana = L.marker([695.75, 564.13], {title:"newspapermwana", icon: npcMovingIcon}).bindTooltip("Newspaper Mwana", {className: 'tooltip'}).addTo(map);
  newspapermwana._icon.classList.add("newspapermwana");
  newspapermwana._icon.classList.add("moving");
  markers.push(newspapermwana);
  var manyara = L.marker([694, 539.64], {title:"manyara", icon: npcGenericIcon}).bindTooltip("Manyara", {className: 'tooltip'}).addTo(map);
  manyara._icon.classList.add("manyara");
  markers.push(manyara);
  var threedartist = L.marker([694.16, 572.17], {title:"3dartist", icon: npcGenericIcon}).bindTooltip("3D artist", {className: 'tooltip'}).addTo(map);
  threedartist._icon.classList.add("3dartist");
  markers.push(threedartist);
  var designer = L.marker([692.08, 570.27], {title:"designer", icon: npcGenericIcon}).bindTooltip("Designer", {className: 'tooltip'}).addTo(map);
  designer._icon.classList.add("designer");
  markers.push(designer);
  var bakari = L.marker([719.09, 553.82], {title:"bakari", icon: npcGenericIcon}).bindTooltip("Bakari", {className: 'tooltip'}).addTo(map);
  bakari._icon.classList.add("bakari");
  markers.push(bakari);
  var singizi = L.marker([715.97, 554.66], {title:"singizi", icon: npcGenericIcon}).bindTooltip("Singizi", {className: 'tooltip'}).addTo(map);
  singizi._icon.classList.add("singizi");
  markers.push(singizi);
  var ekundayo = L.marker([709.03, 524.45], {title:"ekundayo", icon: npcGenericIcon}).bindTooltip("Ekundayo", {className: 'tooltip'}).addTo(map);
  ekundayo._icon.classList.add("ekundayo");
  markers.push(ekundayo);
  var hotelreceptionist = L.marker([723.22, 538.08], {title:"hotelreceptionist", icon: npcGenericIcon}).bindTooltip("Hotel Receptionist", {className: 'tooltip'}).addTo(map);
  hotelreceptionist._icon.classList.add("hotelreceptionist");
  markers.push(hotelreceptionist);
  var recoveringfighter = L.marker([725.08, 545.19], {title:"recoveringfighter", icon: npcGenericIcon}).bindTooltip("Recovering fighter", {className: 'tooltip'}).addTo(map);
  recoveringfighter._icon.classList.add("recoveringfighter");
  markers.push(recoveringfighter);
  var convalescentfighter = L.marker([724.61, 543.74], {title:"convalescentfighter", icon: npcGenericIcon}).bindTooltip("Convalescent fighter", {className: 'tooltip'}).addTo(map);
  convalescentfighter._icon.classList.add("convalescentfighter");
  markers.push(convalescentfighter);
  var carlos = L.marker([728.09, 541.63], {title:"carlos", icon: npcGenericIcon}).bindTooltip("Carlos", {className: 'tooltip'}).addTo(map);
  carlos._icon.classList.add("carlos");
  markers.push(carlos);
  var tiredvisitor = L.marker([727.89, 543.85], {title:"tiredvisitor", icon: npcGenericIcon}).bindTooltip("Tired Visitor", {className: 'tooltip'}).addTo(map);
  tiredvisitor._icon.classList.add("tiredvisitor");
  markers.push(tiredvisitor);
  var arburianvisitor = L.marker([727.56, 545.19], {title:"arburianvisitor", icon: npcGenericIcon}).bindTooltip("Arburian Visitor", {className: 'tooltip'}).addTo(map);
  arburianvisitor._icon.classList.add("arburianvisitor");
  markers.push(arburianvisitor);
  var welltraveledlady = L.marker([724.91, 543.49], {title:"welltraveledlady", icon: npcGenericIcon}).bindTooltip("Well-traveled lady", {className: 'tooltip'}).addTo(map);
  welltraveledlady._icon.classList.add("welltraveledlady");
  markers.push(welltraveledlady);
  var broketamer = L.marker([732.81, 519.88], {title:"broketamer", icon: npcGenericIcon}).bindTooltip("Broke tamer", {className: 'tooltip'}).addTo(map);
  broketamer._icon.classList.add("broketamer");
  markers.push(broketamer);
  var excitedtamer = L.marker([732.84, 521.44], {title:"excitedtamer", icon: npcGenericIcon}).bindTooltip("Excited tamer", {className: 'tooltip'}).addTo(map);
  excitedtamer._icon.classList.add("excitedtamer");
  markers.push(excitedtamer);
  var captainkoli = L.marker([734.66, 523.38], {title:"captainkoli", icon: npcGenericIcon}).bindTooltip("Captain Koli", {className: 'tooltip'}).addTo(map);
  captainkoli._icon.classList.add("captainkoli");
  markers.push(captainkoli);
  var resistancecontact = L.marker([736.75, 530.25], {title:"resistancecontact", icon: npcGenericIcon}).bindTooltip("Resistance Contact", {className: 'tooltip'}).addTo(map);
  resistancecontact._icon.classList.add("resistancecontact");
  markers.push(resistancecontact);
  var lishan = L.marker([722.69, 504.16], {title:"lishan", icon: npcGenericIcon}).bindTooltip("Lishan", {className: 'tooltip'}).addTo(map);
  lishan._icon.classList.add("lishan");
  markers.push(lishan);
  var adiaturay = L.marker([761.25, 554.81], {title:"adiaturay", icon: npcAdiaTurayIcon}).bindTooltip("Adia Turay", {className: 'tooltip'}).addTo(map);
  adiaturay._icon.classList.add("adiaturay");
  markers.push(adiaturay);
  var agustin = L.marker([754.75, 577.7], {title:"agustin", icon: npcGenericIcon}).bindTooltip("Agustin", {className: 'tooltip'}).addTo(map);
  agustin._icon.classList.add("agustin");
  markers.push(agustin);
  var bibliophile = L.marker([763.22, 492.85], {title:"bibliophile", icon: npcGenericIcon}).bindTooltip("Bibliophile", {className: 'tooltip'}).addTo(map);
  bibliophile._icon.classList.add("bibliophile");
  markers.push(bibliophile);
  var bookworm = L.marker([765.22, 490.85], {title:"bookworm", icon: npcGenericIcon}).bindTooltip("bookworm", {className: 'tooltip'}).addTo(map);
  bookworm._icon.classList.add("bookworm");
  markers.push(bookworm);
  var professorkonstantinos = L.marker([767.03, 488.57], {title:"professorkonstantinos", icon: npcProfessorKonstantinosIcon}).bindTooltip("Professor Konstantinos", {className: 'tooltip'}).addTo(map);
  professorkonstantinos._icon.classList.add("professorkonstantinos");
  markers.push(professorkonstantinos);
  var mavuto = L.marker([767.47, 495.63], {title:"mavuto", icon: npcGenericIcon}).bindTooltip("Mavuto", {className: 'tooltip'}).addTo(map);
  mavuto._icon.classList.add("mavuto");
  markers.push(mavuto);
  var drsasaya = L.marker([766.38, 502.16], {title:"drsasaya", icon: npcGenericIcon}).bindTooltip("Dr. Sasaya", {className: 'tooltip'}).addTo(map);
  drsasaya._icon.classList.add("drsasaya");
  markers.push(drsasaya);
  var avidreader = L.marker([764.78, 502.72], {title:"avidreader", icon: npcGenericIcon}).bindTooltip("Avid Reader", {className: 'tooltip'}).addTo(map);
  avidreader._icon.classList.add("avidreader");
  markers.push(avidreader);
  var ruka = L.marker([630.69, 539.25], {title:"ruka", icon: npcFurnitureIcon}).bindTooltip("Ruka", {className: 'tooltip'}).addTo(map);
  ruka._icon.classList.add("ruka");
  ruka._icon.classList.add("furniture");
  markers.push(ruka);
  var roberta = L.marker([631.34, 537.47], {title:"roberta", icon: npcGenericIcon}).bindTooltip("Roberta", {className: 'tooltip'}).addTo(map);
  roberta._icon.classList.add("roberta");
  markers.push(roberta);
  var resistancesentinel = L.marker([321.1, 654], {title:"resistancesentinel", icon: npcGenericIcon}).bindTooltip("Resistance Sentinel", {className: 'tooltip'}).addTo(map);
  resistancesentinel._icon.classList.add("resistancesentinel");
  markers.push(resistancesentinel);
  var resistancesentinel2 = L.marker([315.5, 654.3], {title:"resistancesentinel2", icon: npcGenericIcon}).bindTooltip("Resistance Sentinel 2", {className: 'tooltip'}).addTo(map);
  resistancesentinel2._icon.classList.add("resistancesentinel2");
  markers.push(resistancesentinel2);
  var safiri = L.marker([316.4, 641.1], {title:"safiri", icon: npcMovingIcon}).bindTooltip("Safiri", {className: 'tooltip'}).addTo(map);
  safiri._icon.classList.add("safiri");
  safiri._icon.classList.add("moving");
  markers.push(safiri);
  var temporiumworker = L.marker([330.750, 634.2], {title:"temporiumworker", icon: npcGenericIcon}).bindTooltip("Temporium Worker", {className: 'tooltip'}).addTo(map);
  temporiumworker._icon.classList.add("temporiumworker");
  markers.push(temporiumworker);
  var temporiumvolunteer = L.marker([333.5, 633.8], {title:"temporiumvolunteer", icon: npcGenericIcon}).bindTooltip("Temporium Volunteer", {className: 'tooltip'}).addTo(map);
  temporiumvolunteer._icon.classList.add("temporiumvolunteer");
  markers.push(temporiumvolunteer);
  var resistanceliaison = L.marker([335.5, 633.9], {title:"resistanceliaison", icon: npcGenericIcon}).bindTooltip("Resistance Liaison", {className: 'tooltip'}).addTo(map);
  resistanceliaison._icon.classList.add("resistanceliaison");
  markers.push(resistanceliaison);
  var retiredworker = L.marker([337.5, 634.1], {title:"retiredworker", icon: npcGenericIcon}).bindTooltip("Retired Worker", {className: 'tooltip'}).addTo(map);
  retiredworker._icon.classList.add("retiredworker");
  markers.push(retiredworker);
  var vumbitemporium = L.marker([338.3, 645.84], {title:"vumbitemporium", icon: npcVendorIcon}).bindTooltip("Vumbi Temporium", {className: 'tooltip'}).addTo(map);
  vumbitemporium._icon.classList.add("vumbitemporium");
  vumbitemporium._icon.classList.add("vendor");
  markers.push(vumbitemporium);
  var zamzaditta = L.marker([310.5, 619.3], {title:"zamzaditta", icon: npcMovingIcon}).bindTooltip("Zamzaditta", {className: 'tooltip'}).addTo(map);
  zamzaditta._icon.classList.add("zamzaditta");
  zamzaditta._icon.classList.add("moving");
  markers.push(zamzaditta);
  var jambo = L.marker([305.6, 595.5], {title:"jambo", icon: npcGenericIcon}).bindTooltip("Jambo", {className: 'tooltip'}).addTo(map);
  jambo._icon.classList.add("jambo");
  markers.push(jambo);
  var ikunda = L.marker([296.2, 583.9], {title:"ikunda", icon: npcGenericIcon}).bindTooltip("Ikunda", {className: 'tooltip'}).addTo(map);
  ikunda._icon.classList.add("ikunda");
  markers.push(ikunda);
  var kamau = L.marker([313.9, 575.8], {title:"kamau", icon: npcGenericIcon}).bindTooltip("Kamau", {className: 'tooltip'}).addTo(map);
  kamau._icon.classList.add("kamau");
  markers.push(kamau);
  var sipho = L.marker([311, 575.5], {title:"sipho", icon: npcGenericIcon}).bindTooltip("Sipho", {className: 'tooltip'}).addTo(map);
  sipho._icon.classList.add("sipho");
  markers.push(sipho);
  var tlatoani = L.marker([312.1, 579.7], {title:"tlatoani", icon: npcGenericIcon}).bindTooltip("Tlatoani", {className: 'tooltip'}).addTo(map);
  tlatoani._icon.classList.add("tlatoani");
  markers.push(tlatoani);
  var ollinyotl = L.marker([309.9, 579.8], {title:"ollinyotl", icon: npcGenericIcon}).bindTooltip("Ollinyotl", {className: 'tooltip'}).addTo(map);
  ollinyotl._icon.classList.add("ollinyotl");
  markers.push(ollinyotl);
  var prancinggnuowner = L.marker([314.99, 582.5], {title:"prancinggnuowner", icon: npcGenericIcon}).bindTooltip("Prancing Gnu Owner", {className: 'tooltip'}).addTo(map);
  prancinggnuowner._icon.classList.add("prancinggnuowner");
  markers.push(prancinggnuowner);
  var drunkendenizan = L.marker([313.40, 582.8], {title:"drunkendenizan", icon: npcGenericIcon}).bindTooltip("Drunken Denizan", {className: 'tooltip'}).addTo(map);
  drunkendenizan._icon.classList.add("drunkendenizan");
  markers.push(prancinggnuowner);
  var tiredtamer = L.marker([311.10, 582.2], {title:"tiredtamer", icon: npcGenericIcon}).bindTooltip("Tired Tamer", {className: 'tooltip'}).addTo(map);
  tiredtamer._icon.classList.add("tiredtamer");
  markers.push(tiredtamer);
  var prancinggnubartender = L.marker([309.60, 584.3], {title:"prancinggnubartender", icon: npcGenericIcon}).bindTooltip("Prancing Gnu Bartender", {className: 'tooltip'}).addTo(map);
  prancinggnubartender._icon.classList.add("prancinggnubartender");
  markers.push(prancinggnubartender);
  var danai = L.marker([314.20, 600.5], {title:"danai", icon: npcGenericIcon}).bindTooltip("Danai", {className: 'tooltip'}).addTo(map);
  danai._icon.classList.add("danai");
  markers.push(danai);
  var afolabi = L.marker([314.4, 596.4], {title:"afolabi", icon: npcGenericIcon}).bindTooltip("Afolabi", {className: 'tooltip'}).addTo(map);
  afolabi._icon.classList.add("afolabi");
  markers.push(afolabi);
  var resistanceguard = L.marker([324.1, 564.4], {title:"resistanceguard", icon: npcGenericIcon}).bindTooltip("Resistance Guard", {className: 'tooltip'}).addTo(map);
  resistanceguard._icon.classList.add("resistanceguard");
  markers.push(resistanceguard);
  var amaha = L.marker([321.3, 575.7], {title:"amaha", icon: npcGenericIcon}).bindTooltip("Amaha", {className: 'tooltip'}).addTo(map);
  amaha._icon.classList.add("amaha");
  markers.push(amaha);
  var malaika = L.marker([321.1, 611.4], {title:"malaika", icon: npcGenericIcon}).bindTooltip("Malaika", {className: 'tooltip'}).addTo(map);
  malaika._icon.classList.add("malaika");
  markers.push(malaika);
  var imani = L.marker([320.10, 606.97], {title:"imani", icon: npcGenericIcon}).bindTooltip("Imani", {className: 'tooltip'}).addTo(map);
  imani._icon.classList.add("imani");
  markers.push(imani);
  var fatou = L.marker([326.90, 602.2], {title:"fatou", icon: npcGenericIcon}).bindTooltip("Fatou", {className: 'tooltip'}).addTo(map);
  fatou._icon.classList.add("fatou");
  markers.push(fatou);
  var ichika = L.marker([327.40, 570.1], {title:"ichika", icon: npcGenericIcon}).bindTooltip("Ichika", {className: 'tooltip'}).addTo(map);
  ichika._icon.classList.add("ichika");
  markers.push(ichika);
  var bonge = L.marker([325.30, 574.3], {title:"bonge", icon: npcGenericIcon}).bindTooltip("Bonge", {className: 'tooltip'}).addTo(map);
  bonge._icon.classList.add("bonge");
  markers.push(bonge);
  var enitan = L.marker([338.40, 574.6], {title:"enitan", icon: npcGenericIcon}).bindTooltip("Enitan", {className: 'tooltip'}).addTo(map);
  enitan._icon.classList.add("enitan");
  markers.push(enitan);
  var nzinga = L.marker([341.40, 577.6], {title:"nzinga", icon: npcGenericIcon}).bindTooltip("Nzinga", {className: 'tooltip'}).addTo(map);
  nzinga._icon.classList.add("nzinga");
  markers.push(nzinga);
  var juma = L.marker([348.940, 591.53], {title:"juma", icon: npcGenericIcon}).bindTooltip("Juma", {className: 'tooltip'}).addTo(map);
  juma._icon.classList.add("juma");
  markers.push(juma);
  var resistancerecruit = L.marker([337.30, 611], {title:"resistancerecruit", icon: npcGenericIcon}).bindTooltip("Resistance Recruit", {className: 'tooltip'}).addTo(map);
  resistancerecruit._icon.classList.add("resistancerecruit");
  markers.push(resistancerecruit);
  var sleepdeprivedvumbian = L.marker([340.90, 623.1], {title:"sleepdeprivedvumbian", icon: npcGenericIcon}).bindTooltip("Sleep-deprived Vumbian", {className: 'tooltip'}).addTo(map);
  sleepdeprivedvumbian._icon.classList.add("sleepdeprivedvumbian");
  markers.push(sleepdeprivedvumbian);
  
  //var name = L.marker([00, 00], {icon: npcGenericIcon}).bindTooltip("name", {className: 'tooltip'}).addTo(map);
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
