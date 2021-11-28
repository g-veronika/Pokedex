const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (req, res, next) => {
        // On récupère la liste des pokémons
        dataMapper.getAllPokemons((err, pokemons) => {
          // SI j'ai une erreur
          if (err) {
            // Je laisse le middleware de gestion d'erreur s'en occuper
            return next(err);
          }
          // Si tout s'est bien passé, on rend la vue avec les pokemons
          res.render('pokemonList', {
            pokemons,
          });
        });
      },

      detailPage: (req, res, next) => {
        // On récupère le numéro du pokémon via la route
        const numero = req.params.numero;
    
        // On va le récupèrer en BDD
        // on demande au dataMapper de le faire pour nous
        dataMapper.getOnePokemonByNumero(numero, (err, pokemon) => {
          // SI j'ai une erreur
          if (err) {
            // Je laisse le middleware de gestion d'erreur s'en occuper
            return next(err);
          }
          else if (pokemon === null){
            return res.redirect('/pokemon-not-found');
          }


        // On récupère les types du pokemon
        dataMapper.getPokemonTypesByPokemonNumero(numero, (err, types) => {
            if (err) {
            // Je laisse le middleware de gestion d'erreur s'en occuper
            return next(err);
            }
            pokemon.types = types;

            res.render('pokemonDetail', pokemon);
        });
         
        })

    }

    }
module.exports = mainController;