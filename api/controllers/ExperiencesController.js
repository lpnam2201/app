'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const table = 'experience'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM experience'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM experience WHERE id = ?'
        db.query(sql, [req.params.experienceId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let placeId = req.params.placeId;
        let sql = 'UPDATE experience SET ? WHERE id = ?'
        db.query(sql, [data, experienceId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO experience SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM experience WHERE id = ?'
        db.query(sql, [req.params.experienceId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}