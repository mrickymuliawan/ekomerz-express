const db = require('../connection')
var moment = require('moment');
const bcrypt = require('bcrypt')

const get = (cb) => {
  const sql = 'select * from users where deleted_at is NULL'
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const getArchived = (cb) => {
  const sql = 'select * from users where deleted_at is not NULL'
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const getSingle = (id, cb) => {
  const sql = `select * from users where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const create = (body, cb) => {
  const encryptedPass = bcrypt.hashSync(body.password, 10)
  const sql = `insert into users (name, email, password, phone) values ('${body.name}', '${body.email}', '${encryptedPass}', '${body.phone}')`

  db.query(sql, (err, result) => {
    if (err) {
      cb('error');
    }
    else {
      cb(result)
    }
  })
}

const update = (id, body, cb) => {
  const sql = `update users set name='${body.name}', phone=${body.phone} where id=${id}`

  db.query(sql, (err, result) => {
    cb(result)
  })
}

const deleteData = (id, cb) => {
  const now = moment().format('YYYY-MM-DD HH:mm:ss')
  const sql = `update users set deleted_at='${now}' where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const restore = (id, cb) => {
  const sql = `update users set deleted_at=NULL where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

module.exports = { get, getSingle, create, update, deleteData, getArchived, restore }