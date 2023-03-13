
function layTen(): void {
    let input: HTMLInputElement =  <HTMLInputElement>document.getElementById("fullname"); 
    let ten: string = input.value;
    let result = "Hi, " + ten + "!";
    let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result-content");
    p.innerHTML = result;
}

export {}; // De khong bi dung do (trung ten ham) trong js
