export default interface ITariffsRepository {
  getCallTariff(origin: number, destiny: number): Promise<number | undefined>;
}
