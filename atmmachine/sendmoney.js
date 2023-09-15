export function sendMoney(totalAmt, enteredAmt, sendActNum, myActNum) {
    let netAmt;
    if (myActNum == sendActNum) {
        netAmt = totalAmt;
    }
    else {
        netAmt = totalAmt - enteredAmt;
    }
    return netAmt;
}
