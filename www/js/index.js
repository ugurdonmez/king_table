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

var g;

var gameNames = ["rifki", "kupa almaz", "erkek almaz", "el almaz", "kiz almaz", "son iki", "koz"];

var gameType = {
   
   KING : 0,
   HEART : 1,
   BOY : 2,
   NO_HAND : 3,
   GIRL : 4,
   LAST_TWO : 5,
   POSITIVE : 6
   
};

// var e = gameType.KING;


function Game() {
   
   this.gamers = [];
   this.hands = [];
   this.round = 0;
   this.gameTypes = [0,0,0,0,0,0,0];
   
   var i;
   for ( i = 0 ; i < 20 ; i++ ) {
      this.hands.push(new Hand());
   }
   
   this.getGamer = function(id) {
      return this.gamers[id];
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
   
   this.getAvailableGames = function() {
      
      var r = [0,0,0,0,0,0,0];
      
      var gamer = this.gamers[this.round % 4];
      var pos = gamer.getPositiveHandNo();
      var neg = gamer.getNegativeHandNo();
      
      var i;
      
      if ( neg != 3 ) {
         for (i = 0 ; i < 6 ; i++ ) {
            if ( this.gameTypes[i] != 2 ) {
               r[i] = 1;
            }
         }
      }
      if (pos != 2 ) {
         r[6] = 1;
      }
      
      return r;
   }
   
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





function get_games_html() {
   
   var games = g.getAvailableGames();
   
   var r = "";
   
   var i;
   
   for ( i = 0 ; i < 7 ; i ++ ) {
      if (games[i] = 1) {
         r = r + " <input type='radio' name='game_select_radio' value= '" + i + "'> " + gameNames[i] + "<br>";
      }
   }
   
   r = r + "<button onclick='hand_selected()'>Sec</button>";
   
   return r;
}


function imageDeneme() {
   
   alert("image deneme");
   
   // $("#image_gamer_1 #image_pos_1").text('<img src="img/tri_full.png">');
   // $("#image_gamer_1 #image_pos_1").prepend($('<img>',{id:'theImg',src:'img/tri_full.png'}));
   
   var img = document.createElement("IMG"); 
   img.src = "img/tri_full.png"; 
   $('#image_gamer_1 #image_pos_1 #image_pos_1_inner').html(img);
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


function start_game() {
   
   g = new Game();
   
   $("#div_names").show();
}

function hand_selected() {
   
   var selected_hand = $('input[name="game_select_radio"]:checked').val();
     
   $("#div_games").hide();
   
   alert(selected_hand);
   
   
}

function start_hand() {
   
   $("#popupGames").html(get_games_html());
   
   $("#div_games").show();
   
}

function getNames() {
      
   name_1 = $("#inp_name_1").val();
   name_2 = $("#inp_name_2").val();
   name_3 = $("#inp_name_3").val();
   name_4 = $("#inp_name_4").val();
   
   var array = [];
   array.push(name_1);
   array.push(name_2);
   array.push(name_3);
   array.push(name_4);
   
   g.initNames(array);
   
   $("#out_name_1").text(g.getGamer(0).getName());
   $("#out_name_2").text(g.getGamer(1).getName());
   $("#out_name_3").text(g.getGamer(2).getName());
   $("#out_name_4").text(g.getGamer(3).getName());
      
   div_hide();
   $("#start_game").hide();
   
}
