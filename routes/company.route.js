const express = require('express');
let router = express.Router();
var CompanyController = require('../controllers/company.controller')

/***************************Fetch Company List Routing**********************************/
	
router.post('/get_company', CompanyController.get_company)  

/***************************Fetch Company Details Routing**********************************/
	
router.post('/get_company_details', CompanyController.get_company_details) 
	
module.exports = router;