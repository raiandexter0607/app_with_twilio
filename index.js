import env from "./configs/index.js";
import twilio from "twilio";

const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    body: "Your appointment is coming up on July 21 at 3PM",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+573166184799",
  })
  .then((message) => console.log(message.sid))
  .done();
