const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/contactUs.model");

const router = express.Router();

router.post(
  "/contact",

  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 1 })
      .withMessage("Name must not be empty"),

    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),

    body("contactNo")
      .notEmpty()
      .withMessage("Contact number is required")
      .isMobilePhone()
      .withMessage("Invalid contact number"),

    body("message")
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ min: 1 })
      .withMessage("Message must not be empty"),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { name, email, contactNo, message } = req.body;
      if ( !message) {
        message = "Contact me at " + contactNo;
      }
      const contact = await Contact.create({
        name,
        email,
        contactNo,
        message,
      });

      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: contact,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);

router.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();

    return res.status(200).json({
      success: true,
      message: "Contact list fetched successfully",
      data: contacts,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
