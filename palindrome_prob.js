//palindrome problem

let str="NAMAN";

let str1="";

for(let i=str.length-1; i>=0; i--){

str1=str1+str[i];
}

if(str==str1){
console.log("Yes");
}
else{
console.log("No");
}

