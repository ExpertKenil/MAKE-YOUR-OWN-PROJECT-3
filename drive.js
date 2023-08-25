AFRAME.registerComponent("game",{
    schema:{
        gamestate:{type:"string",default:"play"},
    },

    init:function(){
        var duration=300;
        var timerEl=document.querySelector("#timer");
        this.startTimer(duration,timerEl);
    },

    startTimer:function(duration,timerEl){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration>=0){
                this.data.gamestate="play";
                minutes=parseInt(duration/60)
                seconds=parseInt(duratiion%60)
                if(minutes<10){
                    minutes="0"+minutes;
                
                } 

                if(seconds<10){
                    seconds="0"+seconds;
                }
                timerEl.setAttribute("text",{
                    value:minutes+":"+seconds
                });
                duration-=1
            }
            else{
                this.data.gamestate="over";
                var cameraRig=document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity",{x:0,y:0,z:0})
                var over=document.querySelector("#over");
                over.setAttribute("visible",true)
                var carspeed=document.querySelector("#speed")
                carspeed.setAttribute("text",{value:"0"});
            }
        },100)
    },
})