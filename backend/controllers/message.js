

module.exports = {
    getAllMessage: (req, res) => {
        res.status(200).json({
            message: 'Get All Message'
        })
    },
    createMessage: (req, res) => {
        res.status(200).json({
            message: 'Create a new Message'
        })
    },
    updateMessage: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Update Message - ${articleId}`
        })
    },
    deleteMessage: (req, res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({
            message: `Delete Message - ${articleId}`
        })
    }
}
 

    