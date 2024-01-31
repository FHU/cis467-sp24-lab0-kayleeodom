const facts = require('./facts.json')

const express = require('express')
const app = express()

const PORT = process.env.PORT || "3000"

app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log( `App is running on http://localhost:${PORT}...`)
})

app.get("/", (req, res) => {

    res.render('main', {title:"Main",message:"Welcome to Kaylee's Lab 0"})

    //res.send("Welcome to Lab 0")

})


// http://localhost:3000/greet?name=kaylee&dob=2002
app.get('/greet', (req, res)=> {
    //console.log(req.query)
    
    const name = req.query.name
    const dob = req.query.dob
    const currentYear = new Date().getFullYear()

    const age1 = currentYear - parseInt(dob)
    const age2 = age1 - 1


    //res.send(`Hello, ${req.query.name}`)
    res.render('greet', {title: "Greet Page", message: `Hello, ${name}!\nYou are ${age2} or ${age1} years old!`})
})

// sum, difference, product(times), or quotient

// http://localhost:3000/math/:num1/:op/:num2 
app.get('/math/:num1/:op/:num2', (req, res)=> {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const math = req.params.op;
    let answer

    switch(math){
        case 'plus':
            answer = num1 + num2
            break
        case 'minus':
            answer = num1 - num2
            break
        case 'times':
            answer = num1 * num2
            break
        case 'divideby':
            answer = num1 / num2
            break
        case 'tothepowerof':
            answer = Math.pow(num1,num2)
            break
    }

    //res.send(`${req.params.num1}`)
    res.render('math',{title:"Math Page",message:`${answer}`} )
})

// need to do

// http://localhost:3000/pandorasbox 
app.get('/pandorasbox', (req, res)=> {

    // do the work

    // Random Dad Joke

    // Random Fact Work
    const length = facts.length
    const random = Math.floor(Math.random() * length)
    const ranfact = facts[random].fact

    // Random Image Work

    res.render('pandorasbox', {title: "Pandora's Box", message:ranfact} )

})