export abstract class DioAccount{

    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    public deposit = (value: number): void => {
        if(this.balanceIsPositive() && this.validateStatus()){
            this.balance += value
            console.log("Você depositou $", value)
        }
    }

    public withdraw = (value: number): void => {
        if(this.validateStatus() && value <= this.balance){
            this.balance -= value
            console.log("Você sacou $", value)
        }
    }

    public balanceIsPositive = (): boolean => {
        if(this.balance >= 0){
            return true
        }else{
            return false
        }
    }

    public validateStatus = (): boolean => {
        if(this.status){
            return true
        }
        throw new Error("Conta inválida")
    }
    
    public setBalance = (value: number) => {
        this.balance = value
    }

    public getAccountNumber = (): number => {
        return this.accountNumber
    }

    public getName = (): string => {
        return this.name
    }

    public getBalance = (): number => {
        return this.balance
    }
}