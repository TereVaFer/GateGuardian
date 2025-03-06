import { Schema } from "mongoose";
import { model } from "mongoose";

const usersSchema = new Schema({
    user_id: String,
    name: String,
    password: String, // Considera almacenar el hash de la contraseña en lugar de la contraseña en texto plano
    role: String,
    door_id: String
},{
    versionKey: false,
    timestamps: true,
});

export default model("User", usersSchema);