const db = require('../connection')
var moment = require('moment');

const get = (cb) => {
  const sql = 'select * from products where deleted_at is NULL'
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const getArchived = (cb) => {
  const sql = 'select * from products where deleted_at is not NULL'
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const getSingle = (id, cb) => {
  const sql = `select * from products where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const create = (body, cb) => {
  const sql = `insert into products (name, base_price, price, description, stock) values ('${body.name}', ${body.base_price}, ${body.price}, '${body.description}', ${body.stock})`

  db.query(sql, (err, result) => {
    cb(result)
  })
}

const update = (id, body, cb) => {
  const sql = `update products set name='${body.name}', base_price=${body.base_price}, price=${body.price}, description='${body.description}' where id=${id}`

  db.query(sql, (err, result) => {
    cb(result)
  })
}

const deleteData = (id, cb) => {
  const now = moment().format('YYYY-MM-DD HH:mm:s')
  const sql = `update products set deleted_at='${now}' where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

const restore = (id, cb) => {
  const sql = `update products set deleted_at=NULL where id=${id}`
  db.query(sql, (err, result) => {
    cb(result)
  })
}

module.exports = { get, getSingle, create, update, deleteData, getArchived, restore }