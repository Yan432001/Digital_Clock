$(function(){
  setInterval(function(){
    let d = new Date();
    hour = d.getHours();
    second = d.getSeconds();
    minute = d.getMinutes();

    if(hour > 12){
      hour = hour % 12;
    }

    $(".secondHand").css("transform",`rotate(${second * 6}deg)`);
    $(".minuteHand").css("transform",`rotate(${minute * 6}deg)`);
    $(".hourHand").css("transform",`rotate(${hour * 30 + minute / 2}deg)`);

    $(".digital-clock").text(`${formatUnit(hour)} : ${formatUnit(minute)} : ${formatUnit(second)}`);

  }, 1000);
});

function formatUnit(unit){
  if(unit / 10 < 1){
    return "0" + unit;
  }else{
    return unit;
  }
}