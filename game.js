AFRAME.registercomponent("game",{
    schema:{
        gameState:{type:"string",default:"play"},
    },

    init:function(){
        var duration=300;
        var timeEl=document.querySelector("#timer");
        this.startTimer(duration,timeEl);
    },

    startTimer:function(duration,timeEl){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration>=100){this.data.gameState="play";
        minutes=parseInt(duration/60);
    seconds=parseInt(duration%60);
    if(minutes<10){
        minutes="0"+minutes;
    }

    if(seconds<10){
        seconds="0"+seconds;
    }

    timeEl.setAtribute("text",{
        value:minutes+":"+seconds,
    });
    duration-=1; }else{
        this.data.gameState="over";
        var cameraRig=document.querySelector("#camera-rig")
        cameraRig.setAttribute("velocity",{x:0,y:0,z:0})
        var over=document.querySelector("#over");
        over.setAttribute("visible",true)
        var carspeed = document.querySelector("#speed")
        carspeed.setAttribute("text",{value:"0"});
    }
    
        },100)
    },
})