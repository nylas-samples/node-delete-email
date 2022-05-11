// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas";
// Configure your Nylas client
Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// Provide the message id you want to trash
const MESSAGE_ID = process.env.MESSAGE_ID;
const TRASH_LABEL_NAME = 'trash';
// append the trash label and save the message
try {
    const message = await nylas.messages.find(MESSAGE_ID);
    const labels = await nylas.labels.list();
    const trashLabel = labels.find(label => label.name === TRASH_LABEL_NAME);
    await message.labels.push(trashLabel);
    await message.save();
    console.log(`Message "${MESSAGE_ID}" was deleted.`);
}
catch (error) {
    console.log('error', error);
}
