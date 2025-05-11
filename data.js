let allQuestion = [

       {
          question : "HTML stand for?",
          option : [
            {answer : "Hypertext Makeup Language", isCorrect : false },
            {answer : "Hypertext Make Language", isCorrect : false },
            {answer : "Hypertext Markup Language", isCorrect : true },
          ]
       },

    {
       question : "HTML and HTML5 difference?",
       option : [
         {answer : "all element supported", isCorrect : false },
         {answer : "HTML does not supported audio vedio element", isCorrect : true },
         {answer : "HTML does supported audio vedio element", isCorrect : false },
       ]
    },
]

let index = 0

function displayQuestions(){
    document.getElementById("displayQuestions").innerHTML = allQuestion[index].question

    let btn = ""
    allQuestion[index].option.forEach((opt) => {
      btn += `  <button class="btn btn-outline-warning text-dark" > ${opt.answer} </button>`
    })
    document.getElementById("btn").innerHTML = btn
   
}

function next(){
   index++
   document.getElementById("displayquestions").innerHTML = allQuestion[index].question
   displayQuestions()
}

function back(){
   index--
   document.getElementById("displayquestions").innerHTML = allQuestion[index].question
   displayQuestions()
}

displayQuestions()

