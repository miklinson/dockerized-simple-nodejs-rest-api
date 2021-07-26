const express = require('express')

module.exports = {
    getSteak: (req, res) => {
        const steak = [
            { "name": "Filet Mignon", "cook_method": "broiler or stovetop", "doneness": "medium rare" },
            { "name": "Rib Eye", "cook_method": "grill or stovetop", "doneness": "medium rare" },
            { "name": "Hanger Steak", "cook_method": "grill", "doneness": "medium rare" },
            { "name": "Flank Steak", "cook_method": "grill", "doneness": "medium rare" },
            { "name": "Skirt Steak", "cook_method": "grill", "doneness": "medium rare" },
            { "name": "New York Strip", "cook_method": "oven or grill", "doneness": "medium rare" },
            { "name": "Porterhouse", "cook_method": "oven or stovetop", "doneness": "medium rare" },
            { "name": "Flat Iron", "cook_method": "grill", "doneness": "medium rare" },
            { "name": "Sirloin", "cook_method": "grill or stirfry", "doneness": "medium rare" },
            { "name": "Tri Tip", "cook_method": "oven or oven", "doneness": "medium rare" },
        ]
        return res.status(200).json({ steak: steak })
    }
    
}