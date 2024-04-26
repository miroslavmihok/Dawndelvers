import asyncHandler from "../middleware/asyncHandler.js";
import WelcomeEmail from "../../dist/WelcomeEmail.js";
import { resend } from "../server.js";

// @desc    Send Email to User
// @route   POST /api/emails
// @access  Public
const sendEmail = asyncHandler(async (req, res) => {
  const { name, jobType, age, game, discord, email, country, about } = req.body;
  try {
    const data = await resend.emails.send({
      from: "boostingServiceJobs@miroslavmihok.com",
      to: [email],
      subject: "BoostingService Booster/Coach Signup",
      react: WelcomeEmail({
        name,
        jobType,
        age,
        game,
        discord,
        email,
        country,
        about,
      }),
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export { sendEmail };
