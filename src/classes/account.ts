import { IAccount } from "../types/types";

export default class Account implements IAccount{
    public id?: number;
    public balance: number;

    constructor(balance){
        this.balance = balance;
    }

    setId(id: number): void {
        throw new Error("Method not implemented.");
    }    
    getId(): number {
        throw new Error("Method not implemented.");
    }
    setBalance(balance: number): void {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
    deposit(amount: number): void {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number): void {
        if(amount > this.balance)
            throw new Error("Insufficient Funds");
        this.setBalance(this.balance - amount);
        }
}