const router = require('express').Router();
const itemcontroller = require('../controllers/controllers')

router.get('/' , itemcontroller.home);

router.get('/get-items', itemcontroller.getitems);

router.get('/add-item' , itemcontroller.additems);

router.post('/items', itemcontroller.createitems);

router.get('/items/:id', itemcontroller.getitembyid);

router.delete('/items/:id', itemcontroller.deleteitembyid);

router.put('/items/:id', itemcontroller.updateitembyid);

router.use(itemcontroller.error);

module.exports = router;