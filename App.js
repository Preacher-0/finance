class App {
    #store;
    #ui;

    constructor(store, ui) {
        this.#store = store;
        this.#ui = ui;
    }

    init() {
        // se zmenou se vola render
        this.#store.bindDataChange(this.render);
        this.render(this.#store.getTransactions());
    }

    render = (transactions) => {
        this.#ui.render(transactions);
    }
}