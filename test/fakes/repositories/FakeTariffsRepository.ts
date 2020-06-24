import ITariffsRepository from '../../../src/interfaces/ITariffsRepository';

interface Tariffs {
  origin: number;
  destiny: number;
  tariff: number;
}

export default class FakeTariffsRepository implements ITariffsRepository {
  private tariffs: Tariffs[] = [
    { origin: 11, destiny: 16, tariff: 1.9 },
    { origin: 16, destiny: 11, tariff: 2.9 },
    { origin: 11, destiny: 17, tariff: 1.7 },
    { origin: 17, destiny: 11, tariff: 2.7 },
    { origin: 11, destiny: 18, tariff: 0.9 },
    { origin: 18, destiny: 11, tariff: 1.9 },
  ];

  public async getCallTariff(
    origin: number,
    destiny: number,
  ): Promise<number | undefined> {
    const { tariff } = this.tariffs.find(
      key => key.origin === origin && key.destiny === destiny,
    );

    return tariff;
  }
}
