var Company = require('../model/company.model')

/***************************Fetch Company Service**********************************/
exports.get_company = async function (query, page, limit, req, res) {   
    try {
        await Company.get_company(query,req,res);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}



/***************************Fetch Company Details Service**********************************/
exports.get_company_details = async function (query, page, limit, req, res) {   
    try {
        await Company.get_company_details(query,req,res);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
