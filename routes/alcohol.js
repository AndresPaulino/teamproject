module.exports = function (app) {
  let alcohol = [
    {
      name: 'whiskey',
      ingredients: ['corn', 'rye', 'barley'],
    },
    {
      name: 'rum',
      ingredients: ['molasses', 'sugar'],
    },
    {
      name: 'tequila',
      ingredients: ['agave', 'mezcal'],
    },
  ];

  app.get('/alcohol', (req, res) => {
    res.json(alcohol);
  });

  app.get('/alcohol/:id', (req, res) => {
    let id = req.params.id;

    let found = false;
    let drink = null;

    alcohol.forEach((alcohol) => {
      if (alcohol.name === id) {
        found = true;
        drink = alcohol;
        console.log('found');
      }
    });

    if (drink) {
      res.json(drink.ingredients.toString(''));
    } else {
      res.send('Drink not found');
    }
  });

  app.post('/alcohol', (req, res) => {
      let data = req.body;
      alcohol.push(data);
    res.send(data);
  });
    
  app.delete('/alcohol/:id', (req, res) => {
    let id = req.params.id;

    let found = false;

    for (let i = 0; i < alcohol.length;  i++) {
      if (alcohol[i].name === id) {
        found = true;
        alcohol.splice(i, 1);
      }
    }

    if (found) {
      res.send('Deleted');
    } else {
      res.send('Drink not found');
    }

  });
};
