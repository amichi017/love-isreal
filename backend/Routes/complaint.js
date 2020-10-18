const  express = require('express')
const router = express.Router();

const {
    getAllComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint
    }
    =require("../controllers/complaint")

router.get('/', getAllComplaint);
router.post('/', createComplaint);
router.patch('/:userId',updateComplaint );
router.delete('/:userId',deleteComplaint );

module.exports=router;