$( function() {
    function displayLarge(src) {
        $("#ei_").attr("src", src);
        $("#eic_").css("height","100%").show("fast");
    }

    $("#eic_").click( function(){
       $(this).hide( "fast"); 
    })

    $("img").click( function() {
        var thumbnail = $(this).attr("src"),
            largeImage = thumbnail.replace("thumb_","")
        displayLarge(largeImage);
    });
})