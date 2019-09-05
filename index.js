function Calcular(){
    var valores = document.getElementsByClassName("valor");
    var valortotal = 0;
    [].forEach.call(valores, function(valor){
        valortotal += parseFloat(String(valor.innerHTML).replace(",","."));
    });

    document.getElementById("total").innerHTML = valortotal;

};



$("#playlist").on('click', 'a[id^=play-]', function(){
    var url = $(this).attr('id').split('-')[1];
    var youtube = document.getElementById("youtube");
    youtube.setAttribute("src", url);
});