Qturn="Player1";
Aturn="Player2";
function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actualAnswer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"x"+number2+"</h4>";
    input_box="<br>Anwer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=all;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
function check(){
    get_answer= document.getElementById("input_check_box").value;
    if (get_answer==actualAnswer){
        
         if(Aturn="Player1"){
             update_player1_score= player1_score+1
             document.getElementById("player1_score").innerHTML=update_player1_score;
         }
         else{
             update_player2_score= player2_score+1;
             document.getElementById("player2_score").innerHTML=update_player2_score;
         }
     if(Qturn=="Player1"){
         Qturn="Player2"
         document.getElementById("player_question").innerHTML="Question turn -"+localStorage.getItem("Player_1_Username");
     }
     else{
         Qturn="Player1";
         document.getElementById("player_question").innerHTML="Question turn-"+localStorage.getItem("Player_2_Username");
     }

         
    }
}
