// Grammar rules
let rules = {
  "start": ["#Greeting# #Name#!", "#Task#", "#Team#"],

  "Task": ["We have an exciting project on Context Free Grammar! And this is a sample code.",
           "Our task is to create a context-free grammar parser in JavaScript.",
           "The assignment involves building a program that generates random sentences using context-free grammar rules.",
           "We need to implement a grammar engine that can generate sentences based on a set of production rules.",
           "The task is to build a context-free grammar generator in JavaScript for natural language processing.",
           "We have been given an assignment on Context Free Grammar! And this is a sample code.",
           "Our task is to implement a context-free grammar in Javascript.",
           "The assignment is about generating random sentences using context-free grammar.",
           "We need to create a program that generates sentences based on a set of rules.",
           "The task at hand is to implement a context-free grammar in Javascript and generate random sentences."],

  "Greeting":["Hello", "Hi", "Hey", "Greetings", "Safe", "How are you doing", "Yo", "What's up",
               "Hi there", "Hola", "Hey there", "Greetings!", "Hiya", "Hello!", "Howdy", "Hi, friend"],

  "Name": ["Kabs Muuka", "Robert", "Edward Jr", "Gabriel","Evens"],

  "Team": ["#Name# is in group 7, and we are a team of 5 members.",
           "Our team consists of #Name#, #Name#, #Name#, #Name#, and #Name#.",
           "In our team, we have #Name#, #Name#, #Name#, #Name#, and #Name#.",
           "We are a team of 5 members, including #Name#, #Name#, #Name#, #Name#, and #Name#.",
           "Our team, comprised of #Name#, #Name#, #Name#, #Name#, and #Name#, is working on the project.",
           "Our team is called #Name# Solutions and we are working on the project.",
           "Team #Name# is a group of talented developers working together.",
           "We have a dedicated team of #Name#, #Name#, and #Name#.",
           "In our team, we have #Name# leading the project.",
           "Our team of #Name#, #Name#, #Name#, and #Name# is committed to excellence."]
};
  let grammar;

 
  //function that calls the GenerateCode() when the button is clicked
  function GenerateCode(){
    grammar = tracery.createGrammar(rules);
    let result = grammar.flatten("#start#");
    let element = document.createElement('div');
    let message = document.querySelector('.message');

    

    //prints out the results 
    // console.log(result);

    //renders to the html Webpage
    // let storyOutput = document.getElementById("storyOutput");
    // storyOutput.textContent = result;

    message.prepend(element);
    element.innerText=result;
    element.classList.add('output');

  }
