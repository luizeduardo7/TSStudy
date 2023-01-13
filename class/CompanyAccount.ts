import { DioAccount } from "./DioAcount"

export class CompanyAccount extends DioAccount{
    private id: number

    constructor(id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.id = id
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.deposit(value)
        }
    }
}