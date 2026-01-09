class Store {
    #transactions = [];
    #onDataChange; 

    constructor() {
        this.#transactions = this.loadData();
    }

    bindDataChange(callback) {
        this.#onDataChange = callback;
    }

    getTransactions() {
        return this.#transactions;
    }

    saveData() {
        localStorage.setItem("budget_data", JSON.stringify(this.#transactions));
    }

    loadData() {
        const saved = localStorage.getItem("budget_data");
        return saved ? JSON.parse(saved) : [];
    }
}