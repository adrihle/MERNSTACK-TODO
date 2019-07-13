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

const queryGet = 'SELECT * FROM tasks'
const queryGetSpecific = 'SELECT * FROM tasks WHERE id = ?'
const queryInsert = 'INSERT INTO tasks set ?'
const queryDelete = 'DELETE FROM tasks WHERE id = ?'
const queryUpdate = 'UPDATE tasks set ? WHERE id = ?'

app.get('/', async (req, res) => {
    await pool.query(queryGet, (err, rows) => {
        res.send(rows)
    })
})

app.get('/:id', async (req, res) => {
    await pool.query(queryGetSpecific, [req.params.id], (err, rows) => {
        res.send(rows)
    })
})

app.delete('/:id', async (req, res) => {
    await pool.query(queryDelete, [req.params.id], () => {
        res.send('deleted!')
    })
})

app.post('/', async (req, res) => {
    const { title, description } = req.body
    const newtitle = {
        title,
        description
    }
    await pool.query(queryInsert, [newtitle], () => {
        res.send('inserted!')
    })
})

app.put('/:id', async (req, res) => {
    const { title, description } = req.body
    const updatetitle = {
        title,
        description
    }
    await pool.query(queryUpdate, [updatetitle, req.params.id], () => {
        res.send('updated!')
    })
})