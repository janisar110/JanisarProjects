export function sendMoney(totalAmt:number,enteredAmt:number,sendActNum:number,myActNum:number){
    let netAmt;
    if(myActNum == sendActNum){
        netAmt = totalAmt;
    }
    else {
     netAmt = totalAmt - enteredAmt;
    }
    return netAmt;
}