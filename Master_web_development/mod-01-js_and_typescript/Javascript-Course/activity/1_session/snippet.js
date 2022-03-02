// All numbers from 1 to 100 divisible for 7
for(num=1; num<= 100; num++){
    if(num % 7 == 0){
        //console.log(num);
    }
}
/* result
7
14
21
28
35
42
49
56
63
70
77
84
91
98
*/

// formatter 
let formatter = {
    prefix: 'Hello', 
    append: function(str){
        console.log(this.prefix,str);
    }
}
formatter.append('World');

// to lower case
formatter.toLowerCase = function(str){
    console.log(str.toLowerCase());
}

formatter.toLowerCase('MY NAME IS LEONARDO!');