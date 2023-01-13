import { DioAccount } from "./DioAcount"

export class PeopleAccount extends DioAccount{
    private id: number

    constructor(id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.id = id
    }
}