const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//     console.log(req);
//     res.status(404).send('<h1>:stuck_out_tongue_closed_eyes: 404 Error!</h1>');
//   });

module.exports = router;