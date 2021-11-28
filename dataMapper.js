// On récupère le connecteur de la BDD
const database = require('./database');

const dataMapper = {
  getAllPokemons: (callback) => {
    const query = {
      text: `SELECT * FROM pokemon;`
    }
    // Et on fait la query
    database.query(query, (err, result) => {
      // Si erreur
      if (err) {
        // On transmet sans résultat ( puisque y'a une erreur )
        callback(err, null);
      }
      // En cas de succès
      else {
        // On déclenche la suite sans erreur
        callback(null, result?.rows)
      }
    });
  },

  getOnePokemonByNumero: (numero, callback) => {
    const query = {
      text: `
        SELECT * 
        FROM pokemon 
        WHERE numero = $1;
      `,
      values: [numero]
    }
    // Et on fait la query
    database.query(query, (err, result) => {
      // Si erreur
      if (err) {
        // On transmet sans résultat ( puisque y'a une erreur )
        callback(err, null);
      }
      // En cas de succès
      else {
        // On déclenche la suite sans erreur
        callback(null, result?.rows?.[0] || null)
      }
    });
  },

  getPokemonTypesByPokemonNumero: (numero, callback) => {
    const query = {
      text: `
      SELECT type.* 
      FROM type
      JOIN pokemon_type ON type.id = pokemon_type.type_id
      JOIN pokemon ON pokemon_type.pokemon_numero = pokemon.numero
      WHERE pokemon.numero = $1;
      `,
      values: [numero]
    }
    // Et on fait la query
    database.query(query, (err, result) => {
      // Si erreur
      if (err) {
        // On transmet sans résultat ( puisque y'a une erreur )
        callback(err, null);
      }
      // En cas de succès
      else {
        // On déclenche la suite sans erreur
        callback(null, result?.rows || null)
      }
    });
  }


  
}

module.exports = dataMapper; 