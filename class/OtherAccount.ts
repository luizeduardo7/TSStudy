import { DioAccount } from "./DioAcount";

export class OtherAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    public deposit = (value: number): void => {
        if(this.balanceIsPositive() && this.validateStatus()){
            value += 10
            this.setBalance(value)
            console.log("Você depositou $", value)
        }
    }
}