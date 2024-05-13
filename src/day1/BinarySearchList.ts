export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;
    while (low < high){
        let mid = Math.floor(low + (high - low) / 2);
        let value = haystack[mid];
        if(value === needle){
            return true;
        }
        else if(value > needle){
            high = mid
        }else if (value < needle){
            low = mid + 1
        }

    }
    return false;
}