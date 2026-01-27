function multiplication(m,f){

    let sum =0;
    for(let i=0;i<m.length;i++){
        for(let j=0;j<f.length;j++){
            if(m[i]%f[j]==0){
                sum+=m[i];
                break;
            }
        }
    }
    return sum;
}