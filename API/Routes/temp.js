const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Temper = require("../models/temper");
// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    Temper.find()
    .select('value startTime endTime')
      .exec()
      .then(docs => {
        const response = {
          products: docs
        };
       
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });



router.post('/', (req, res, next) => {
    const Temperature = new Temper({
        _id: new mongoose.Types.ObjectId(),
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        value: req.body.value
      });
      Temperature
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "DATA ADDED",
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    });
// router.get('/:orderId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order details',
//         orderId: req.params.orderId
//     });
// });

// router.delete('/:orderId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order deleted',
//         orderId: req.params.orderId
//     });
// });

module.exports = router;
