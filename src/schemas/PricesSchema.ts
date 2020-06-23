import { Schema, model, Document } from 'mongoose';

type Prices = Document & {
  origin: number;
  destiny: number;
  price: number;
};

const PricesSchema = new Schema({
  origin: {
    type: Number,
    required: true,
  },
  destiny: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model<Prices>('Prices', PricesSchema);
