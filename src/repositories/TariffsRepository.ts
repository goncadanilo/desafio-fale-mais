import ITariffsRepository from '@interfaces/ITariffsRepository';
import TariffsSchema from '@schemas/TariffsSchema';

export default class TariffsRepository implements ITariffsRepository {
  public async getCallTariff(
    origin: number,
    destiny: number,
  ): Promise<number | undefined> {
    const { tariff } = await TariffsSchema.findOne({
      $and: [{ origin }, { destiny }],
    });

    return tariff;
  }
}
