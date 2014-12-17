var king = 0;
var heart = 0;
var boy = 0;
var no_hand = 0;
var girl = 0;
var last_two = 0;

var name_1;
var name_2;
var name_3;
var name_4;

var round = 0;


var gameType = {
   
   KING : 1,
   HEART : 2,
   BOY : 3,
   NO_HEART : 4,
   GIRL : 5,
   LAST_TWO : 6,
   POSITIVE : 7
   
};

// var e = gameType.KING;


function Game() {
   
   this.gamers = [];
   this.hands = [];
   this.round = 0;
   
   var i;
   for ( i = 0 ; i < 20 ; i++ ) {
      this.hands.push(new Hand());
   }
   
   this.getHands = function() {
      return this.hands;
   };
   
   this.initNames = function(array) {
      var i;
      
      for (i = 0 ; i < array.length ; i++) {
         this.gamers.push(new Gamer(array[i]));
      }
      
   };
   
   this.getRound = function() {
      return this.round;
   };
   
   this.setRound = function(round) {
      this.round = round;
   };
   
   this.incrementRound = function() {
      this.round += 1;
   };
   
}


function Gamer (name) {
    
   this.name = name;
   this.negative_hand_no = 0;
   this.positive_hand_no = 0;
   
   this.point = 0;  
   
   this.setNegativeHandNo = function(size) {
      this.negative_hand_no = size;
   };
   
   this.getNegativeHandNo = function () {
      return this.negative_hand_no;
   };
   
   this.setPositiveHandNo = function(size) {
      this.positive_hand_no = size;
   };
   
   this.getPositiveHandNo = function() {
      return this.positive_hand_no;
   };
   
   this.setName = function(name) {
      this.name = name;
   };
   
   this.getName = function() {
      return this.name;
   };
   
   this.increaseNegative = function() {
      this.negative_hand_no += 1;
   };
   
   this.increasePositive = function() {
      this.positive_hand_no += 1;
   };
   
   this.addPoint = function (point) {
      this.point += point;
   };
   
   this.getPoint = function () {
      return this.point;
   };
   
}

function Hand() {
   
   this.gamer;
   this.type;
   this.round;
   
   this.setGamer = function (gamer) {
      this.gamer = gamer;
   };
   
   this.getGamer = function () {
      return this.gamer;
   };
   
   this.setType = function (type) {
      this.type = type;
   };
   
   this.getType = function () {
      return this.type;
   }
   
   this.setRound = function (round) {
      this.round = round;
   };
   
   this.getRound = function () {
      return this.round;
   };
   
   
}








// TODO: continue here
function get_games_html() {
   
   var str = "<div id='game' ";
   
   if ( king != 2 ) {
      //str += 
   }
   
}


function imageDeneme() {
   
   alert("image deneme");
   
   // $("#image_gamer_1 #image_pos_1").text('<img src="img/tri_full.png">');
   // $("#image_gamer_1 #image_pos_1").prepend($('<img>',{id:'theImg',src:'img/tri_full.png'}));
   
   var img = document.createElement("IMG"); 
   img.src = "img/tri_full.png"; 
   $('#image_gamer_1 #image_pos_1').html(img);
   
   
}


// Validating Empty Field
function check_empty() {
   if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
      alert("Fill All Fields !");
   } 
   else {
      document.getElementById('form').submit();
      alert("Form Submitted Successfully...");
   }
}

//Function To Display Popup
function div_show() {
   document.getElementById('div_names').style.display = "block";
   //$("#div_names").style.display = "block";
   
}
//Function to Hide Popup
function div_hide(){
   document.getElementById('div_names').style.display = "none";
}


function start_hand() {
   
   //var n1 = new Gamer("ugur");
   
   //alert(n1.get_name());
   
   var g = new Game();
   
   alert(g.getHands().length);
   
   $("#div_names").show();
   
}

function getNames() {
   
   change();
   
   name_1 = $("#inp_name_1").val();
   $("#out_name_1").text(name_1);
      
   name_2 = $("#inp_name_2").val();
   $("#out_name_2").text(name_2);
   
   name_3 = $("#inp_name_3").val();
   $("#out_name_3").text(name_3);
   
   name_4 = $("#inp_name_4").val();
   $("#out_name_4").text(name_4);
   
   div_hide();
   $("#start_hand").hide();
}

function change() {
   
   $("#goodluck").text( "good luck" );;
   
}