const router = require('express').Router();

const Files = require('./files-model.js');

router.post('/upload', (req, res) => {
    const file = req.body;
  
    Files.add(file)
      .then(file => {
        res.status(201).json(file);
      })
      .catch(error => {
        res.status(500).json({
          message: `There was an error attempting to upload file: ${error}.`
        });
      });
  });

router.get('/upload', (req, res) => {
    Files.find()
        .then(files => {
            res.json(files);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Files.findById(req.params.id)
        .then(file => {
            res.status(200).json(file);
        })
        .catch(error => {
            console.log(error)
            res.status(404).send({ msg: 'File not found' });
        })
});

router.delete('/:id', (req, res) => {
    Files.remove(req.params.id)
        .then(remove => {
            res.status(200).json(remove)
        })
});

module.exports = router;
