export function sendMoney(totalAmt, enteredAmt) {
    let netAmt = totalAmt - enteredAmt;
    return netAmt;
}
