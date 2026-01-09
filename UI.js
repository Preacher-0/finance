class UI {
    #list;
    #balanceEl;
    // Ostatní elementy zatím nepotřebujeme

    constructor() {
        this.#list = document.getElementById('transaction-list');
        this.#balanceEl = document.getElementById('balance');
    }

    render(transactions) {
        //scrubdubdub tabulky
        this.#list.innerHTML = "";

        for (let t of transactions) {
            let row = document.createElement("tr");
            
            let sign;
            let amountClass;

            // rozliseni jestli vydej nebo prijem
            if (t.type === 'income') {
                row.className = 'item-income';
                sign = '+';
                amountClass = 'amount-income';
            } else {
                row.className = 'item-expense';
                sign = '-';
                amountClass = 'amount-expense';
            }

            // naplneni radku tabulky
            row.innerHTML = `
                <td>${t.title} <br><small style="color:#888">${t.date}</small></td>
                <td>${t.category}</td>
                <td class="${amountClass}">${sign} ${t.amount} Kč</td>
                <td></td>
            `;

            this.#list.appendChild(row);
        }

        this.updateBalance(transactions);
    }

    // pocitani a aktualizace zustatku
    updateBalance(transactions) {
        const total = transactions.reduce((acc, item) => {
            if (item.type === 'income') {
                return acc + item.amount;
            } else {
                return acc - item.amount;
            }
        }, 0);

        this.#balanceEl.innerText = `${total} Kč`;
        
        // zmena barev
        if (total >= 0) {
            this.#balanceEl.className = 'positive';
        } else {
            this.#balanceEl.className = 'negative';
        }
    }
}