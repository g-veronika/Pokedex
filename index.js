//POUR CONNECTER JS AVEC BDD :
//psql -U pokemon -d pokedex -f /home/student/Bureau/html/sinbad/saison\ 4/S04E10-pokedEXpress-veronika-1994/pokedex.sql;


const dotenv = require('dotenv');

const express = require('express');
dotenv.config();

const PORT = process.env.PORT || 1234;

const router = require('./router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'));

app.use(router);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  }); 