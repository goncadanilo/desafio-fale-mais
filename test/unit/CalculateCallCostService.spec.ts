import CalculateCallCostService from '../../src/services/CalculateCallCostService';
import FakeTariffsRepository from '../fakes/repositories/FakeTariffsRepository';

const makeCalculateCallCostService = () => {
  const fakeTariffsRepository = new FakeTariffsRepository();
  const calculateCallCostService = new CalculateCallCostService(
    fakeTariffsRepository,
  );

  return {
    calculateCallCostService,
    fakeTariffsRepository,
  };
};

describe('Calculate Call Cost Service', () => {
  it('should be able to instantiate the CalculateCallCostService class', () => {
    const { calculateCallCostService } = makeCalculateCallCostService();

    expect(calculateCallCostService).toBeInstanceOf(CalculateCallCostService);
  });

  it('should return [0, 38] when origin: 011, destiny: 016, time: 20, plan: 30', async () => {
    const { calculateCallCostService } = makeCalculateCallCostService();

    expect(
      await calculateCallCostService.execute({
        origin: 11,
        destiny: 16,
        time: 20,
        plan: 30,
      }),
    ).toStrictEqual([0, 38]);
  });

  it('should return [37.4, 136] when origin: 011, destiny: 017, time: 80, plan: 60', async () => {
    const { calculateCallCostService } = makeCalculateCallCostService();

    expect(
      await calculateCallCostService.execute({
        origin: 11,
        destiny: 17,
        time: 80,
        plan: 60,
      }),
    ).toStrictEqual([37.4, 136]);
  });

  it('should return [167.2, 380] when origin: 018, destiny: 011, time: 200, plan: 120', async () => {
    const { calculateCallCostService } = makeCalculateCallCostService();

    expect(
      await calculateCallCostService.execute({
        origin: 18,
        destiny: 11,
        time: 200,
        plan: 120,
      }),
    ).toStrictEqual([167.2, 380]);
  });
});
