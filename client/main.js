// VV  this is for the buttons 
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
          alert(data);
        });
  };

document.getElementById("getFortuneBtn").onclick = function () {
    axios.get("http://localhost:4000/api/fortune")
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
}
// ^^ Both Buttons
const recordContainer = document.querySelector('#recordsContainer')
const form = document.querySelector('form')
const editZone = document.getElementById("edit-zone")

const recordCallback = ({ data: records }) => displayRecords(records)


const getAllRecords = () => axios.get("http://localhost:4000/api/records").then(recordCallback).catch(err => console.log(err))
const createNewRecord = body => axios.post("http://localhost:4000/api/record", body).then(recordCallback).catch(err => console.log(err))
const deleteRecord = id => axios.delete(`http://localhost:4000/api/records/${id}`).then(recordCallback).catch(err => console.log(err))
// const updateRecord = (id, type) => axios.put(`http://localhost:4000/api/records/${id}`, {type}).then(recordCallback).catch(err => console.log(err))



function submitHandler(e) {
    e.preventDefault()

    let date = document.querySelector('#date')
    let area = document.querySelector('#area')
    let duration = document.querySelector('#duration')

    let bodyObj = {
        date: date.value,
        area: area.value,
        duration: duration.value 
    }

    createNewRecord(bodyObj)

    date.value = ''
    area.value = ''
    duration.value = ''
}

function createRecordCard(record) {
    const recordCard = document.createElement('div')
    recordCard.classList.add('record-card')
    
    recordCard.innerHTML = `
    
    <p>${record.date}</p>
    <p>${record.area}</p>
    <p>${record.duration}</p>
    <button onclick="deleteRecord(${record.id})">delete</button>
    `
    recordContainer.appendChild(recordCard)

}

// const editRecord = record => {
//     const editForm = document.createElement("form")
//     editForm.className = 'edit-form'
//     editForm.innerHTML = `
    
//          <input  id="date-input" placeholder="date" value="${record.date}"/>
//          <input  id="area-input" placeholder="area"  value="${record.area}"/>
//          <input  id="duration-input" placeholder="duration" value="${record.duration}"/>
//          <button>save changes</button>
//     `
//      editZone.appendChild(editForm)

//      editForm.addEventListener("submit", e =>{
//          e.preventDefault()

//          let updates = {
//              date: document.getElementById("date-input").value,
//              area: document.getElementById("area-input").value,
//              duration: document.getElementById("duration-input").value
//          }

//           axios
//           .put(`http://localhost:4000/api/records/${record.id}`, updates)
//           .then(recordCallback)
//           .catch(err => console.log(err))


//      })
//  }


function displayRecords(arr) {
    recordContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createRecordCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
getAllRecords()