
setInterval( ()=>{
  if ((window.location.hostname != "localhost" ) && (window.location.hostname != "manesec.github.io") ){
      window.location.href = "https://manesec.github.io" + window.location.pathname;
  }
}, 1000);


