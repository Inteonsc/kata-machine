export default function two_crystal_balls(breaks: boolean[]): number {
    let jmpAmount = Math.floor(Math.sqrt(breaks.length))
    
    let amountJumped = jmpAmount;
    for(;amountJumped < breaks.length; amountJumped+= jmpAmount){
        if(breaks[amountJumped]){
            break;
        }
    }
    amountJumped -= jmpAmount
    for(let j = 0; j<= jmpAmount && amountJumped< breaks.length; j++){
        if(breaks[j + amountJumped]){
            return j + amountJumped;
        }
    }

    return -1;

}