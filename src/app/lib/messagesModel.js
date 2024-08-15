const { default: mongoose } = require("mongoose");


const messagesModel = new mongoose.Schema({

    name:String,
    email:String,
    message:String,
    
})

export const messageSchema = mongoose.models.messages || mongoose.model('messages',messagesModel);