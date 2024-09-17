

let curtime=setInterval(() => {
    const date=new Date();
    const localString=date.toLocaleTimeString();
    document.getElementById("con").innerHTML=localString
}, 1000);
