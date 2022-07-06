const axios = require('axios')

module.exports = {
    searchRep: async (req, res) => {
        console.log(req.params)
        const {state} = req.params
        console.log('search rep')
        axios.get(`http://whoismyrepresentative.com/getall_reps_bystate.php?state=${state}&output=json`)
            .then(dbRes => {
                console.log(dbRes.data)
                res.status(200).send(dbRes.data)
            })
    }, 

    searchSen: async (req, res) => {
        console.log(req.params)
        console.log('search sen')
    }

}