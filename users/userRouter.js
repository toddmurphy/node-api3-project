const express = require('express');
const db = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  const userPost = req.body;

  db.insert(userPost)
    .then(post => {
      res.status(201);
      res.json(post);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no user posted to server', error });
    });
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(users => {
      res.status(201);
      res.json(users);
    })
    .catch(error => {
      res.status(500);
      res.json({ message: 'Sorry, no users found on server', error });
    });
});

router.get('/:id', (req, res) => {
  // do your magic!
  const userID = req.params.id;

  db.getById(userID)
    .then(user => {
      if (userID) {
        res.status(201);
        res.json(user);
      } else {
        res.status(401);
        res.json({ message: 'Sorry, no user with that id', error });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no user with ID returned from server', error });
    });
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const deleteID = req.params.id;

  db.remove(deleteID)
    .then(deletedUser => {
      if (deleteID) {
        res.status(200);
        res.json(deletedUser);
      } else {
        res.status(400);
        res.json({ message: 'Sorry, user not deleted' });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, user not deleted from server', error });
    });
});

router.put('/:id', (req, res) => {
  // do your magic!
  const updateID = req.params.id;
  const updatedUser = req.body;

  db.update(updateID, updatedUser)
    .then(updatedInfo => {
      res.status(200);
      res.json(updatedInfo);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, user not updated on the server', error });
    });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
