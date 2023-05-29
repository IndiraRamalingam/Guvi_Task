//Getting elements using ID
let text=document.getElementById('btnForNumbers')
let displayMsg=document.getElementById('msgToShow')
let img=document.getElementById('imgBlock')
img.style.visibility="hidden"
setTimeout(function(){
text.innerHTML="10"    
console.log("10")
    setTimeout(function(){
    text.innerHTML="9" 
    console.log("9")
        setTimeout(function(){
        text.innerHTML="8" 
        console.log("8")
            setTimeout(function(){
            text.innerHTML="7"
            console.log("7")
                setTimeout(function(){
                text.innerHTML="6"
                console.log("6")
                    setTimeout(function(){
                    text.innerHTML="5"
                    console.log("5")
                        setTimeout(function(){
                        text.innerHTML="4"
                        console.log("4")
                            setTimeout(function(){
                            text.innerHTML="3"
                            console.log("3")
                                setTimeout(function(){
                                text.innerHTML="2"
                                console.log("2")
                                    setTimeout(function(){
                                    text.innerHTML="1"
                                    console.log("1")                                                                
                                        setTimeout(function(){
                                        text.style.visibility="hidden"
                                        img.style.visibility="visible"
                                        displayMsg.innerHTML="Happy Independence Day !!!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},100)
