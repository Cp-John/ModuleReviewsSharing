export class AdminAccount {
    public accountName: string;
    public password: string;

    constructor(accountName: string, password: string) {
        this.accountName = accountName;
        this.password = password;
    }
}