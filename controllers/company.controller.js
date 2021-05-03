var CompanyService = require('../service/company.service')

/***************************Fetch Company Function**********************************/
exports.get_company = async function (req, res, next) {
	var page = req.params.page ? req.params.page : 1;
	var limit = req.params.limit ? req.params.limit : 10;
	try {
		await CompanyService.get_company({}, page, limit, req, res)
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });  
	}
}


/***************************Fetch Company Details Function**********************************/
exports.get_company_details = async function (req, res, next) {
	var page = req.params.page ? req.params.page : 1;
	var limit = req.params.limit ? req.params.limit : 10;
	try {
		await CompanyService.get_company_details({}, page, limit, req, res)
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });  
	}
}
