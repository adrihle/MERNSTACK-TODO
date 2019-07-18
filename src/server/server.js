const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('====================================');
    console.log('server running correctly on port: ' + app.get('port'));
    console.log('====================================');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas'
})

//Post´s REST API
const queryGet = 'SELECT * FROM tasks'
const queryGetSpecific = 'SELECT * FROM tasks WHERE id = ?'
const queryInsert = 'INSERT INTO tasks set ?'
const queryDelete = 'DELETE FROM tasks WHERE id = ?'
const queryUpdate = 'UPDATE tasks set ? WHERE id = ?'

app.get('/posts', async (req, res) => {
    await pool.query(queryGet, (err, rows) => {
        res.send(rows)
    })
})

app.get('/posts/:id', async (req, res) => {
    await pool.query(queryGetSpecific, [req.params.id], (err, rows) => {
        res.send(rows)
    })
})

app.delete('/posts/:id', async (req, res) => {
    await pool.query(queryDelete, [req.params.id], () => {
        res.send('deleted!')
    })
})

app.post('/posts', async (req, res) => {
    const { title, description } = req.body
    const newtitle = {
        title,
        description
    }
    await pool.query(queryInsert, [newtitle], () => {
        res.send('inserted!')
    })
})

app.put('/posts/:id', async (req, res) => {
    const { title, description } = req.body
    const updatetitle = {
        title,
        description
    }
    await pool.query(queryUpdate, [updatetitle, req.params.id], () => {
        res.send('updated!')
    })
})

//POST COMMENTS REST API
const GetPostComments = 'SELECT * FROM comments WHERE postid = ?'
const PushPostComments = 'INSERT INTO comments set ?'

app.get('/comments/:postid', async (req, res) => {
    await pool.query(GetPostComments, [req.params.postid], (err, rows) => {
        res.send(rows)
    })
})

app.post('/comments', async (req, res) => {
    const { postid, description, author } = req.body
    const postComment = {
        postid,
        description,
        author
    }
    await pool.query(PushPostComments, [postComment], () => {
        res.send('inserted!')
    })
})