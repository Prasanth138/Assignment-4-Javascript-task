// let odd= function (){
//     console.log("Print odd numbers in an array using anonymous function")
//     let num=[1,0,3,8,7,9];
//     for(i=0;i<num.length;i++){
//         if((num[i]%2)!=0){
//             console.log(num[i]);
//         }
//     }
// }
// odd();

// (function (){
//     console.log("Print odd numbers in an array using iife function")
//     let num=[1,0,3,8,7,9];
//     for(i=0;i<num.length;i++){
//         if((num[i]%2)!=0){
//             console.log(num[i]);
//         }
//     }
// })();

// let caps= function (){
//         console.log("Convert all the strings to title caps in a string array using anonymous function")
//         let num=["hI tHeRe", "i aM gUVI"];
//         for(i=0;i<num.length;i++){
//             num[i]=num[i].toLowerCase().split(' ');;
//             for(j=0;j<num[i].length;j++){
//                 num[i][j] = num[i][j].charAt(0).toUpperCase() + num[i][j].slice(1);
//             }
//             let k=num[i].join(" ");
//             console.log(k);          
//         }
//     }
//     caps();

//    (function (){
//         console.log("Convert all the strings to title caps in a string array using iife function")
//         let num=["hI tHeRe", "i aM gUVI"];
//         for(i=0;i<num.length;i++){
//             num[i]=num[i].toLowerCase().split(' ');;
//             for(j=0;j<num[i].length;j++){
//                 num[i][j] = num[i][j].charAt(0).toUpperCase() + num[i][j].slice(1);
//             }
//             let k=num[i].join(" ");
//             console.log(k);          
//         }
//     })();

// let palindrome= function ()
// {
//    console.log("Return all the prime numbers in an array using anonymous function");
//    let num=[1,0,-1,3,8,7,9,5,9973,8];
//    for(i=0;i<num.length;i++)
//    {
//     var t=0;
//       if(num[i]==1 || num[i]<=0)
//        {
//         continue
//        }
//       else 
//        {
//          for(j=1;j<=num[i];j++)
//           {
//             if(num[i]%j===0)
//             {
//                t=t+1;
//             }
//           }
//           if(t==2)
//           {
//              console.log(num[i]);
//           }
//           }
//     }
// }
// palindrome();

// (function ()
// {
//    console.log("Return all the prime numbers in an array using iife function");
//    let num=[1,0,-1,3,8,7,9,5,9973,8];
//    for(i=0;i<num.length;i++)
//    {
//     var t=0;
//       if(num[i]==1 || num[i]<=0)
//        {
//         continue
//        }
//       else 
//        {
//          for(j=1;j<=num[i];j++)
//           {
//             if(num[i]%j===0)
//             {
//                t=t+1;
//             }
//           }
//           if(t==2)
//           {
//              console.log(num[i]);
//           }
//           }
//     }
// })();

// let palindrome= function ()
// {
//    console.log("Return all the palindromes in an array using anonymous function");
//    let num=[12321, 2156, "refer", "mango",131, "ghjhg"];
//    for(i=0;i<num.length;i++)
//    {
//        let f=num[i].toString();   
//        let n=f.split("").reverse().join("");
//         if(n==num[i])
//             {
//                console.log(num[i]);
//             }
          
//     }
// }
// palindrome();

// (function ()
// {
//    console.log("Return all the palindromes in an array using iife function");
//    let num=[12321, 2156, "refer", "mango",131, "ghjhg"];
//    for(i=0;i<num.length;i++)
//    {
//        let f=num[i].toString();   
//        let n=f.split("").reverse().join("");
//         if(n==num[i])
//             {
//                console.log(num[i]);
//             }
          
//     }
// })();

// let median= function ()
// {
//    console.log("Return median of two sorted arrays of same size using anonymous function");
//    let n1=[1,5,7,9,10];
//    let n2=[3,4,6,8,10];
//    let n3=n1.concat(n2);
   
//     if(n1.length == n2.length){
//         var s=(n3.length/2)-1;
//         var t=s+1;
//         console.log(n3[s]);
//         console.log(n3[t]);
//         var sum=((n3[s]+n3[t])/2);
//         console.log("The median of two sorted array is "+ sum);
//     }

// }
// median();

// (function ()
// {
//    console.log("Return median of two sorted arrays of same size using iife function");
//    let n1=[1,5,7,9,10];
//    let n2=[3,4,6,8,10];
//    let n3=n1.concat(n2);
   
//     if(n1.length == n2.length){
//         var s=(n3.length/2)-1;
//         var t=s+1;
//         console.log(n3[s]);
//         console.log(n3[t]);
//         var sum=((n3[s]+n3[t])/2);
//         console.log("The median of two sorted array is "+ sum);
//     }

// })();



// let duplicate= function () 
// { 
//     console.log("Remove duplicates from an array using anonymous function");
//     let a=["hi","fgb","ghh","hi"];
//    var d= a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
   
// });
// console.log(d)
// }
// duplicate();

// (function () 
// { 
//     console.log("Remove duplicates from an array using anonymous function");
//     let a=["hi","fgb","ghh","hi"];
//    var d= a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
   
// });
// console.log(d)
// })();

