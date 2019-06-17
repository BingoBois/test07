import Bank from "../classes/bank";

let bank: Bank;

beforeAll(() => {
    bank = new Bank();
})

afterAll(() => {
    bank.closeConnection();
})

describe("Testing Banks", () => {
    test("Can connect to db", () => {
        expect(() => new Bank()).not.toThrow();
    })
    test("")
})

