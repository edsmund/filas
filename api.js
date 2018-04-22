var path = require('path');
var http = require('http');
var url = require('url');
// Log the requests
var server = http.createServer(function(request, response){

// Setup API
var DisneyAPI = require("themeparks");
console.log(request.url);



var LA;
LA=0;
if(request.url == "/WaltDisneyWorldMagicKingdom"){
var WaltDisneyWorldMagicKingdom = new DisneyAPI.Parks.WaltDisneyWorldMagicKingdom();
	LA = WaltDisneyWorldMagicKingdom;
} else if(request.url == "/WaltDisneyWorldEpcot"){
var WaltDisneyWorldEpcot = new DisneyAPI.Parks.WaltDisneyWorldEpcot();
	LA = WaltDisneyWorldEpcot;
} else if(request.url == "/WaltDisneyWorldHollywoodStudios"){
var WaltDisneyWorldHollywoodStudios = new DisneyAPI.Parks.WaltDisneyWorldHollywoodStudios();
	LA = WaltDisneyWorldHollywoodStudios;
} else if(request.url == "/WaltDisneyWorldAnimalKingdom"){
var WaltDisneyWorldAnimalKingdom = new DisneyAPI.Parks.WaltDisneyWorldAnimalKingdom();
	LA = WaltDisneyWorldAnimalKingdom;
} else if(request.url == "/DisneylandResortMagicKingdom"){
var DisneylandResortMagicKingdom = new DisneyAPI.Parks.DisneylandResortMagicKingdom();
	LA = DisneylandResortMagicKingdom;
} else if(request.url == "/DisneylandResortCaliforniaAdventure"){
var DisneylandResortCaliforniaAdventure = new DisneyAPI.Parks.DisneylandResortCaliforniaAdventure();
	LA = DisneylandResortCaliforniaAdventure;
} else if(request.url == "/DisneylandParisMagicKingdom"){
var DisneylandParisMagicKingdom = new DisneyAPI.Parks.DisneylandParisMagicKingdom();
	LA = DisneylandParisMagicKingdom;
} else if(request.url == "/DisneylandParisWaltDisneyStudios"){
var DisneylandParisWaltDisneyStudios = new DisneyAPI.Parks.DisneylandParisWaltDisneyStudios();
	LA = DisneylandParisWaltDisneyStudios;
} else if(request.url == "/ShanghaiDisneyResortMagicKingdom"){
var ShanghaiDisneyResortMagicKingdom = new DisneyAPI.Parks.ShanghaiDisneyResortMagicKingdom();
	LA = ShanghaiDisneyResortMagicKingdom;
} else if(request.url == "/TokyoDisneyResortMagicKingdom"){
var TokyoDisneyResortMagicKingdom = new DisneyAPI.Parks.TokyoDisneyResortMagicKingdom();
	LA = TokyoDisneyResortMagicKingdom;
} else if(request.url == "/TokyoDisneyResortDisneySea"){
var TokyoDisneyResortDisneySea = new DisneyAPI.Parks.TokyoDisneyResortDisneySea();
	LA = TokyoDisneyResortDisneySea;
} else if(request.url == "/HongKongDisneyland"){
var HongKongDisneyland = new DisneyAPI.Parks.HongKongDisneyland();
	LA = HongKongDisneyland;
} else if(request.url == "/UniversalStudiosFlorida"){
var UniversalStudiosFlorida = new DisneyAPI.Parks.UniversalStudiosFlorida();
	LA = UniversalStudiosFlorida;
} else if(request.url == "/UniversalIslandsOfAdventure"){
var UniversalIslandsOfAdventure = new DisneyAPI.Parks.UniversalIslandsOfAdventure();
	LA = UniversalIslandsOfAdventure;
} else if(request.url == "/UniversalVolcanoBay"){
var UniversalVolcanoBay = new DisneyAPI.Parks.UniversalVolcanoBay();
	LA = UniversalVolcanoBay;
} else if(request.url == "/UniversalStudiosHollywood"){
var UniversalStudiosHollywood = new DisneyAPI.Parks.UniversalStudiosHollywood();
	LA = UniversalStudiosHollywood;
} else if(request.url == "/UniversalStudiosSingapore"){
var UniversalStudiosSingapore = new DisneyAPI.Parks.UniversalStudiosSingapore();
	LA = UniversalStudiosSingapore;
} else if(request.url == "/SeaworldOrlando"){
var SeaworldOrlando = new DisneyAPI.Parks.SeaworldOrlando();
	LA = SeaworldOrlando;
} else if(request.url == "/SeaworldSanAntonio"){
var SeaworldSanAntonio = new DisneyAPI.Parks.SeaworldSanAntonio();
	LA = SeaworldSanAntonio;
} else if(request.url == "/SeaworldSanDiego"){
var SeaworldSanDiego = new DisneyAPI.Parks.SeaworldSanDiego();
	LA = SeaworldSanDiego;
} else if(request.url == "/BuschGardensTampaBay"){
var BuschGardensTampaBay = new DisneyAPI.Parks.BuschGardensTampaBay();
	LA = BuschGardensTampaBay;
} else if(request.url == "/BuschGardensWilliamsburg"){
var BuschGardensWilliamsburg = new DisneyAPI.Parks.BuschGardensWilliamsburg();
	LA = BuschGardensWilliamsburg;
} else if(request.url == "/SesamePlace"){
var SesamePlace = new DisneyAPI.Parks.SesamePlace();
	LA = SesamePlace;
} else if(request.url == "/EuropaPark"){
var EuropaPark = new DisneyAPI.Parks.EuropaPark();
	LA = EuropaPark;
} else if(request.url == "/SixFlagsOverTexas"){
var SixFlagsOverTexas = new DisneyAPI.Parks.SixFlagsOverTexas();
	LA = SixFlagsOverTexas;
} else if(request.url == "/SixFlagsOverGeorgia"){
var SixFlagsOverGeorgia = new DisneyAPI.Parks.SixFlagsOverGeorgia();
	LA = SixFlagsOverGeorgia;
} else if(request.url == "/SixFlagsStLouis"){
var SixFlagsStLouis = new DisneyAPI.Parks.SixFlagsStLouis();
	LA = SixFlagsStLouis;
} else if(request.url == "/SixFlagsGreatAdventure"){
var SixFlagsGreatAdventure = new DisneyAPI.Parks.SixFlagsGreatAdventure();
	LA = SixFlagsGreatAdventure;
} else if(request.url == "/SixFlagsMagicMountain"){
var SixFlagsMagicMountain = new DisneyAPI.Parks.SixFlagsMagicMountain();
	LA = SixFlagsMagicMountain;
} else if(request.url == "/SixFlagsGreatAmerica"){
var SixFlagsGreatAmerica = new DisneyAPI.Parks.SixFlagsGreatAmerica();
	LA = SixFlagsGreatAmerica;
} else if(request.url == "/SixFlagsFiestaTexas"){
var SixFlagsFiestaTexas = new DisneyAPI.Parks.SixFlagsFiestaTexas();
	LA = SixFlagsFiestaTexas;
} else if(request.url == "/SixFlagsHurricaneHarborArlington"){
var SixFlagsHurricaneHarborArlington = new DisneyAPI.Parks.SixFlagsHurricaneHarborArlington();
	LA = SixFlagsHurricaneHarborArlington;
} else if(request.url == "/SixFlagsHurricaneHarborLosAngeles"){
var SixFlagsHurricaneHarborLosAngeles = new DisneyAPI.Parks.SixFlagsHurricaneHarborLosAngeles();
	LA = SixFlagsHurricaneHarborLosAngeles;
} else if(request.url == "/SixFlagsAmerica"){
var SixFlagsAmerica = new DisneyAPI.Parks.SixFlagsAmerica();
	LA = SixFlagsAmerica;
} else if(request.url == "/SixFlagsDiscoveryKingdom"){
var SixFlagsDiscoveryKingdom = new DisneyAPI.Parks.SixFlagsDiscoveryKingdom();
	LA = SixFlagsDiscoveryKingdom;
} else if(request.url == "/SixFlagsNewEngland"){
var SixFlagsNewEngland = new DisneyAPI.Parks.SixFlagsNewEngland();
	LA = SixFlagsNewEngland;
} else if(request.url == "/SixFlagsHurricaneHarborJackson"){
var SixFlagsHurricaneHarborJackson = new DisneyAPI.Parks.SixFlagsHurricaneHarborJackson();
	LA = SixFlagsHurricaneHarborJackson;
} else if(request.url == "/TheGreatEscape"){
var TheGreatEscape = new DisneyAPI.Parks.TheGreatEscape();
	LA = TheGreatEscape;
} else if(request.url == "/SixFlagsWhiteWaterAtlanta"){
var SixFlagsWhiteWaterAtlanta = new DisneyAPI.Parks.SixFlagsWhiteWaterAtlanta();
	LA = SixFlagsWhiteWaterAtlanta;
} else if(request.url == "/SixFlagsMexico"){
var SixFlagsMexico = new DisneyAPI.Parks.SixFlagsMexico();
	LA = SixFlagsMexico;
} else if(request.url == "/LaRondeMontreal"){
var LaRondeMontreal = new DisneyAPI.Parks.LaRondeMontreal();
	LA = LaRondeMontreal;
} else if(request.url == "/AltonTowers"){
var AltonTowers = new DisneyAPI.Parks.AltonTowers();
	LA = AltonTowers;
} else if(request.url == "/ThorpePark"){
var ThorpePark = new DisneyAPI.Parks.ThorpePark();
	LA = ThorpePark;
} else if(request.url == "/ChessingtonWorldOfAdventures"){
var ChessingtonWorldOfAdventures = new DisneyAPI.Parks.ChessingtonWorldOfAdventures();
	LA = ChessingtonWorldOfAdventures;
} else if(request.url == "/AsterixPark"){
var AsterixPark = new DisneyAPI.Parks.AsterixPark();
	LA = AsterixPark;
} else if(request.url == "/HersheyPark"){
var HersheyPark = new DisneyAPI.Parks.HersheyPark();
	LA = HersheyPark;
} else if(request.url == "/KnottsBerryFarm"){
var KnottsBerryFarm = new DisneyAPI.Parks.KnottsBerryFarm();
	LA = KnottsBerryFarm;
} else if(request.url == "/CedarPoint"){
var CedarPoint = new DisneyAPI.Parks.CedarPoint();
	LA = CedarPoint;
} else if(request.url == "/Carowinds"){
var Carowinds = new DisneyAPI.Parks.Carowinds();
	LA = Carowinds;
} else if(request.url == "/CanadasWonderland"){
var CanadasWonderland = new DisneyAPI.Parks.CanadasWonderland();
	LA = CanadasWonderland;
} else if(request.url == "/KingsIsland"){
var KingsIsland = new DisneyAPI.Parks.KingsIsland();
	LA = KingsIsland;
} else if(request.url == "/Efteling"){
var Efteling = new DisneyAPI.Parks.Efteling();
	LA = Efteling;
}

var MagicKingdom = new DisneyAPI.Parks.WaltDisneyWorldMagicKingdom();
// List theme parks supported by API
//for (var park in DisneyAPI) {
  //console.log("* " + new DisneyAPI[park]().name + " (DisneyAPI.Parks." + park + ")");
//}
response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
if(request.url=="/1"){

var MagicKingdom = new DisneyAPI.Parks.WaltDisneyWorldMagicKingdom();


// Get Magic Kingdom wait times
MagicKingdom.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
/*li:nth-child(odd){background:#f7f7f7;}*/
    htmlPage="<html><style>li:nth-child(14){visibility:hidden;position:absolute;}li:nth-child(15){visibility:hidden;position:absolute;}.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/app"){
    // List theme parks supported by API
    i=0;
    for (var park in DisneyAPI) {
      //console.log(new DisneyAPI[park]().name);

      global.parque=new DisneyAPI[park]().name;
      i++;
      
      if (i==1){
                global.conteudo="<a href=/"+i+"><li><p>"+global.parque+"</p></li></a>";
            } else {
                global.conteudo+="<a href=/"+i+"><li><p>"+global.parque+"</p></li></a>";
            }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 120px;}a{text-decoration:none; color: white;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility: hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:5px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><h1 class=toplink>Filas - Parques</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    response.write(htmlPage);
    response.end();
  } else if(request.url=="/2"){

var Epcot = new DisneyAPI.Parks.WaltDisneyWorldEpcot();


// Get Magic Kingdom wait times
Epcot.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/3"){

var Hollywood = new DisneyAPI.Parks.WaltDisneyWorldHollywoodStudios();


// Get Magic Kingdom wait times
Hollywood.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/4"){

var AK = new DisneyAPI.Parks.WaltDisneyWorldAnimalKingdom();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } /*else if(request.url=="/5"){
var AK = new DisneyAPI.Parks.DisneylandMagicKingdom();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/6"){
var AK = new DisneyAPI.Parks.DisneylandCaliforniaAdventure();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>California Adventure</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/7"){
var AK = new DisneyAPI.Parks.DisneylandParisMagicKingdom();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/8"){
var AK = new DisneyAPI.Parks.DisneylandParisWaltDisneyStudios();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>Disney Studios</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }  else if(request.url=="/9"){
var AK = new DisneyAPI.Parks.DisneylandHongKong();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>Disney Hong Kong</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/10"){
var AK = new DisneyAPI.Parks.DisneylandTokyo();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>Disney Tokyo</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/11"){
var AK = new DisneyAPI.Parks.DisneySeaTokyo();
// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;
    for (var id in data){
    
        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }
    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>DisneySea Tokyo</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } */else if(request.url=="/12"){

var AK = new DisneyAPI.Parks.SeaWorldFlorida();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/13"){

var AK = new DisneyAPI.Parks.SeaWorldSanAntonio();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SeaWorld SA</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/14"){

var AK = new DisneyAPI.Parks.SeaWorldSanDiego();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SeaWorld SD</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/15"){

var AK = new DisneyAPI.Parks.BuschGardensWilliamsburg();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/16"){

var AK = new DisneyAPI.Parks.BuschGardensTampa();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/17"){

var AK = new DisneyAPI.Parks.SesamePlace();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>Sesame Place</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/18"){

var AK = new DisneyAPI.Parks.UniversalStudiosFlorida();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/19"){

var AK = new DisneyAPI.Parks.UniversalIslandOfAdventure();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/20"){

var AK = new DisneyAPI.Parks.SixFlagsOverTexas();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Texas</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/21"){

var AK = new DisneyAPI.Parks.SixFlagsOverGeorgia();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Georgia</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/22"){

var AK = new DisneyAPI.Parks.SixFlagsStLouis();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags St.Louis</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/23"){

var AK = new DisneyAPI.Parks.SixFlagsGreatAdventure();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags GA</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/24"){

var AK = new DisneyAPI.Parks.SixFlagsMagicMountain();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags MM</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/25"){

var AK = new DisneyAPI.Parks.SixFlagsGreatAmerica();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags G America</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/26"){

var AK = new DisneyAPI.Parks.SixFlagsFiestaTexas();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags F Texas</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  } else if(request.url=="/27"){

var AK = new DisneyAPI.Parks.SixFlagsHurricaneHarborArlington();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Arlington</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/28"){

var AK = new DisneyAPI.Parks.SixFlagsHurricaneHarborLosAngeles();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags LA</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/29"){

var AK = new DisneyAPI.Parks.SixFlagsAmerica();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags America</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/30"){

var AK = new DisneyAPI.Parks.SixFlagsDiscoveryKingdom();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags DK</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/31"){

var AK = new DisneyAPI.Parks.SixFlagsNewEngland();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags NE</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/32"){

var AK = new DisneyAPI.Parks.SixFlagsHurricaneHarborJackson();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags HH Jackson</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/33"){

var AK = new DisneyAPI.Parks.SixFlagsTheGreatEscape();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags TGE</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/34"){

var AK = new DisneyAPI.Parks.SixFlagsWhiteWaterAtlanta();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Atlanta</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/35"){

var AK = new DisneyAPI.Parks.SixFlagsMexico();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Mexico</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else if(request.url=="/36"){

var AK = new DisneyAPI.Parks.SixFlagsLaRondeMontreal();


// Get Magic Kingdom wait times
AK.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
        global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<35) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 8px !important; width: 22px !important; background-color:red !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:black !important;background-color:yellow !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:61px 0px 0px 0px;color:white;font-family: Roboto, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:green;margin-left:7px;height:23px;width:19px;margin-top: 4px;}p{float:left;width:350px;margin: 13px 0px 10px 5px;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:#00d0d7;height:40px;margin:0;border:1px;padding:2px;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><div class=topmenu><a href=/app>< home</a><h1 class=toplink>SixFlags Montreal</h1></div><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});

}else if(LA!=0){



// Get Magic Kingdom wait times
LA.GetWaitTimes(function(err, data) {
    if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);
    var i=0;

    for (var id in data){
    


        //console.log(JSON.stringify(data[i].name, null, 2));
        //console.log(data[i].waitTime);
 global.nome=data[i].name;
        global.tempo=data[i].waitTime;
        i++;
        if(global.tempo<9){
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span>"+global.tempo+"</span></li>";
            } 
        } else if(global.tempo>9 && global.tempo<99) {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=yellow>"+global.tempo+"</span></li>";
            }
        } else {
            if (i==1){
                global.conteudo="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            } else {
                global.conteudo+="<li><p>"+global.nome+"</p><span class=red>"+global.tempo+"</span></li>";
            }
        }
    }

    htmlPage="<html><style>.toplink{float: left;font-size:20px; margin: 20px 0px 0px 5px;}a{width: 120px;margin: 23px 0px 0px 5px; font-size:15px;float:left;text-decoration: none; color:white; font-family: Roboto, Arial, Helvetica, sans-serif;}body{float: left;font-family: Roboto, Arial, Helvetica, sans-serif; color:white;} .topmenu{visibility:hidden;font-size:30px; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; background-color:#6632ec; height:60px; width: 400px;margin-bottom:1px;position:fixed;} .red {padding-left: 4px !important; width: 27px !important; background-color:#d31344 !important;} .yellow {padding-left: 8px !important; width: 22px !important; color:white !important;background-color:#fecc0f !important;}ul {list-style:none !important;font-size:14px;width:400px;Padding :0px; margin:0px 0px 0px 0px;color:gray;font-family: Helvetica Regular, Arial, Helvetica, sans-serif;}span{-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;float:left;padding-top:7px; padding-left:11px;background-color:#9bd72e;margin-left:7px;height:23px;width:19px;margin-top: 4px;color:white;}p{float:left;width:350px;margin: 13px 0px 10px 5px;height:17px;overflow:hidden;}li{ -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;margin-bottom:1px !important;background-color:white;height:40px;margin:0;border:1px;padding:2px;border-top: 1px solid #f1f1f1;}body{margin:0;padding:0;border:0;}</style><body>";
    htmlPage+="<meta name=viewport content=width=device-width, user-scalable=no><!--<div class=topmenu><a href=/app>< home</a><h1 class=toplink>Magic Kingdom</h1></div>--><ul>";
    htmlPage+=global.conteudo;
    htmlPage+="</ul>";
    htmlPage+="</html></body>";
    
    response.write(htmlPage);
    response.end();
    
    
});
  }else { 
    response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'}); 
    response.write("<h1>Página não encontrada</h1>"); 
    response.end();
  }


  
});


   
server.listen(80, function(){
  console.log('Executando Servidor HTTP');
});