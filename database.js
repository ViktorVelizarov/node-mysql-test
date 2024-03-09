//here is all the code that connects to mysql and queries the db

import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'notes_app'
  }).promise()

  export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
  }

  const notes = await getNotes()
  console.log(notes)