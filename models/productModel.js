const db = require('../connection')

const get = (cb) => {
  const sql = 'select * from products'
  db.query(sql, (err, res) => {
    cb(res)
  })
}

const getSingle = (id, cb) => {
  const sql = `select * from products where id=${id}`
  db.query(sql, (err, res) => {
    cb(res)
  })
}

const create = (body, cb) => {
  const sql = `insert into products (name, base_price, price, description) values ('${body.name}', ${body.base_price}, ${body.price}, '${body.description}')`

  db.query(sql, (err, res) => {
    cb(res)
  })
}

module.exports = { get, getSingle, create }