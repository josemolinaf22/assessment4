let records = require('./db.json')
let globalID = records[records.length - 1].id + 1;
 /*  added */

module.exports = { 
    getAllRecords: (req, res) => {
        console.log("this shows records")
        res.status(200).send(records)
    },

    deleteRecord: (req, res) => {
        let index = records.findIndex(elem => elem.id === +req.params.id)
        records.splice(index, 1)
        console.log("this is delete")
        res.status(200).send(records);
    },

    createNewRecord: (req, res) => {
        const { date, area, duration} = req.body
        let newRecord = {
            date,
            area,
            duration,
            id: globalID
        }
        records.push(newRecord)
        globalID++
        console.log("this is new record")
        res.status(200).send(records)
    },
    // updateRecord: (req, res) => {
    //    const editForm = document.createElement("form")
    //    editForm.className = 'edit-form'
    //    editForm.innerHTML = `
       
    //         <input  id="date-input" placeholder="date" value="${record.date}"/>
    //         <input  id="area-input" placeholder="area"  value="${record.area}"/>
    //         <input  id="duration-input" placeholder="duration" value="${record.duration}"/>
    //         <button>save changes</button>
    //    `
    //     editZone.appendChild(editForm)

    //     editForm.addEventListener("submit", e =>{
    //         e.preventDefault()

    //         let updates = {
    //             date: document.getElementById("date-input").value,
    //             area: document.getElementById("area-input").value,
    //             duration: document.getElementById("duration-input").value
    //         }
    //     })
    // }
}