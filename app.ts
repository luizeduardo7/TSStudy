// Dio Bank

//name, accountNumber
//deposit, withdraw
import { CompanyAccount } from "./class/CompanyAccount"
import { OtherAccount } from "./class/OtherAccount"
import { PeopleAccount } from "./class/PeopleAccount"


const account: PeopleAccount = new PeopleAccount(1, "Luiz", 0)
account.deposit(200)
account.withdraw(10)
console.log(account)

const companyAccount: CompanyAccount = new CompanyAccount(1, "DIO", 1)
companyAccount.deposit(200)
companyAccount.withdraw(10)
companyAccount.getLoan(200)
console.log(companyAccount)

const otherAccount: OtherAccount = new OtherAccount("Other", 2)
otherAccount.deposit(200)
otherAccount.withdraw(10)
console.log(otherAccount)