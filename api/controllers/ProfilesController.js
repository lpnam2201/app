'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const table = 'profile'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM profile'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM profile WHERE id = ?'
        db.query(sql, [req.params.profileId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let placeId = req.params.placeId;
        let sql = 'UPDATE profile SET ? WHERE id = ?'
        db.query(sql, [data, profileId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO profile SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM profile WHERE id = ?'
        db.query(sql, [req.params.profileId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}