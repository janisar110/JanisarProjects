export function Cashwithdraw(totalamount:number,EnteredAmt:number,){
let netAmount = totalamount - EnteredAmt;
return netAmount
}