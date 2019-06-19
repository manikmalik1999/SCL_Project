const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
  .select('value')
    .exec()
    .then(docs => {
      const response = {
        products: docs
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

              router.post("/", (req, res, next) => {
                const product = new Product({
                  _id: new mongoose.Types.ObjectId(),
                  name: req.body.name,
                  value: req.body.value
                });
                product
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

              // router.get("/:productId", (req, res, next) => {
              //   const id = req.params.productId;
              //   Product.findById(id)
              //   .select('name price _id')
              //     .exec()
              //     .then(doc => {
              //       console.log("From database", doc);
              //       if (doc) {
              //         res.status(200).json({
              //           product: doc,
              //           request: {
              //             type: 'GET',
              //             url: 'http://localhost:3000/products'
              //           }
              //         });
                      
              //       } else {
              //         res
              //           .status(404)
              //           .json({ message: "No valid entry found for provided ID" });
              //       }
              //     })
              //     .catch(err => {
              //       console.log(err);
              //       res.status(500).json({ error: err });
              //     });
              // });

              // router.patch("/:productId", (req, res, next) => {
              //   const id = req.params.productId;
              //   const updateOps = {};
              //   for (const ops of req.body) {
              //     updateOps[ops.propName] = ops.value;
              //   }
              //   Product.update({ _id: id }, { $set: updateOps })
              //     .exec()
              //     .then(result => {
              //       console.log(result);
              //       res.status(200).json({
              //         message: 'product updated',
              //         request: {
              //           type: 'GET',
              //           url: "http://localhost:3000/products/"+ id
              //         }
              //       });
              //     })
              //     .catch(err => {
              //       console.log(err);
              //       res.status(500).json({
              //         error: err
              //       });
              //     });
              // });

// router.delete("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: 'product deleted'
//       }
//         );
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

module.exports = router;
