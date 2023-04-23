// Grammar rules
let rules = {
    "start": ["#Greeting# #Name#!", "#Task#", "#Team#", "#JavaScript#"],
    "Task": ["We have been given an assignment on Context Free Grammar! And this is a sample code.",
             "Our task is to implement a context-free grammar in Javascript.",
             "The assignment is about generating random sentences using context-free grammar.",
             "We need to create a program that generates sentences based on a set of rules."],
    "Greeting": ["Hello", "Hi", "Hey", "Greetings", "Safe", "How are you doing", "Yo", "What's up"],
    "Name": ["Kabs Muuka", "Bob", "Edward Jr", "Gabriel"],
    "Team": ["#Name# is in group 7, and we are a team of 5 members.",
             "Our team consists of #Name#, #Name#, #Name#, #Name#, and #Name#.",
             "In our team, we have #Name#, #Name#, #Name#, #Name#, and #Name#.",
             "We are a team of 5 members, including #Name#, #Name#, #Name#, #Name#, and #Name#."]
    "Javascript" : ["#Name# loves using Javascript.",]
  };
  
  let grammar;
  //function that calls the GenerateCode() when the button is clicked
  function GenerateCode(){
    grammar = tracery.createGrammar(rules);
    let result = grammar.flatten("#start#");
    //prints out the results 
    console.log(result);

    //renders to the html Webpage
    let storyOutput = document.getElementById("storyOutput");
    storyOutput.textContent = result;
  }
