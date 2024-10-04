




let arr = [1,2,1,3,6,3,4,5,5,8,7]


let removeOccurs =(arr)=>{

    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            // if(i!==j){
                if(arr[i]==arr[j]){
                    arr.splice(j,1)
                }
            // }
            

            
        }

    }
    return arr
}

let res =removeOccurs(arr)

console.log(res);
