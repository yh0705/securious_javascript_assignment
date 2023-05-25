const readline = require('readline-sync')
const input = readline.question


function cal_plus (a, b) {
    var num = a + b;
    return num;
}

function cal_minus (a, b) {
    var num = a - b;
    return num;
}

function cal_multiply (a, b) {
    var num = a * b;
    return num;
}

function cal_division (a, b) {
    var num = a / b;
    return num;
}

function cal_and (arr1, arr2, cnt) {
    let arr_ans = new Array();
    for(i=0 ; i<cnt ; i++){
        arr_ans[i] = arr1[i] & arr2[i];
    }
    for(i=cnt-1; i>=0; i--){
        console.log("%d", arr_ans[i]);
    }
    return 0;
}

function cal_or (arr1, arr2, cnt) {
    let arr_ans = new Array();
    for(i=0 ; i<cnt ; i++){
        arr_ans[i] = arr1[i] | arr2[i];
    }
    for(i=cnt-1; i>=0; i--){
        console.log("%d", arr_ans[i]);
    }
    return 0;
}

function cal_xor (arr1, arr2, cnt) {
    let arr_ans = new Array();
    for(i=0 ; i<cnt ; i++){
        arr_ans[i] = arr1[i] ^ arr2[i];
    }
    for(i=cnt-1; i>=0; i--){
        console.log("%d", arr_ans[i]);
    }
    return 0;
}

function cal_leftswift (arr1, b) {
    let arr_ans = new Array();
    arr_ans = arr1 << b;
    for(i=cnt-1; i>=0; i--){
        console.log("%d", arr_ans[i]);
    }
    return 0;
}

function cal_rightswift (arr1, b) {
    let arr_ans = new Array();
    for(i=0 ; i<100-b; i++){
        arr_ans[i+b] = arr1[i];
    }
    for(i=cnt-1; i>=0; i--){
        console.log("%d", arr_ans[i]);
    }
    return 0;
}

while(true){

    if(s == 'q')
        break;
    else{
        var a = input("input first number: ");
        var b = input("input second number: ");
        var s = input("input symbol: ");

        if(s == '+', '-', '*', '/'){
            var a = parseInt(a);
            var b = parseInt(b);
            switch (s){
                case '+': console.log(cal_plus (a, b, cnt)); break;
                case '-': console.log(cal_minus (a, b, cnt)); break; 
                case '*': console.log(cal_multiply (a, b, cnt)); break; 
                case '/': console.log(cal_division (a, b, cnt)); break; 
        }}
        if(s == '&', '|', '^') {

            let arr1 = new Array();
            let arr2 = new Array();

            var i = 0;
            var cnt = 0;

            while(a>0){
                arr1 [i] = a%2;
                a = a - arr1[i];
                a = a/2;
                i++;
                cnt++;
            }

            i = 0;
            var cnt = 0;

            while(b>0){
                arr2 [i] = b%2;
                b = b - arr2[i];
                b = b/2;
                i++;
                cnt++;
            }

            switch (s){
                case '&': cal_and (arr1, arr2, cnt); break;
                case '|': cal_or (arr1, arr2, cnt); break; 
                case '^': cal_xor (arr1, arr2, cnt); break; 
        }
        if(s == '>', '<') {
            let arr1 = new Array();
            var i = 0;
            var cnt = 0;
            while(a>0){
                arr1 [i] = a%2;
                a = a - arr1[i];
                a = a/2;
                i++;
                cnt++;
            }
            switch (s){
                case '>': cal_leftswift (arr1, b); break;
                case '<': cal_rightswift (arr1, b); break; 
        }
    }
}
}
}