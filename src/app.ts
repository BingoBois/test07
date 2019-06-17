import Bank from './classes/bank'
import { ICreditCard } from './types/types';
import CreditCard from './classes/creditcard';
import Account from './classes/account';
import bashHelper from './helpers/bashHelper';
import { updateCreditCard } from './db/mysql';
(async () => {
    let bank = new Bank();
    let account = await bank.createAccount(new Account(200));
    let creditcard = new CreditCard(2338, new Date(), new Date(), 0, false, account);
    console.log("making creditcard");
    creditcard = await bank.createCreditCard(creditcard);
    console.log("done creditcard");
    creditcard.blocked = true;
    creditcard = await bank.updateCreditCard(creditcard);
    account.balance = -300;
    account = await bank.updateAccount(account);
})();
