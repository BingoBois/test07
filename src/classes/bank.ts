import { IBank, IAccount, ICreditCard } from "../types/types";
import List from './List'
import * as mysql from "mysql";
import { createCreditCard } from '../db/mysql'
import CreditCard from "./creditcard";
import Account from "./account";

const MYSQL_HOST = process.env.MYSQL_HOST ? process.env.MYSQL_HOST : "localhost";
const MYSQL_USER = process.env.MYSQL_USER ? process.env.MYSQL_USER : "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : "mingade85";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : "test07";

export default class Bank implements IBank{
    
    public connection: mysql.Connection;
    public creditcard: CreditCard;

    constructor(){
        this.connection = mysql.createConnection({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            multipleStatements: true,
            connectTimeout: 200000
        });
        this.connection.connect();
    }

    closeConnection(): void {
        this.connection.end();
    }

    setDataSource(connection: any) {
        this.connection = connection;
    }    
    async createCreditCard(creditcard: CreditCard): Promise<CreditCard> {
        return await createCreditCard(this.connection, creditcard);
    }
    updateCreditCard(creditcard: ICreditCard): Promise<ICreditCard> {
        throw new Error("Method not implemented.");
    }
    getCreditCard(id: number): ICreditCard {
        throw new Error("Method not implemented.");
    }
    getCreditCards(): List<ICreditCard> {
        throw new Error("Method not implemented.");
    }
    createAccount(account: Account): Account {
        throw new Error("Method not implemented.");
    }
    updateAccount(account: Account): void {
        throw new Error("Method not implemented.");
    }
    getAccount(id: number): Account {
        throw new Error("Method not implemented.");
    }
    getAccounts(): List<Account> {
        throw new Error("Method not implemented.");
    }
    
    
}