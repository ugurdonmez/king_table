var g;

var gameNames = ["rifki", "kupa almaz", "erkek almaz", "el almaz", "kiz almaz", "son iki", "koz"];
var gamePoints = [ -320, -30, -60, -50, -100, -180, 50];
var gameSize = [1,13,8,13,4,2,13];

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
   this.selectedHand;
   this.handEnteredValue;
   this.positiveRound = 0;
   this.negativeRound = 0;
   this.gameTypes = [0,0,0,0,0,0,0];
   
   this.addHand = function (hand) {
      this.hands.push(hand);
   };
   
   this.incrementGameTypes = function(id) {
      this.gameTypes[id]++;
   };
   
   this.getPositiveRound = function() {
      return this.positiveRound;
   };
   
   this.setPositiveRound = function(value) {
      this.positiveRound = value;
   };
   
   this.incrementPositiveRound = function() {
      this.positiveRound += 1;
   };
   
   this.getNegativeRound = function() {
      return this.negativeRound;
   };
   
   this.setNegativeRound = function(value) {
      this.negativeRound = value;
   };
   
   this.incrementNegativeRound = function() {
      this.negativeRound += 1;
   };
   
   this.getHandEnteredValue = function() {
      return this.handEnteredValue;
   };
   
   this.setHandEnteredValue = function (value) {
      this.handEnteredValue = value;
   };
   
   this.getSelectedHand = function() {
      return this.selectedHand;
   };
   
   this.setSelectedHand = function(selectedHand) {
      this.selectedHand = selectedHand;
   };
   
   this.getGamer = function(id) {
      return this.gamers[id % 4];
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
      
      var gamer = this.gamers[ this.round % 4  ];
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
   this.punish = [0,0,0,0];
   
   this.addPunish = function(id, size) {
      this.punish[id] = size;
   };
   
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
      if (games[i] == 1) {
         r = r + " <input type='radio' name='game_select_radio' value= '" + i + "'> " + gameNames[i] + "<br>";
      }
   }
   
   r = r + "<button onclick='hand_selected()'>Sec</button>";
   
   return r;
}


function imageDeneme() {
      
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


function finalizeHand() {
   
   $("#div_hands").hide();
   
   var selected_hand = g.getSelectedHand();
   var entered_value = g.getHandEnteredValue();
   
   if ( entered_value != gameSize[selected_hand] ) {
      return;
   }
   
   var h1 = parseInt($("#punish_1").val());
   var h2 = parseInt($("#punish_2").val());
   var h3 = parseInt($("#punish_3").val());
   var h4 = parseInt($("#punish_4").val());
   
   var hand = new Hand();
   
   hand.addPunish(0,h1);
   hand.addPunish(1,h2);
   hand.addPunish(2,h3);
   hand.addPunish(3,h4);
   
   hand.setGamer( g.getGamer(g.getRound() - 1 ) );
   hand.setRound( g.getRound() );
   hand.setType( g.getSelectedHand() );
   
   g.addHand(hand);

   // update gamers
   g.getGamer(0).addPoint(  h1 * gamePoints[selected_hand]);
   g.getGamer(1).addPoint(  h2 * gamePoints[selected_hand]);
   g.getGamer(2).addPoint(  h3 * gamePoints[selected_hand]);
   g.getGamer(3).addPoint(  h4 * gamePoints[selected_hand]);   
   
   
   var r_index = g.getRound() % 4;
   if ( r_index == 0 ) {
      r_index = 4;
   }
   
   
   
   // negative hand
   if ( selected_hand != 6 ) {
      var neg_index = g.getGamer(g.getRound() -1 ).getNegativeHandNo();
      var img = document.createElement("IMG"); 
      img.src = "img/circle_full.png"; 
      $('#image_gamer_'+ r_index +' #image_neg_'+neg_index+' #image_neg_'+neg_index+'_inner').html(img);
      
      var index = g.getNegativeRound();
      var str = '#neg_'+ index +'_gamename';
      $(str).text(gameNames[selected_hand]);
      $("#neg_"+index+"_gamer_1").text(h1 * gamePoints[selected_hand]);
      $("#neg_"+index+"_gamer_2").text(h2 * gamePoints[selected_hand]);
      $("#neg_"+index+"_gamer_3").text(h3 * gamePoints[selected_hand]);
      $("#neg_"+index+"_gamer_4").text(h4 * gamePoints[selected_hand]);
   }
   else {
      var pos_index = g.getGamer(g.getRound() -1 ).getPositiveHandNo();
      var img = document.createElement("IMG"); 
      img.src = "img/tri_full.png"; 
      $('#image_gamer_'+ r_index +' #image_pos_'+pos_index+' #image_pos_'+pos_index+'_inner').html(img);
      
      var index = g.getPositiveRound();
      $("#pos_"+index+"_gamer_1").text(h1 * gamePoints[selected_hand]);
      $("#pos_"+index+"_gamer_2").text(h2 * gamePoints[selected_hand]);
      $("#pos_"+index+"_gamer_3").text(h3 * gamePoints[selected_hand]);
      $("#pos_"+index+"_gamer_4").text(h4 * gamePoints[selected_hand]);
   }
   
   
   
   // control game is finished or not
   
   
   
}

function inc_dec(type, gamer) {
   
   var selected_hand = g.getSelectedHand();
   
   var h1 = parseInt($("#punish_1").val());
   var h2 = parseInt($("#punish_2").val());
   var h3 = parseInt($("#punish_3").val());
   var h4 = parseInt($("#punish_4").val());
   
   var total = h1+h2+h3+h4;
   
   // decrease
   if ( type == 1 ) {
      if ( gamer == 1 ) {
         if ( h1 > 0 ) {
            $("#punish_1").val(h1-1);
            total -= 1;
         }
      }
      else if ( gamer == 2 ) {
         if ( h2 > 0 ) {
            $("#punish_2").val(h2-1);
            total -= 1;
         }
      }
      else if ( gamer == 3 ) {
         if ( h3 > 0 ) {
            $("#punish_3").val(h3-1);
            total -= 1;
         }
      }
      else if ( gamer == 4 ) {
         if ( h4 > 0 ) {
            $("#punish_4").val(h4-1);
            total -= 1;
         }
      }
   }
   else {
      if ( total < gameSize[selected_hand] ) {
         if ( gamer == 1 ) {
            $("#punish_1").val(h1+1);
            total += 1;
         }
         else if ( gamer == 2 ) {
            $("#punish_2").val(h2+1);
            total += 1;
         }
         else if ( gamer == 3 ) {
            $("#punish_3").val(h3+1);
            total += 1;
         }
         else if ( gamer == 4 ) {
            $("#punish_4").val(h4+1);
            total += 1;
         }
      }
   }
   
   g.setHandEnteredValue(total);
   
}


function start_game() {
   
   g = new Game();
   
   $("#div_names").show();
}

function hand_selected() {
   
   var selected_hand = $('input[name="game_select_radio"]:checked').val();
     
   $("#div_games").hide();
   
   g.setSelectedHand(selected_hand);
   
   g.incrementGameTypes(selected_hand);
   
   
   g.incrementRound();
   // update gamer
   if ( parseInt(selected_hand) == 6 ) {
      g.getGamer(g.getRound() - 1).increasePositive();
      g.incrementPositiveRound();
   }
   else {
      g.getGamer(g.getRound() - 1).increaseNegative();
      g.incrementNegativeRound();
   }
   
   
   
   $("#punish_1").val(0);
   $("#punish_2").val(0);
   $("#punish_3").val(0);
   $("#punish_4").val(0);
   
   $("#div_hands").show();
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
