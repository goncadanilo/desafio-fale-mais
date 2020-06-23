import CalculateCallCostService from '../../src/services/CalculateCallCostService';

const makeCalculateCallCostService = () => {
  const calculateCallCostService = new CalculateCallCostService();

  return {
    calculateCallCostService,
  };
};

describe('Calculate Call Cost Service', () => {
  it('should be able to instantiate the CalculateCallCostService class', () => {
    const { calculateCallCostService } = makeCalculateCallCostService();

    expect(calculateCallCostService).toBeInstanceOf(CalculateCallCostService);
  });
});
