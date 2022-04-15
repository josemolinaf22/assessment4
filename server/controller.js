let records = require('./db.json')
let globalID = 4;


module.exports = { 

    getRecords: (req, res) =>{
        res.status(200).send(records)
    },

    deleteRecord: (req, res) => {
        let index = records.findIndex(elem => elem.id === +req.params.id)
        records.splice(index,1)
        res.status(200).send(records)
    },

     createRecord: (req, res) => {
         const { date, area, duration} = req.body;
         let newRecord = {
             id: globalID,
             date,
             area,
             duration
         }
         records.push(newRecord)
         globalID++;
         req.status(200).send(records);
     },




}