'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const table = 'post'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM post'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM post WHERE id = ?'
        db.query(sql, [req.params.postId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let placeId = req.params.placeId;
        let sql = 'UPDATE post SET ? WHERE id = ?'
        db.query(sql, [data, postId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO post SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM post WHERE id = ?'
        db.query(sql, [req.params.postId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}