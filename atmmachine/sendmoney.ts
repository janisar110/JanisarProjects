export function sendMoney(totalAmt:number,enteredAmt:number,){
    let netAmt = totalAmt - enteredAmt;
    return netAmt;
}