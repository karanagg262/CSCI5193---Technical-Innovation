const express = require('express');
const router = express.Router();
const PickUpDetails = require('../Models/PickUpDetails');
router.post('/requestpickup', async(req, res) => {
    console.log(req.body);
    const {  contact,firstName, lastName, address1,description}=req.body;
    try{
        
        const newPickup = new PickUpDetails({ contact,firstName, lastName,address1,description });
        await newPickup.save();
    
        // Return success message
        res.status(201).json({ message: 'Request created successfully.' });
      } catch (error) {
        console.error('Error in POST /requestpickup:', error);
        res.status(500).json({ message: 'Error creating request.' });
      
      }
    
  });
  module.exports = router;