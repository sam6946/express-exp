const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


// const students = [
//     {name: "Sam", skills: ["HTML", "PHP", "NODEJS"]},
//     {name: "Perine", skills: ["HTML", "PHP", "NODEJS"]},
//     {name: "Ronaldo", skills: ["HTML", "PHP", "NODEJS"]},
// ]


//creation de notre objet dynamique

const students = [
    {
    name: "Taka Sam",
    skill: ["Html", "Css", "Javascript", "Nodejs"],
  },
  {
    name: "Brown",
    skill: ["Java", "Php", "Javascript", "Nodejs"],
},
{
    name: "Grace",
    skill: ["Java", "Php", "Javascript", "Nodejs"],
},
{
    name: "Leee",
    skill: ["Java", "Php", "Javascript", "Nodejs"],
}

]

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

//Routing
app.get('/', (req,res) =>{
    res.render('index');
});

app.get('/about', (req,res) =>{
    res.render('about', {students: students});
});





app.listen(8000, () =>{
    console.log('server is running at port: ', 8000);
} );