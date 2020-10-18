

module.exports = {
    getAllComplaint: (req, res) => {
        res.status(200).json({
            message: 'Get All Complaint'
        })
    },
    createComplaint: (req, res) => {
        res.status(200).json({
            message: 'Create a new Complaint'
        })
    },
    updateComplaint: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Update Complaint - ${articleId}`
        })
    },
    deleteComplaint: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Delete Complaint - ${articleId}`
        })
    }
}
 

    