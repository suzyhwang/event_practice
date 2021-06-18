const quotes = [
    {
        quote: "Dont't worry if it doesn't work right.If everything did, you'd be out of a job.",
        author: "anonymous"
    },
    {
        quote: "Don't comment bad code - rewrite it",
        author: "Brian Kernighan"
    },
    {
        quote: "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen.",
        author: "Paul Graham"
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        author: "Dan Salomon"
    },
    {
        quote: "Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        author: "Rajanand"
    },
    {
        quote: "System programmers are the high priests of a low cult.",
        author: "Robert S. Barton"
    },
    {
        quote: "I don't care if it works on your machine! We are not shipping your machine!",
        author: "Vidiu Platon"
    },
    {
        quote: "The computer was born to solve problems that did not exist before",
        author: "Bill Gates"
    },
    {
        quote: "People don't care about what you say, they care about what you build.",
        author: "Mark Zuckerberg"
    },
    {
        quote: "We have to stop optimizing for programmers and start optimizing for users.",
        author: "Jeff Atwood"
    },
    {
        quote: "If the code and the comments do not match, possibly both are incorrect.",
        author: "Norm Schryer"
    },
    {
        quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
        author: "Linus Torvalds"
    }
]
//12개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- by. ${todaysQuote.author}`;