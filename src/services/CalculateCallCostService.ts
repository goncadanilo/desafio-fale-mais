import ITariffsRepository from '@interfaces/ITariffsRepository';
import AppError from '@errors/AppError';

interface Data {
  origin: number;
  destiny: number;
  time: number;
  plan: number;
}

export default class CalculateCallCostService {
  constructor(private readonly tariffsRepository: ITariffsRepository) {}

  public async execute(data: Data): Promise<[number, number]> {
    const { origin, destiny, time, plan } = data;
    const tariff = await this.tariffsRepository.getCallTariff(origin, destiny);

    if (!tariff) {
      throw new AppError('Tariff is not found');
    }

    const withoutPlan = time * tariff;
    const withPlan =
      plan >= time ? 0 : this.calculateIncrease(time, plan, tariff);

    return [withPlan, withoutPlan];
  }

  private calculateIncrease(time: number, plan: number, tariff: number) {
    return (time - plan) * tariff + (time - plan) * tariff * 0.1;
  }
}
