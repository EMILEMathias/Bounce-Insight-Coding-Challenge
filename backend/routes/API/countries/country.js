const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/:countryName', async (req, res) => {
    console.log(req.params)
    const countryData = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`)
    console.log(countryData.data)
    res.send(countryData.data)
})

module.exports = router