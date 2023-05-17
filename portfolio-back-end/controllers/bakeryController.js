const express = require('express');
const sweets = express.Router();
const { getAllSweets, getASweet, createSweet, deleteSweet, updateSweet } = require('../queries/bakeryItems')

//Calling function to queries if it exist pass it through
//async to have data ready on hand

//Index route getting allbaked goods get crud
sweets.get('/', async (req, res) => {
     const allSweets = await getAllSweets();

     if (allSweets) {
        res.status(202).json(allSweets);
     } else {
        res.status(500).json({ error: 'Server Error' })
     }
});

//Get specific one baked good get crud
sweets.get('/:id', async (req, res) => {
    const { id } = req.params;
    const sweet = await getASweet(id)

    if (sweet) {
        res.status(200).json(sweet);
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route 
sweets.post('/', async (req, res) => {
    const newSweet = req.body;
    try {
        const addedSweet =  await createSweet(newSweet)
        res.status(202).json(addedSweet)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// delete route

sweets.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSweet = await deleteSweet (id);
        res.status(200).json(deletedSweet)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

//update route 
sweets.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
       const updatedSweet = await updateSweet(id, body);
       res.status(200).json(updatedSweet);
    } catch (error) {
        res.status(400).json({ error: error});
    };
});


module.exports = sweets;