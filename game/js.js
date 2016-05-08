var chess=document.getElementById('chess');
var context=chess.getContext('2d');
var i;
var superBlock=-1;
var block=[];
var startD=[],endD=[];
for(var i=1;i<=10;i++){
    block[i]=[];
    for(j=1;j<=10;j++){
        block[i][j]=0;
    }
}

window.onload=function(){
    drawchessbox();
    clickXY();
}
//键盘事件
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==65){ // 按 A
        mvRobot();
        mvSuper(1,0);
    }
    if(e && e.keyCode==68){ // 按 D
        mvRobot();
        mvSuper(-1,0);
    }
    if(e && e.keyCode==83){ // S 键
        mvRobot();
        mvSuper(0,-1);
    }
    if(e && e.keyCode==87){ // W 键
        mvRobot();
        mvSuper(0,1);
    }
};

function mvRobot(){
    for(var i=1;i<=10;i++){
        for(var j=1;j<=10;j++){
            if(block[i][j]==3){
                robot(i,j);
            }
        }
    }
}
function robot(i,j){
    if(i<=startD[1]&&j<=endD[1]){
        if(block[i][j]==2){
            drawBlock(i+1,j,"red");
            drawBlock(i,j,"white");
            block[i+1][j]=3;
            block[i][j]=0;
        }else{
            drawBlock(i,j+1,"red");
            drawBlock(i,j,"white");
            block[i][j+1]=3;
            block[i][j]=0;
        }
    }else if(i>startD[1]&&j<=endD[1]){
        if(block[i][j]==2){
            drawBlock(i,j+1,"red");
            drawBlock(i,j,"white");
            block[i][j+1]=3;
            block[i][j]=0;
        }else{
            drawBlock(i-1,j,"red");
            drawBlock(i,j,"white");
            block[i-1][j]=3;
            block[i][j]=0;
        }
    }else if(i>startD[1]&&j>endD[1]){
        if(block[i][j]==2){
            drawBlock(i-1,j,"red");
            drawBlock(i,j,"white");
            block[i-1][j]=3;
            block[i][j]=0;
        }else{
            drawBlock(i,j-1,"red");
            drawBlock(i,j,"white");
            block[i][j-1]=3;
            block[i][j]=0;
        }
    }else if(i<=startD[1]&&j>endD[1]){
        if(block[i][j]==2){
            drawBlock(i,j-1,"red");
            drawBlock(i,j,"white");
            block[i][j-1]=3;
            block[i][j]=0;
        }else{
            drawBlock(i+1,j,"red");
            drawBlock(i,j,"white");
            block[i+1][j]=3;
            block[i][j]=0;
        }
    }
}
//移动机器人
//function mvRobot(){
//    for(var i=1;i<10;i++){
//        for(var j=1;j<10;j++){
//            if(block[i][j]==3){
//                if(i<=startD[1]){
//                    if(j<=endD[1]){
//                        if(block[i][j+1]==2){
//                            drawBlock(i+1,j,"red");
//                            drawBlock(i,j,"white");
//                            block[i+1][j]=3;
//                            block[i][j]=0;
//                        }else {
//                            if(j-endD[1]>=i-startD[1]){
//                                drawBlock(i,j+1,"red");
//                                drawBlock(i,j,"white");
//                                block[i][j+1]=3;
//                                block[i][j]=0;
//                            }else if(j-endD[1]<i-startD[1]){
//                                drawBlock(i+1,j,"red");
//                                drawBlock(i,j,"white");
//                                block[i+1][j]=3;
//                                block[i][j]=0;
//                            }
//                        }
//                    }else{
//                        if(block[i][j+1]==2){
//                            drawBlock(i-1,j,"red");
//                            drawBlock(i,j,"white");
//                            block[i-1][j]=3;
//                            block[i][j]=0;
//                        }else{
//                            if(j-endD[1]>=i-startD[1]){
//                                drawBlock(i,j-1,"red");
//                                drawBlock(i,j,"white");
//                                block[i][j-1]=3;
//                                block[i][j]=0;
//                            }else if(j-endD[1]<i-startD[1]){
//                                drawBlock(i-1,j,"red");
//                                drawBlock(i,j,"white");
//                                block[i-1][j]=3;
//                                block[i][j]=0;
//                            }
//                        }
//                    }
//                }else{
//                    if(j<=endD[1]){
//                        if(block[i][j+1]==2){
//                            drawBlock(i-1,j,"red");
//                            drawBlock(i,j,"white");
//                            block[i-1][j]=3;
//                            block[i][j]=0;
//                        }else{
//                            if(j-endD[1]>=i-startD[1]){
//                                drawBlock(i,j+1,"red");
//                                drawBlock(i,j,"white");
//                                block[i][j+1]=3;
//                                block[i][j]=0;
//                            }else if(j-endD[1]<i-startD[1]){
//                                drawBlock(i+1,j,"red");
//                                drawBlock(i,j,"white");
//                                block[i+1][j]=3;
//                                block[i][j]=0;
//                            }
//                        }
//                    }else{
//                        if(block[i][j+1]==2){
//                            drawBlock(i+1,j,"red");
//                            drawBlock(i,j,"white");
//                            block[i+1][j]=3;
//                            block[i][j]=0;
//                        }else{
//                            if(j-endD[1]>=i-startD[1]){
//                                drawBlock(i,j-1,"red");
//                                drawBlock(i,j,"white");
//                                block[i][j-1]=3;
//                                block[i][j]=0;
//                            }else if(j-endD[1]<i-startD[1]){
//                                drawBlock(i-1,j,"red");
//                                drawBlock(i,j,"white");
//                                block[i-1][j]=3;
//                                block[i][j]=0;
//                            }
//                        }
//                    }
//                }
//            }
//        }
//    }
//}
//移动hero
function mvSuper(pX,pY){
    if(block[startD[1]-pX][endD[1]-pY]==0){//-1 0
        startD[1] -= pX;
        endD[1]-=pY;
        if(superBlock==-1){
            drawBlock(startD[1],endD[1],"green");
        }else if(superBlock<3){
            drawBlock(startD[1],endD[1],"#6BF65E");
            superBlock+=1;
            if(superBlock==2){
                superBlock=-1;
            }
        }
        drawBlock(startD[1]+pX,endD[1]+pY,"white");//+1 0
        block[startD[1]][endD[1]]=-1;
        block[startD[1]+pX][endD[1]+pY]=0;//+1 0
    }else if(block[startD[1]-pX][endD[1]-pY]==2){//-1 0
        alert("no");
    }else if(block[startD[1]-pX][endD[1]-pY]==1){
        startD[1] -= pX;
        endD[1]-=pY;
        drawBlock(startD[1],endD[1],"#6BF65E");
        drawBlock(startD[1]+pX,endD[1]+pY,"white");
        block[startD[1]][endD[1]]=-1;
        block[startD[1]+pX][endD[1]+pY]=0;
        superBlock=0;
    }else if(block[startD[1]-pX][endD[1]-pY]==3){
        if(superBlock==-1) {
            alert("failed");
        } else if(superBlock!=-1){
            startD[1] -= pX;
            endD[1]-=pY;
            drawBlock(startD[1],endD[1],"#6BF65E");
            drawBlock(startD[1]+pX,endD[1]+pY,"white");
            block[startD[1]][endD[1]]=-1;
            block[startD[1]+1][endD[1]]=0;
            superBlock++;
        }
    }
    //var robot=0;
    //var suptool=0;
    //for(var i=1;i<=10;i++){
    //    for(var j=1;j<=10;j++){
    //        if(block[i][j]==3){
    //            robot++;
    //        }
    //        if(block[i][j]==1){
    //            suptool++;
    //        }
    //    }
    //}
    //if(robot==0){
    //    alert("win");
    //}else if(robot!=0 || (robot!=0&&suptool==0)){
    //    if(superBlock==-1) alert("failed");
    //    else{
    //        return;
    //    }
    //}
}
//产生hero robot super as....
function clickXY(){
    i=1;
    var x,y;
    chess.onclick=function(e){
        x= e.offsetX;
        y= e.offsetY;
        startD[i]= Math.floor(x / 30);
        endD [i]= Math.floor(y / 30);
        if(startD[i]<1 || startD[i]>10 || endD[i]<1 || endD[i]>10) return;
            if(i==1){
                drawBlock(startD[i],endD[i],"green");
                block[startD[i]][endD[i]]=-1;
                //console.log(startD[i],endD[i]);
                i++;
            }else if(i>1){
                if(block[startD[i]][endD[i]]==0){
                    var str=window.prompt("1,0,2","");
                    if(str==0){
                        drawBlock(startD[i],endD[i],"red");
                        block[startD[i]][endD[i]]=3;
                        i++;
                    }else if(str==1){
                        drawBlock(startD[i],endD[i],"blue");
                        block[startD[i]][endD[i]]=1;
                        i++;
                    }else if(str==2){
                        drawBlock(startD[i],endD[i],"#F6C462");
                        block[startD[i]][endD[i]]=2;
                        i++;
                    }
                }else alert("repeat");
            }
        else return;
    }
}
//画表格
var drawchessbox=function(){
    for(var i=0;i<11;i++)
    {
        context.moveTo(30+i*30,30);
        context.lineTo(30+i*30,360-30);
        context.stroke();
        context.moveTo(30,30+i*30);
        context.lineTo(360-30,30+i*30);
        context.stroke();
    }
}
//画方块
function drawBlock(startD,endD,color) {
    if(startD>0&&startD<11&&endD>0&&endD<11){
        context.strokeStyle = "block";
        context.fillStyle = color;
        context.fillRect(startD*30,endD*30,30,30);
        context.strokeRect(startD*30,endD*30,30,30);
    }
}

