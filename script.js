function Insurance(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var power = document.getElementById("power").value;
    var countries = document.getElementById("countries").value;
    //var austria = document.getElementById("austria").selected;
    //var hungary = document.getElementById("hungary").selected;
    //var greece = document.getElementById("greece").selected;
        if ( "austria" == countries){
        var x = Math.floor((power * 100)/ number + 50);

        document.getElementById("result").innerHTML = name + " , your insurance costs " + x +" €";}
        if ( "hungary" == countries){
            var y = Math.floor((power * 120)/ number + 100);
        document.getElementById("result").innerHTML = name + " , your insurance costs " + y +" €";
}
         if ( "greece" == countries){
        var z = Math.floor((power * 150 / number) + 3 + 50);

         document.getElementById("result").innerHTML = name + " , your insurance costs " + z +" €";}
    }