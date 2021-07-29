const express = require('express')

module.exports = {
    getMenu: (req, res) => {
        const menu = [
            { 'name': 'Steak' },
            { 'name': 'Stew' },
            { 'name': 'Soup'},
            { 'name': 'Salad' },
        ]
        const headers = req.headers
        const body = req.body
        return res.status(200).json({ menu: menu, headers: headers, body: body })
    }
}