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


// TODO: continue here
function get_games_html() {
   
   var str = "<div id='game' ";
   
   if ( king != 2 ) {
      str += 
   }
   
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