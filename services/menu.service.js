const express = require('express')

module.exports = {
    getMenu: (req, res) => {
        const menu = [
            { 'name': 'Steak' },
            { 'name': 'Stew' },
            { 'name': 'Soup'},
            { 'name': 'Salad' },
        ]
        const request = req
        return res.status(200).json({ menu: menu, request: request })
    }
}