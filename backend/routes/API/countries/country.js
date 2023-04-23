const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/:countryName', async (req, res) => {
    try {
        const countryData = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`)
        res.status(200).send(countryData.data)
    } catch (error) {
        res.status(400).send('Invalid country name')
    }
})

module.exports = router