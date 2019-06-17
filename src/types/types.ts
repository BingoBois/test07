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
    updateCreditCard(creditcard: ICreditCard): Promise<ICreditCard>;
    getCreditCard(id: number): ICreditCard;
    getCreditCards(): List<ICreditCard>;
    createAccount(account: Account): Account;
    updateAccount(account: Account): void;
    getAccount(id: number): Account;
    getAccounts(): List<Account>;

}