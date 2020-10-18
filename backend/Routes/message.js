const  express = require('express')
const router = express.Router();

const {
    getAllMessage,
    createMessage,
    updateMessage,
    deleteMessage
    }
    =require("../controllers/message")

router.get('/', getAllMessage);
router.post('/', createMessage);
router.patch('/:userId',updateMessage );
router.delete('/:userId',deleteMessage );

module.exports=router;