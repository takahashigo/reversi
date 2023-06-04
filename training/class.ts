// class Fraction {
//   numerator: number;
//   denominator: number;

//   constructor(numerator: number, denominator: number) {
//     this.numerator = numerator;
//     this.denominator = denominator;
//   }

// }

// const f1 = new Fraction(3, 4);
// console.log(f1.numerator);
// f1.numerator = 10;
// console.log(f1.numerator);

// class Fraction {
//   private _numerator: number;
//   private _denominator: number;

//   constructor(numerator: number, denominator: number) {
//     this._numerator = numerator;
//     this._denominator = denominator;
//   }

//   get numerator() {
//     return this._numerator;
//   }

//   set numerator(value: number) {
//     this._numerator = value;
//   }

//   get denominator() {
//     return this._denominator;
//   }



// }

// const f1 = new Fraction(3, 4);
// console.log(f1.numerator);
// f1.numerator = 10;
// // console.log(f1.numerator);


class Fraction {
  // privateなフィールドを定義し、コンストラクタの引数で初期化する
  constructor(private _numerator: number, private _denominator: number) {}

  toString(): string {
    return `${this._numerator}/${this._denominator}`;
  }

  get numerator() {
    return this._numerator;
  }

  set numerator(value: number) {
    this._numerator = value;
  }

  get denominator() {
    return this._denominator;
  }



}

const f1 = new Fraction(3, 4);
console.log(f1.numerator);
f1.numerator = 10;
// console.log(f1.numerator);
