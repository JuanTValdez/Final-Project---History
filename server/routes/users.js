// -- routes/catRoutes.js
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = 'SELECT * FROM users';
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};

// const router = require('express').Router();

// const users = ['Bob', 'Alex', 'Will', 'Tristan'];
// console.log(users);
// module.exports = (db) => {
//   // all routes will go here
//   router.get('/', (req, res) => {
//     res.json(users);
//   });

//   return router;
// };
