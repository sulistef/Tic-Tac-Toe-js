var player1token = "X";
var player2token = "O";

var currplayer = 1;
var game = 1;

$("#msg").text("To play : Player " + currplayer);

function hover() {
    $(this).addClass("survol");
}

function raus() {
    $(this).removeClass("survol");
}

function clique(e) {
    if (game === 1) {
        if($(this).text() === "X" || $(this).text() === "O") {
            $("#msg").append("<br />You can not play in this box !");
        } else {
            if (currplayer === 1) {
                $(this).addClass("player1");
                $(this).text(player1token);
                // alert("victory : " + checkVictory());
                if (checkVictory() == 'X') {
                    alert ("PLAYER 1 WON !");
                    game = 0;
                }else {
                    currplayer = 2;
                }
                    
            } else if (currplayer === 2) {
                $(this).addClass("player2");
                $(this).text(player2token);
                // alert("victory : " + checkVictory());
                if (checkVictory() == 'O') {
                    alert ("PLAYER 2 WON !");
                    game = 0;
                } else {
                currplayer = 1;
                }
            }
            $("#msg").text("To play : Player " + currplayer);
        }
    }
}

function checkVictory() {
    var boxi1 = $("#1").text();
    var boxi2 = $("#2").text();
    var boxi3 = $("#3").text();
    var boxi4 = $("#4").text();
    var boxi5 = $("#5").text();
    var boxi6 = $("#6").text();
    var boxi7 = $("#7").text();
    var boxi8 = $("#8").text();
    var boxi9 = $("#9").text();

    if((boxi1 === boxi2) && (boxi2 === boxi3)) {
        return boxi1;
    } else if ((boxi4 === boxi5) && (boxi5 === boxi6)) {
        return boxi4;
    } else if ((boxi7 === boxi8) && (boxi8 === boxi9)) {
        return boxi7;
    } else if ((boxi1 === boxi4) && (boxi4 === boxi7)) {
        return boxi1;
    } else if ((boxi2 === boxi5) && (boxi5 === boxi8)) {
        return boxi2;
    } else if ((boxi3 === boxi6) && (boxi6 === boxi9)) {
        return boxi3;
    } else if ((boxi1 === boxi5) && (boxi5 === boxi9)) {
        return boxi1;
    } else if ((boxi3 === boxi5) && (boxi5 === boxi7)) {
        return boxi3;
    } else {
        return 0;
    }
}

$("td").mouseenter(hover);
$("td").mouseleave(raus);
$("td").click(clique);

$("button").click(function() {location.reload()});
