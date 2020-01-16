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
  const deleteID = req.params.id;

  db.remove(deleteID)
    .then(deletedPost => {
      if (deleteID) {
        res.status(200);
        res.json(deletedPost);
      } else {
        res.status(404);
        res.json({ message: 'Sorry, post not deleted' });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, post not removed from server', error });
    });
});

router.post('/', (req, res) => {
  const newPost = req.body;

  db.insert(newPost)
    .then(comment => {
      res.status(201);
      res.json(comment);
    })
    .catch(error => {
      res.status(400);
      res.json({ errorMessage: 'Sorry, no post added to server', error });
    });
});

router.put('/:id', (req, res) => {
  // do your magic!
  const editID = req.params.id;
  const editPost = req.body;

  db.update(editID, editPost)
    .then(updatedPost => {
      res.status(200);
      res.json(updatedPost);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, post not updated on the server', error });
    });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  
}

module.exports = router;