//if(block[startD[1]-1][endD[1]]==0){
//    startD[1] -= 1;
//    if(superBlock==-1){
//        drawBlock(startD[1],endD[1],"green");
//    }else if(superBlock<3){
//        drawBlock(startD[1],endD[1],"#6BF65E");
//        superBlock+=1;
//        if(superBlock==2){
//            superBlock=-1;
//        }
//    }
//    drawBlock(startD[1]+1,endD[1],"white");
//    block[startD[1]][endD[1]]=-1;
//    block[startD[1]+1][endD[1]]=0;
//}else if(block[startD[1]-1][endD[1]]==2){
//    alert("no");
//}else if(block[startD[1]-1][endD[1]]==1){
//    startD[1] -= 1;
//    drawBlock(startD[1],endD[1],"#6BF65E");
//    drawBlock(startD[1]+1,endD[1],"white");
//    block[startD[1]][endD[1]]=-1;
//    block[startD[1]+1][endD[1]]=0;
//    superBlock=0;
//}else if(block[startD[1]-1][endD[1]]==3){
//    if(superBlock==-1) {
//        alert("failed");
//    } else if(superBlock!=-1){
//        startD[1] -= 1;
//        drawBlock(startD[1],endD[1],"#6BF65E");
//        drawBlock(startD[1]+1,endD[1],"white");
//        block[startD[1]][endD[1]]=-1;
//        block[startD[1]+1][endD[1]]=0;
//        superBlock++;
//    }
//}

