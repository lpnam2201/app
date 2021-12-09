'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const table = 'place'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM place'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM place WHERE id = ?'
        db.query(sql, [req.params.placeId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let placeId = req.params.placeId;
        let sql = 'UPDATE place SET ? WHERE id = ?'
        db.query(sql, [data, placeId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO place SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM place WHERE id = ?'
        db.query(sql, [req.params.placeId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}