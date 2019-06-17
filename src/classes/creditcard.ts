import { ICreditCard, IAccount } from "../types/types";
import Account from "./account";

export default class CreditCard implements ICreditCard{
    public id: number
    public pincode: number;
    public created: Date;
    public last_used: Date;
    public attempts: Date;
    public blocked: boolean;
    public account: Account;

    constructor(pincode, created, last_used, attempts, blocked, account){
        this.pincode = pincode;
        this.created = created;
        this.last_used = last_used;
        this.attempts = attempts;
        this.blocked = blocked;
        this.account = account;
    }

    setId(id: number): void {
        this.id = id;
    }    
    getId(): number {
        return this.id;
    }
    setAccount(account: Account): void {
        this.account = account;
    }
    getAccount(): Account {
        throw new Error("Method not implemented.");
    }
    setCreated(date: Date): void {
        throw new Error("Method not implemented.");
    }
    getCreated(): Date {
        throw new Error("Method not implemented.");
    }
    setLastUsed(date: Date) {
        throw new Error("Method not implemented.");
    }
    getLastUsed(): Date {
        throw new Error("Method not implemented.");
    }
    setPinCode(pincode: number): void {
        throw new Error("Method not implemented.");
    }
    getPinCode(): number {
        throw new Error("Method not implemented.");
    }
    setWrongPinCodeAttempts(attempts: number) {
        throw new Error("Method not implemented.");
    }
    getWrongPinCodeAttempts(): number {
        throw new Error("Method not implemented.");
    }
    resetWrong(): void {
        throw new Error("Method not implemented.");
    }
    setBlocked(blocked: boolean): void {
        throw new Error("Method not implemented.");
    }
    isBlocked(): boolean {
        throw new Error("Method not implemented.");
    }


}