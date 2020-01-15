const express = require('express');
const db = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(posts => {
      res.status(200);
      res.json(posts);
    })
    .catch(error => {
      res.status(500);
      res.json({ message: 'Sorry, no useres found on server', error });
    });
});

router.get('/:id', (req, res) => {
  // do your magic!
  const postsID = req.params.id;

  db.getById(postsID)
    .then(post => {
      if (postsID) {
        res.status(200);
        res.json(post);
      } else {
        res.status(404);
        res.json({ error: 'Sorry, no post with that ID. ' });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no post returned by that ID from server', error });
    });
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
