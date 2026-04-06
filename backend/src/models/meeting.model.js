import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        user_id: {type: String},
        meetingCode: {type: String, required: true},
        date: {type: Date, default: Date.now},
        time: {type: String, required: true},
        duration: {type: String, required: true},
        
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };