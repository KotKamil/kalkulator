class Calculator {

    init() {
        this.getButtons();
    }
    
    getButtons(){
        const buttons = document.querySelectorAll('button');
        const display = document.querySelector('.display');
        
        buttons.forEach(button => {
            button.addEventListener('click', ()=>{
                let value = button.textContent;

                if(value=="=") return display.value = this.calculate(display.value);
                if(value=="AC") return display.value="";

                value=="÷" ? value = "/" : value;
                value=="×" ? value = "*" : value;
                value=="=" ? value = "" : value;
                value=="AC" ? value = "" : value;
                display.value += value;
            });
        });
    }

    calculate(equation){
        return eval(equation);
    }
}

kalkulator = new Calculator();
kalkulator.init(); 