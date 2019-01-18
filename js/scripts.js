
//Global Variables
var deposit, wisthraw;
//Back-End Logic
//Constructor function for a player
function activity(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}
//Function to disable and enable activity areas according to which activity is active.
function activeActivity() {
    if (deposit.active === true && wisthraw.active === false) {
        $('.depositArea').children().prop('disabled', false);
        $('.depositArea').removeClass('disableActivityArea');
        $('.wisthrawArea').children().prop('disabled', true);
        $('.wisthrawArea').addClass('disableActivityArea');
    } else {
        $('.depositArea').children().prop('disabled', true);
        $('.depositArea').addClass('disableActivityArea');
        $('.wisthrawArea').children().prop('disabled', false);
        $('.wisthrawArea').removeClass('disableActivityArea');
    }
};
//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    this.diceRoll = randomNo;
    activeActivity();
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        if (this.active === deposit.active) { //disable and enable gaming areas when dice is a 1 according to which player is active.
            deposit.active = false;
            wisthraw.active = true;
            $('.depositArea').children().prop('disabled', true);
            $('.depositArea').addClass('disableActivityArea');
            $('.wisthrawArea').children().prop('disabled', false);
            $('.wisthrawArea').removeClass('disableActivityArea');
        } else if (this.active === wisthraw.active) {
            wisthraw.active = false;
            deposit.active = true;
            $('.wisthrawArea').children().prop('disabled', true);
            $('.wisthrawrea').addClass('disableActivityArea');
            $('.depositArea').children().prop('disabled', false);
            $('.depositArea').removeClass('disableActivityArea');
        } else {
            console.log("not working");
        }
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};
//Function on what is to happen when a player holds the game.
Activity.prototype.hold = function () {
    activeActivity();
    this.overallScore += this.turnTotal;
    if (this.overallScore >= 100) {
        alert("Game Over. You win!!!!");
        resetFields();
        alert('To play with a new partner click New Game.')

    } else {
        return false;
    }
    console.log('the turn total is: ' + this.turnTotal);
    return this.overallScore;
};
//Function to reset the form input fields, re-enable the buttons, remove the opacity from the gaming area and reset the scores to 0.
function resetFields() {
    $("input#depositAmount").val("");
    $("input#wisthrawAmount").val("");
    $('.depositArea').children().prop('disabled', false);
    $('.wisthrawArea').children().prop('disabled', false);
    $('.depositrea').removeClass('disableActivityArea');
    $('.wisthrawArea').removeClass('disableActivityArea');
    var theActivities = [deposit, wisthraw];
    theActivities.forEach(function (active) {
        player.diceRoll = 0;
        player.turnTotal = 0;
        player.overallScore = 0;
    })
    var outputs = [$('.diceRoll1'), $('.turnScore1'), $('.overallScore1'), $('.diceRoll2'), $('.turnScore2'), $('.overallScore2')];
    outputs.forEach(function (output) {
        output.text(0);
    })

};
//Front End Logic
$(document).ready(function () {
    $("#rulesHeader").click(function () { //Makes the 'Rules' title clickeable and the rules themselves hideable.
        $("#rulesDefinitions").toggle();
    });
    //Actions when player enters name
    $("#activityNames").submit(function (event) {
        event.preventDefault();
        $("#instructionDefinitions").hide();
        $("form").hide();
        $(".newClient").show();
        $(".newClient").click(function () { //Makes the 'New Game' title clickeable and the form reappear.
            $("form").show();
            $('#activityArea').hide();
            $(".newClient").hide();
            resetFields();
        });
        $('#activityArea').show();
        //Store the players names in variables.
        var activity1 = $("#depositAmount").val();
        var activity2 = $("#wisthrawAmount").val();
        //Put the names into an object using the constructor Players.
        deposit = new Activity(activity1);
        wisthraw = new Activity(activity2);
        //Output the names into each appropriate section
        $(".plOutput").text(player1.name);
        $(".player2NameOutput").text(player2.name);
        resetFields(); //Clear the form input fields
    });
    //Display dice roll number and turn total when the roll button is clicked
    $('.roll1').click(function (event) { //roll button for player1
        event.preventDefault();
        //Activate Gaming Area
        player1.active = true;
        player2.active = false;
        player1.roll(); //call the function to generate random numbers
        $('.diceRoll1').text(player1.diceRoll); //display the rolled dice number
        $('.turnScore1').text(player1.turnTotal); //display the turn score (temporary score)
    });
    $('.roll2').click(function (event) { //roll button for player2
        event.preventDefault();
        //Activate Gaming Area
        player2.active = true;
        player1.active = false;
        player2.roll(); //call the function to generate random numbers
        $('.diceRoll2').text(player2.diceRoll); //display the rolled dice number
        $('.turnScore2').text(player2.turnTotal); //display the turn score (temporary score)
    });

    //Display overall score when the hold button is clicked
    $('.hold1').click(function (event) { //hold button for player1
        event.preventDefault();
        //Deactivate Gaming Area
        player1.active = false;
        player2.active = true;
        player1.hold(); //call the function to add the turn score to the overall score
        $('.overallScore1').text(player1.overallScore); //display the overall score
        //Clear dice roll and turn score
        player1.diceRoll = 0;
        player1.turnTotal = 0;
        $('.diceRoll1').text(player1.diceRoll);
        $('.turnScore1').text(player1.turnTotal);
    });
    $('.hold2').click(function (event) { //hold button for player2
        event.preventDefault();
        //Deactivate Gaming Area
        player2.active = false;
        player1.active = true;
        player2.hold(); //call the function to add the turn score to the overall score
        $('.overallScore2').text(player2.overallScore); //display the overall score
        //Clear turn score and total score
        player2.diceRoll = 0;
        player2.turnTotal = 0;
        $('.diceRoll2').text(player2.diceRoll);
        $('.turnScore2').text(player2.turnTotal);
    });

});