//startD[1] += 1;
//drawBlock(startD[1],endD[1],"green");
//drawBlock(startD[1]-1,endD[1],"white");

//endD[1] += 1;
//drawBlock(startD[1],endD[1],"green");
//drawBlock(startD[1],endD[1]-1,"white");

//endD[1] -= 1;
//drawBlock(startD[1],endD[1],"green");
//drawBlock(startD[1],endD[1]+1,"white");

//if(i<=startD[1]){
//    if(j<=endD[1]){
//        if(block[i][j+1]!=2){
//            drawBlock(i,j+1,"red");
//            drawBlock(i,j-1,"white");
//            block[i][j+1]=3;
//            block[i][j]=0;
//        }else{
//            drawBlock(i+1,j,"red");
//            drawBlock(i-1,j,"white");
//            block[i+1][j]=3;
//            block[i][j]=0;
//        }
//    }else{
//        if(block[i][j-1]!=2){
//            drawBlock(i,j-1,"red");
//            drawBlock(i,j+1,"white");
//            block[i][j-1]=3;
//            block[i][j]=0;
//        }else{
//            drawBlock(i-1,j,"red");
//            drawBlock(i+1,j,"white");
//            block[i-1][j]=3;
//            block[i][j]=0;
//        }
//    }
//}
//if(i>startD[1]){
//    if(j<=endD[1]){
//        if(block[i][j-1]!=2){
//            drawBlock(i,j-1,"red");
//            drawBlock(i,j+1,"white");
//            block[i][j-1]=3;
//            block[i][j]=0;
//        }else{
//            drawBlock(i-1,j,"red");
//            drawBlock(i+1,j,"white");
//            block[i-1][j]=3;
//            block[i][j]=0;
//        }
//    }else{
//        if(block[i][j+1]!=2){
//            drawBlock(i,j+1,"red");
//            drawBlock(i,j-1,"white");
//            block[i][j+1]=3;
//            block[i][j]=0;
//        }else{
//            drawBlock(i+1,j,"red");
//            drawBlock(i-1,j,"white");
//            block[i+1][j]=3;
//            block[i][j]=0;
//        }
//    }
//}