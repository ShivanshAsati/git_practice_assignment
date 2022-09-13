let arr = [1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<=arr.length-1; i++){
  
  let count=0;
  
  for (let j=0; j<=i; j++){

    if(arr[i]%arr[j]==0){
      count++;
    }
    
  }
  if (count==2){
    console.log(arr[i]);
    
  }

}