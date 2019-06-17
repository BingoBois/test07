import Bank from './classes/bank'
import { ICreditCard } from './types/types';
import CreditCard from './classes/creditcard';
import Account from './classes/account';
import bashHelper from './helpers/bashHelper';
(async () => {
    let bank = new Bank();
    const creditcard = new CreditCard(2338, new Date(), new Date(), 0, false, new Account(200));
    //console.log(await bank.createCreditCard(creditcard))
    bashHelper.execBash('../start.sh')
})();
