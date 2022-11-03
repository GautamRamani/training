"use strict";
class Account {
    constructor() {
        this._balance = 1000;
    }
    get balance() {
        return this._balance;
    }
    set balanced(value) {
        if (value < 0)
            throw new Error();
        this._balance = value;
    }
}
let showbal = new Account();
console.log(showbal.balance);
//# sourceMappingURL=first.js.map