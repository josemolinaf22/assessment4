
const getRecords = () => axios.get("http://localhost:4000/api/records").then(recordCallback).catch(errCallback)

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

const baseURL = `http://localhost:4000/api/records`
const recordsContainer = document.querySelector('#record-container')
const form = document.querySelector('form')

const recordCallback = ({ data: records }) => displayRecords(records)
const errCallback = err => console.log(err.response.data)

const getAllRecords = () => axios.get(baseURL).then(recordCallback).catch(errCallback)
const createRecord = body => axios.post(baseURL, body).then(recordCallback).catch(errCallback)
const deleteRecord = id => axios.delete(`${baseURL}/${id}`).then(recordCallback).catch(errCallback)
const updateRecord = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(recordCallback).catch(errCallback)

function submitHandler(send) {
    send.preventDefault()

    let date = document.querySelector('#date')
    let area = document.querySelector('#area')
    let duration = document.querySelector('#duration')

    let bodyObj = {
        date: date.value,
        area: area.value, 
        duration: duration.value
    }

    createRecord(bodyObj)

    date.value = ''
    area.value = ''
    duration.value = ''
}

// function createRecord(record) {
//     const recordCard = document.createElement('div')
//     recordCard.classList.add('record-card')

//     recordCard.innerHTML = `
//     <p>${record.date}</p>
//     <p>${record.area}</p>
//     <p>${record.duration}</p>
//     <button onclick="delete(${record.id})">delete</button>
//     `


//     moviesContainer.appendChild(movieCard)
// }

function displayRecords(arr) {
    recordsContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createRecordCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllRecords()