function compareTriplets(a, b) {
    let result = [];
    let aScore = 0,
        bScore = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aScore++;
        if (a[i] < b[i]) bScore++;
    }
    result[0] = aScore;
    result[1] = bScore;
    return result;
}

/*-----------------------------
         a Very Big Sum
----------------------------         
*/
function aVeryBigSum(ar) {
    return ar.reduce((c, i) => c + i, 0);
}


let diag1 = 0;
    let diag2 = 0;
    const len = arr.length;
    arr.forEach((ele, ind, arr) => {
        diag1 += ele[ind];
        diag2 += ele[len - 1 - ind];
    })
    return Math.abs(diag1-diag2);

//plus and minus
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    arr.forEach(e => {
        if (e > 0)
            pos++;
        else if (e < 0)
            neg++;
        else if (e == 0)
            zero++;
    });
    console.log(pos / arr.length);
    console.log(neg / arr.length);
    console.log(zero / arr.length);
}

//Stair case
for(let i = 1, j= n - 1; i <= n; i++, j--)
 { const result = [...Array(j).fill(" "), ...Array(i).fill("#")] 
console.log(result.join("")); }


//minimum and maximum sum

arr.sort((a,b) => a-b);
    console.log(String(arr.slice(0,4).reduce((a,b)=>a+b)) + ' ' + String(arr.slice(1,5).reduce((a,b)=>a+b)));ss