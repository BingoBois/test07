import * as mysql from 'mysql'
import * as fs from 'fs'
import * as path from 'path'
import { ICreditCard, IAccount } from '../types/types'
import CreditCard from '../classes/creditcard'
import Account from '../classes/account';

export function createCreditCard(
    connection: mysql.Connection,
    creditcard: CreditCard
) : Promise<CreditCard> {
    return new Promise((resolve, reject) => {
        const {
            account,
            attempts,
            blocked,
            created,
            last_used,
            pincode,
        } = creditcard
        connection.query(
            'INSERT INTO creditcards (pincode, created, last_used, attempts, blocked, fk_account) VALUES (?,?,?,?,?,(SELECT id FROM accounts where id=?)); SELECT * FROM creditcards where id = (SELECT LAST_INSERT_ID());',
            [pincode, created, last_used, attempts, blocked, account.id],
            (error, rows) => {
                if (error) {
                    reject(error)
                }
                resolve(convertRowPacketToArray(rows[1])[0] as CreditCard); 
            }
        )
    })
}

export function updateCreditCard(
    connection: mysql.Connection,
    creditcard: CreditCard
) : Promise<CreditCard> {
    return new Promise((resolve, reject) => {
        const {
            id,
            account,
            attempts,
            blocked,
            created,
            last_used,
            pincode,
        } = creditcard
        connection.query(
            'UPDATE creditcards SET pincode=?, created=?, last_used=?, attempts=?, blocked=? where id = ?; SELECT * FROM creditcards where id=?;',
            [pincode, created, last_used, attempts, blocked, id, id],
            (error, rows) => {
                if (error) {
                    reject(error); 
                }
                resolve(convertRowPacketToArray(rows[1])[0] as CreditCard); 
            }
        )

    })
}

export function createAccount(connection: mysql.Connection, account: Account) : Promise<Account> {
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO accounts (balance) VALUES (?); SELECT * FROM accounts where id = (SELECT LAST_INSERT_ID());',
            [account.balance],
            (error, rows) => {
                if (error) {
                    reject(error)
                }
                resolve(convertRowPacketToArray(rows[1])[0] as Account); 
            }
        )
    })
}

export function updateAccount(
    connection: mysql.Connection,
    account: Account
) : Promise<Account> {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE accounts SET balance=? where id = ?; SELECT * FROM accounts where id=?;',
            [account.balance, account.id, account.id],
            (error, rows) => {
                if (error) {
                    reject(error); 
                }
                resolve(convertRowPacketToArray(rows[1])[0] as Account); 
            }
        )

    })
}

export function getAccount(
    connection: mysql.Connection,
    id: number
) : Promise<Account> {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM accounts where id=?;',
            [id],
            (error, rows) => {
                if (error) {
                    reject(error); 
                }
                resolve(convertRowPacketToArray(rows[1])[0] as Account); 
            }
        )

    })
}

export function getCreditCard(
    connection: mysql.Connection,
    id: number
) : Promise<CreditCard> {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM creditcards where id=?;',
            [id],
            (error, rows) => {
                if (error) {
                    reject(error); 
                }
                resolve(convertRowPacketToArray(rows[1])[0] as CreditCard); 
            }
        )

    })
}

function convertRowPacketToArray(rowPacket: any) {
    return JSON.parse(JSON.stringify(Object.values(rowPacket)))
}
