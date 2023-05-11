import { Schema, model } from "mongoose";
import { ICity } from "../../utils/interfaces/database/city.interface";

const citySchema = new Schema<ICity>({
  name: { type: "string", required: true },
  state: { type: "string", required: true },
});

export const cityModel = model<ICity>("cities", citySchema);
