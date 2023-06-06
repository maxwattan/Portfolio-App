const db = require(`../db/dbConfig`)

//queries goes in hand for the database this is psql

//sending it to controllers

//index of sweets
const getAllSweets = async () => {
    try {
        const allSweets = await db.any('SELECT * FROM sweets')
        return allSweets;
    } catch (error) {
        return error;
    }
}

//show a sweet

const getASweet = async (id) => {
    try {
        const sweet = await db.one('SELECT * FROM sweets WHERE id=$1', id)
        return sweet
    } catch (error) {
        return error
    }
}

//create/add a sweet

const createSweet = async (sweetToAdd) => {
    try {
        const newSweet = await db.one('INSERT INTO sweets (img, title, price, content, allergens, is_fav ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [sweetToAdd.img, sweetToAdd.title, sweetToAdd.price, sweetToAdd.content, sweetToAdd.allergens, sweetToAdd.is_fav])
        return newSweet
    } catch (error) {
        return error
    }
}

//delete sweet

const deleteSweet = async (id) => {
    try {
        const deletedSweet = await db.one('DELETE FROM sweets WHERE id=$1 RETURNING *', id)
        return deletedSweet
    } catch (error) {
        return error
    }
}

//update sweet

const updateSweet = async (id, sweet) => {
    try {
        const updatedSweet = await db.one('UPDATE sweets SET img=$1 title=$2, price=$3, content=$4, allergens=$5 is_fav=$6, WHERE id=$7 RETURNING *', [sweet.img, sweet.title, sweet.price, sweet.content, sweet.allergens, sweet.is_favorite, id])
        return updatedSweet
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllSweets,
    getASweet,
    createSweet,
    deleteSweet,
    updateSweet
}