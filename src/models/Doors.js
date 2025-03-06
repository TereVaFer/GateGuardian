import { Schema, model } from "mongoose";

// Subesquema para los logs
const logSchema = new Schema({
  timestamp: { type: Date, required: true },
  action: { type: String, required: true },
  user_id: { type: String, required: true }
});

// Subesquema para los dispositivos de E/S
const ioDeviceSchema = new Schema({
  ioDevice_id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: Boolean, required: true }
});

// Subesquema para las alertas
const alertSchema = new Schema({
  timestamp: { type: Date, required: true },
  type: { type: String, required: true },
  message: { type: String, required: true }
});

// Esquema principal para la puerta
const doorsSchema = new Schema(
  {
    door_id: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: Boolean, required: true },
    log: [logSchema], // Documento embebido
    ioDevices: [ioDeviceSchema], // Documento embebido
    alerts: [alertSchema] // Documento embebido
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model("Door", doorsSchema);
