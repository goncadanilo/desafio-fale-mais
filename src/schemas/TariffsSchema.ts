import { Schema, model, Document } from 'mongoose';

type Tariffs = Document & {
  origin: number;
  destiny: number;
  tariff: number;
};

const TariffsSchema = new Schema({
  origin: {
    type: Number,
    required: true,
  },
  destiny: {
    type: Number,
    required: true,
  },
  tariff: {
    type: Number,
    required: true,
  },
});

export default model<Tariffs>('Tariffs', TariffsSchema);
