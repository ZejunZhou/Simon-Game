// Define the color pattern of the game
const color_array = ["green", "red", "yellow", "blue"];

//Define the color order through playing

var color_order = []

//Define the color pattern of user click

var user_click = []

/**Helper Function to generate random Integer number 
 * Example: if threshold is 4
 * it will generate random number from 0 - 3
*/
function generateRandomInt(threshold){
    var randomNumber = Math.random() * threshold;
    return Math.floor(randomNumber);
}


/**This function generate squence from 0 -3 to represent color pattern of color
 * Green - 0
 * Red - 1
 * Yellow - 2
 * Blue - 3
*/
function nextSquence (){
    var randomNumber = generateRandomInt(4);
    var randomColor = color_array[randomNumber]
    color_order.push(randomColor);
    $(".btn" + "." + randomColor).fadeOut(100).fadeIn(100).fadeIn(100);
    generateAudio(randomColor);
}

function generateAudio(audioType){
    var audio = new Audio("sounds/" + audioType + ".mp3");
    audio.play();
}


$("body").on("keydown", function (){
    
    nextSquence();
    //add event listner to all button
    $(".btn").on("click", function (event){
        //add the current clicked color to user_click order
        var clicked_id = $(this).attr("id")
        //add animation when user click the button
        $(this).fadeOut(100).fadeIn(100).fadeIn(100);
        user_click.push(clicked_id);
        generateAudio(clicked_id);
    })

})
