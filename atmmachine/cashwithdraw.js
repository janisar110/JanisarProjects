export function Cashwithdraw(totalamount, EnteredAmt) {
    let netAmount = totalamount - EnteredAmt;
    return netAmount;
}
