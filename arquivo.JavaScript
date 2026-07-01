// Seleciona os elementos do DOM
class Contador {
    constructor() {
        this.count = 0;
        this.valueDisplay = document.getElementById('value');
        this.btnDecrease = document.getElementById('btn-decrease');
        this.btnReset = document.getElementById('btn-reset');
        this.btnIncrease = document.getElementById('btn-increase');

        this.init();
    }

    init() {
        this.btnIncrease.addEventListener('click', () => this.alterarValor(1));
        this.btnDecrease.addEventListener('click', () => this.alterarValor(-1));
        this.btnReset.addEventListener('click', () => this.resetar());
    }

    alterarValor(quantidade) {
        this.count += quantidade;
        this.atualizarInterface();
    }

    resetar() {
        this.count = 0;
        this.atualizarInterface();
    }

    atualizarInterface() {
        this.valueDisplay.textContent = this.count;
        
        // Altera a cor dinamicamente baseado no valor
        if (this.count > 0) {
            this.valueDisplay.style.color = "#28a745";
        } else if (this.count < 0) {
            this.valueDisplay.style.color = "#dc3545";
        } else {
            this.valueDisplay.style.color = "#2c3e50";
        }
    }
}

// Inicializa o contador quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Contador();
});
