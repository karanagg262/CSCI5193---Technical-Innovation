const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
app.post('/requestpickup',(req,res) => {
    res.send("hfb");
})
app.post('/contactus',(req,res) => {
    res.send("Contact Request");
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))