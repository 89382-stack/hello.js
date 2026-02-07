alert("Hello World!");
function ab(f,m){
    let sum=0;

    for(let i=0; i < m.length; i++) {
            for (let j=0; j < f.length; j++){
                
                if(m[i]  %  f[j] ===0)
                {
                    sum += m[i];
                    break;
                }
            }
    }
    return sum;
}

console.log(ab([3,5],[1,2,3,4,5,6,7,8,9]));
console.log(ab([3,5],[1,2,3,4,5,6,7,8,9]));