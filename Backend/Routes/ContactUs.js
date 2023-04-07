const express = require('express');
const ContactRequests = require('../Models/ContactRequests');
const router = express.Router();
// const contactDetails = require('../Models/ContactRequests');
router.post('/contactus', async(req, res) => {
    console.log(req.body);
    const {  contact,firstName, lastName,describe}=req.body;
    try{
        
        const newrequest = new ContactRequests({ contact,firstName, lastName,describe});
        await newrequest.save();
    
        // Return success message
        res.status(201).json({ message: 'Request created successfully.' });
      } catch (error) {
        console.error('Error in POST /contactus:', error);
        res.status(500).json({ message: 'Error creating request.' });
      
      }
    
  });
  module.exports = router;