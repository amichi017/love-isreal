

module.exports = {
    getAllComplaint: (req, res) => {
        res.status(200).json({
            message: 'Get All Message'
        })
    },
    createComplaint: (req, res) => {
        res.status(200).json({
            message: 'Create a new Message'
        })
    },
    updateComplaint: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Update Message - ${articleId}`
        })
    },
    deleteComplaint: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Delete Message - ${articleId}`
        })
    }
}
 

    