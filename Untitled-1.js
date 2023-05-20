///`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
//`POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// const router = require('express').Router()
// const notes = require('../db/db.json')
// const fs = require('fs');
// const uuid = require('uuid');


// // get method to show the saved notes
// router.get('/', (req, res) => {
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//     res.send(JSON.parse(data))
//   })
// })

// // post method to save new notes
// router.post('/', (req, res) => {
//   const newNotes = {id: uuid.v4(),...req.body}
//   notes.push(newNotes)
  

//   fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
//      res.send('Note Saved')
     
//   })
// })
// // delete method to delete the notes
//  router.delete('/:id', (req, res) => {
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//    let notesData = JSON.parse(data)
//    notesData = notesData.filter((item) => {return item.id != id})
//    fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
//     res.send('Write to file successful')
//  })
//   })
//  })

// module.exports = router

router.get('/', (req, res) => {
    // Read the db.json file and send the data as a JSON response
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });
  
  router.post('/', (req, res) => {
    // Read the db.json file and append the new note to the data
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      const newNote = { ...req.body, id: uuidv4() };
      notes.push(newNote);
      // Write the updated data back to the db.json file
      fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(newNote);
      });
    });
  });
  
  router.delete('/:id', (req, res) => {
    // Read the db.json file and remove the note with the given id
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      const filteredNotes = notes.filter((note) => note.id !== req.params.id);
      // Write the updated data back to the db.json file
      fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(filteredNotes), (err) => {
        if (err) throw err;
        res.json({ message: 'Note deleted' });
      });
    });
  });
  
  module.exports = router;
  