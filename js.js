class Calculator{
    constructor(previousTextelement, currentTextelement){
        this.previousTextelement = previousTextelement
        this.currentTextelement = currentTextelement
        this.clear()
    }
    clear(){
        this.prev = 'Rate our waiter:'
        this.cur = ''
        this.operation = undefined
    }
    delete(){
        this.cur = this.cur.toString().slice(0, -1)
    }
    chooseOperation(operation){
        if(this.operation !== ''){
            this.compute()
        }
        if(operation== 'Excellent'){
            operation = '^'
        }
        if(operation== 'Good'){
            operation = '!'
        }
        if(operation== 'Fair'){
            operation = '1'
        }
        this.prev = 'Total Cost: ' + this.cur.toString()
        this.operation = operation
        this.cur= ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.prev)
        const cur = parseFloat(this.cur)
        switch(this.operation){
            case '^': computation = .15 * cur
            break
            case '1': computation = .05 * cur
            break
            case '!': computation = .10 * cur
            break
            default:
                return
        }
        this.cur = computation
        this.prev = ''
        this.operation = undefined
    }
    appendnum(number){
        if(this.cur.includes('.') && number === '.') return
        this.cur = this.cur.toString() + number.toString()
    }
    updateDisplay(){
        this.currentTextelement.innerText = this.cur
        this.previousTextelement.innerText = this.prev
    }
}
const numbuttons = document.querySelectorAll('[data-number]')
const delbutton = document.querySelector('[data-del]')
const opebuttons = document.querySelectorAll('[data-operation]')
const cebutton = document.querySelector('[data-ce]')
const eqbutton = document.querySelector('[data-equal]')
const previousTextelement = document.querySelector('[data-prev]')
const currentTextelement = document.querySelector('[data-cur]')
const calculator = new Calculator(previousTextelement, currentTextelement)

numbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendnum(button.innerText)
        calculator.updateDisplay()
    })
})

opebuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

delbutton.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
})
eqbutton.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})
cebutton.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
})

 