import { Connection } from 'mysql'
import List from '../classes/List';
import Account from '../classes/account';
import CreditCard from '../classes/creditcard';

export interface IAccount{
    setId(id: number): void;
    getId(): number;
    setBalance(balance: number): void;
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

export interface ICreditCard{
    setId(id: number): void;
    getId(): number;
    setAccount(account: Account): void;
    getAccount(): Account;
    setCreated(date: Date): void;
    getCreated(): Date;
    setLastUsed(date: Date);
    getLastUsed(): Date;
    setPinCode(pincode: number): void;
    getPinCode(): number;
    setWrongPinCodeAttempts(attempts: number);
    getWrongPinCodeAttempts(): number;
    resetWrong(): void;
    setBlocked(blocked: boolean): void;
    isBlocked(): boolean;
}

export interface IBank{
    setDataSource(connection: Connection);
    createCreditCard(creditcard: CreditCard): Promise<CreditCard>;
    updateCreditCard(creditcard: CreditCard): Promise<CreditCard>;
    getCreditCard(id: number): Promise<CreditCard>;
    getCreditCards(): Promise<List<CreditCard>>;
    createAccount(account: Account): Promise<Account>;
    updateAccount(account: Account): Promise<Account>;
    getAccount(id: number): Promise<Account>;
    getAccounts(): List<Account>;

}