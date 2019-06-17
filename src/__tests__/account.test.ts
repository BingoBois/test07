import Bank from "../classes/bank";
import Account from "../classes/account";
let bank

beforeAll(() => {
     bank = new Bank();
})

describe("Testing accounts", () => {
    test("Can create account", () => {
        expect(async () => await bank.createAccount(new Account(200))).not.toThrow();
    })
})