const fs = require('fs');
const path = require('path');

module.exports = (app) => {

app.get('/api/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../db/db.json'));
});

app.post('/api/notes', (req, res) => {
    var db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db)

    var notes = {
        title: req.body.title,
        text: req.body.text,
    };

    db.push(notes);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

});
};