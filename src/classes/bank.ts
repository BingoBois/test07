import { IBank, IAccount, ICreditCard } from "../types/types";
import List from './List'
import * as mysql from "mysql";
import { createCreditCard, updateCreditCard, createAccount, updateAccount, getAccount, getCreditCard } from '../db/mysql'
import CreditCard from "./creditcard";
import Account from "./account";

const MYSQL_HOST = process.env.MYSQL_HOST ? process.env.MYSQL_HOST : "localhost";
const MYSQL_USER = process.env.MYSQL_USER ? process.env.MYSQL_USER : "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : "mingade85";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : "test07";
const PROD_ENV = process.env.PROD_ENV ? process.env.PROD_ENV : "test07"

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
    async updateCreditCard(creditcard: CreditCard): Promise<CreditCard> {
        return await updateCreditCard(this.connection, creditcard);
    }
    async getCreditCard(id: number): Promise<CreditCard> {
        return await getCreditCard(this.connection, id);
    }
    getCreditCards(): Promise<List<CreditCard>> {
        throw new Error("Method not implemented.");
    }
    async createAccount(account: Account): Promise<Account> {
        return await createAccount(this.connection, account); 
    }
    async updateAccount(account: Account): Promise<Account> {
        return await updateAccount(this.connection, account);
    }
    async getAccount(id: number): Promise<Account> {
        return await getAccount(this.connection, id);
    }
    getAccounts(): List<Account> {
        throw new Error("Method not implemented.");
    }
}