const express = require('express')
const jwt = require('jsonwebtoken')

module.exports = {
    getMenu: (req, res) => {
        const menu = [
            { 'name': 'Steak' },
            { 'name': 'Stew' },
            { 'name': 'Soup'},
            { 'name': 'Salad' },
        ]
        let authToken = req.headers.authorization
        let token = authToken && authToken.replace('Bearer ', '');
        let decoded = jwt.decode(token, {complete: true});
        let user = decoded.payload.user
        return res.status(200).json({ menu: menu, requestContext: req.requestContext,user: user, headers: req.headers, body: req.body, params: req.params })
    }
}