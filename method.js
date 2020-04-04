//Slide 78
function method1(n){
    console.log("EXE1");
    let string ="";
    for(let i = 0; i < n; i++){
        string = string + "*";
    }
    console.log(string);
}
method1(2);

//Slide 79
function method2(n){
    console.log(`EXE2`);
    let text = "";
    for(let i = 0; i < n; i++){
        for(line = 0; line < n; line++){
            text += "*";
        }
        text += "\n";
    }
    console.log(text);
}
method2(2);


//Slide 80
function method3(n){
    console.log("EXE3");
    let text = "";
    for(let i = 1; i <= n; i++){
        for(line = 1; line <= n; line++){
            text += line;
        }
        text += "\n";
    }
    console.log(text);
}
method3(2);


//Slide 81
function method4(n){
    console.log("EXE4");
    let text = "";
    for(let i = 1; i <= n; i++){
        for(line = 1; line <= n; line++){
            text += i ;
        }
        text += "\n";
    }
    console.log(text);
}
method4(2);

//Slide 82
function method5(n){
    console.log("EXE5");
    let text = "";
    for(let i = n; i > 0; i--){
        for(line = n; line > 0; line--){
            text += i ;
        }
        text += "\n";
    }
    console.log(text);
}
method5(2);

//Slide 83
function method6(n){
    console.log("EXE6");
    let text = "";
        step = 1;
    for(let i = 1; i <= n; i++){  
        for(line = 1; line <= n; line++){
            text += step;
            step++;
        }
        text += "\n";
    }
    console.log(text);
    
}
method6(2);

//Slide 84
function method7(n){
    console.log("EXE7");
    let text = "";
        step = n ** 2;
    for(let i = n; i > 0; i--){  
        for(line = n; line > 0; line--){
            text += step ;
            step--;
        }
        text += "\n"
    }
    console.log(text); 
}
method7(2);

//Slide 85
function method8(n){
    console.log("EXE8");
    let text = "";
        step = 0;
    for(let i = 1; i <= n; i++){
        text += step;
        step +=2;
        text +="\n";
    }
    console.log(text);
    
}
method8(2);

//Slide 86
function method9(n){
    console.log("EXE9");
    let text = "";
        step = 2;
    for(let i = 1; i <= n; i++){
        text += step;
        step +=2;
        text +="\n";
    }
    console.log(text);
    
}
method9(2);

//Slide 87
function method10(n){
    console.log("EXE10");
    let text = "";
    for(let i = 1; i <= n; i++){  
        for(line = 1; line <= n; line++){
            text += i*line;
        }
        text += "\n";
    }
    console.log(text);
    
}
method10(2);

//Slide 88
function method11(n){
    console.log("EXE11");
    let text = "";
    for(i = 1; i <= n; i++){
        for(line = 1; line <=n; line++){
            if(i != line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
    
}
method11(2);

//Slide 89
function method12(n){
    console.log("EXE12");
    let text = "";
    for(i = n; i >=1; i--){
        for(line = 1; line <=n; line++){
            if(i == line){
                text += "-"
            }else{
                text += "*"
            }
        }
        text += "\n";
    }
    console.log(text);
    
}
method12(3);

//Slide 90
function method13(n){
    console.log("EXE13");
    let text = "";
    for(i = 1; i <=n; i++){
        for(line = 1; line <=n; line++){
            if(i >= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
    
}
method13(3);

//Slide 91
function method14(n){
    console.log("EXE14");
    let text = "";
    for(i = n; i >=1; i--){
        for(line = 1; line <=n; line++){
            if(i >= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
    
}
method14(3);

//Slide 92
function method15(n){
    console.log("EXE15");
    let text = "";
    for(i = 1; i <= n; i++){
        for(line = 1; line <=n; line++){
            if(i < line){
                text += "-"
            }else{
                text += "*"
            }
        }
        text += "\n";
    }
    for(i = n-1; i >=1; i--){
        for(line = 1; line <=n; line++){
            if(i >= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text)
}
method15(2);

//Slide 93
function method17(n){
    console.log("EXE17");
    let text = "";
    for(i = n; i >=1; i--){
        for(line = 1; line <=n; line++){
            if(i <= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
}
method17(2);

//Slide 94
function method18(n){
    console.log("EXE18");
    let text = "";
    for(i = 1; i <=n; i++){
        for(line = 1; line <=n; line++){
            if(i <= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
}
method18(2);

//Slide 95
function method19(n){
    console.log("EXE19");
    let text = "";
    for(i = n; i>=1; i--){
        for(line = 1; line <=n; line++){
            if(i > line){
                text += "-"
            }else{
                text += "*"
            }
        }
        text += "\n";
    }
    for(i = 2; i<=n; i++){
        for(line = 1; line <=n; line++){
            if(i <= line){
                text += "*"
            }else{
                text += "-"
            }
        }
        text += "\n";
    }
    console.log(text);
}
method19(4);

//Slide 96
function method20(n){
    console.log("EXE20");
    let text = "";
        step = 1;
    for(let i = n; i >= 1; i--){
        for(line = 1; line <= n; line++){
            if(i > line){
                text += "-";
            }else{
                text += step;
                step++;
            }
        }
        text += "\n"
    } 
    for(let i=2; i <= n; i++){
        for(line = 1; line <=n; line++){
            if(i > line){
                text += "-";
            }else{
                text += step;
                step++;
            }
        }
        text += "\n"
    }
    console.log(text);

}
method20(4);