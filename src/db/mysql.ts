import * as mysql from 'mysql'
import * as fs from 'fs'
import * as path from 'path'
import { ICreditCard, IAccount } from '../types/types'
import CreditCard from '../classes/creditcard'

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
                    throw error
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
            account,
            attempts,
            blocked,
            created,
            last_used,
            pincode,
        } = creditcard
        connection.query(
            'UPDATE creditcards SET pincode=?, created=?, last_used=?, attempts=?, blocked=? where id = ?;',
            [pincode, created, last_used, attempts, blocked, creditcard.id],
            (error, rows) => {
                if (error) {
                    throw error
                }
                resolve(convertRowPacketToArray(rows[1])[0] as CreditCard); 
            }
        )
    })
}

function convertRowPacketToArray(rowPacket: any) {
    return JSON.parse(JSON.stringify(Object.values(rowPacket)))
}
