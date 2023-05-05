var question = "What is your name?";
var response = prompt(question);
alert("Hello, "+response+", have a nice day!")
var score = 0;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
function answer1(){
  if(q1 === 0){
    var question1 = prompt("Give your answer.");
    if(question1 === '1'){
      score = score + 1;
    }
    q1 = 1;
  }
}
function answer2(){
  if(q2 === 0){
    var question2 = prompt("Give your answer.");
    if(question2 === '27'){
      score = score + 1;
    }
    q2 = 1;
  }
}
function answer3(){
  if(q3 === 0){
    var question3 = prompt("Give your answer.");
    if(question3 === '不吃'){
      score = score + 1;
    }
    q3 = 1;
  }
}
function answer4(){
  if(q4 === 0){
    var question4 = prompt("Give your answer.");
    if(question4 === '1/2'){
      score = score + 1;
    }
    q4 = 1;
  }
}
function over(){
  if(score === 4){
    alert("Congratulations! You give all the right answers.");
  }
  else if (score === 2 || score === 3) {
    alert("Sorry. You only give "+score+" right answers.");
  }
  else if (score === 1){
    alert("Sorry. You only give "+score+" right answer.");
  }
  else{
    alert("Sorry. You got all the answrs wrong.");
  }
}
