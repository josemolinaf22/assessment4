const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());

const { getRecords, deleteRecord, createRecord, updateRecord} = require('./controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const diffFortune = [ 
  "A beautiful, smart, and loving person will be coming into your life.",
  "Soon life will become more interesting.",
  "There is a time for caution, but not for fear.",
  "We first make our habits, and then our habits make us.",
  "You are generous to an extreme and always think of the other fellow."

  ];
 
  let randomIndex = Math.floor(Math.random() * diffFortune.length);
  let randomFortune = diffFortune[randomIndex];

  res.status(200).send(randomFortune);

})


app.get('/api/records', getRecords);
app.delete('/api/records/:id', deleteRecord);
app.post('/api/records', createRecord);
app.put('/api/records/:id', updateRecord);


app.listen(4000, () => console.log("Server running on 4000"));
