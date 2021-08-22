import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    currentNumber = '0';
    operator = "";
    waitForSecondNumber = false;
    result = "";

    public getNumber(num: string) {
      if (this.waitForSecondNumber) {

          this.currentNumber = num;
        this.waitForSecondNumber = false;

      }
      else {
        this.currentNumber === '0' ? this.currentNumber = num : this.currentNumber += num;

      }
      if (this.currentNumber.length > 10) {
        this.currentNumber = "Too Large Number";
      }


    }
    public getDecimal(dot:string) {
      if (dot === ".") {
        const dotted = this.currentNumber[this.currentNumber.length - 1];
        if (dotted === ".") {
          return;
        }


      }
      this.currentNumber+=dot;

    }
    public getOperation(op: string) {

      if (op === '/' || op === '*' || op === '-' || op === '+') {
        const lastKey = this.currentNumber[this.currentNumber.length - 1];
        if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
          this.waitForSecondNumber = true;
          return;
        }
      }

      this.currentNumber += op;
      this.operator = op;

    }

    private doCalculation() {
      this.result = eval(this.currentNumber);

    }
    public getAnswer() {
      this.doCalculation();
      this.currentNumber = this.result;
    }



    public clearAll() {
      this.currentNumber = '0';

      this.operator = "";
      this.waitForSecondNumber = false;
    }
    public delete() {
      if (this.currentNumber !== "0" && this.currentNumber.length <= 10) {
        this.currentNumber = this.currentNumber.toString().slice(0, -1);

      }
      if (this.currentNumber.length === 0 || this.currentNumber.length > 10) {
        this.currentNumber = "0";
      }


    }
  }
