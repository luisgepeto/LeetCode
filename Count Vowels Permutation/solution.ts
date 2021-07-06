console.log(countVowelPermutation(1));
console.log(countVowelPermutation(2));
console.log(countVowelPermutation(3));
console.log(countVowelPermutation(4));
console.log(countVowelPermutation(5));
console.log(countVowelPermutation(5000));

function countVowelPermutation(n: number): number {
    const MOD = 1000000007;
    let distribution:[number,number,number,number,number] = [1, 1, 1, 1, 1];
    for(let i = 0; i < n-1; i++){
        const currentA = distribution[0];
        const currentE = distribution[1];
        const currentI = distribution[2];
        const currentO = distribution[3];
        const currentU = distribution[4];

        distribution[0] = (currentE+currentI+currentU)%MOD;
        distribution[1] = (currentA+currentI)%MOD;
        distribution[2] = (currentE+currentO)%MOD;
        distribution[3] = (currentI)%MOD;
        distribution[4] = (currentI+currentO)%MOD;
    }
    let sum = 0;
    distribution.map(d => {sum+=d;});
    return sum%MOD;
};