$( function() { $("#eic_").click( function(){
       $(this).hide( "slow"); 
    })
    $("img").click( function() {
        var thumbnail = $(this).attr("src"),
            largeImage = thumbnail.replace("thumb_","")
        $("#ei_").attr("src", largeImage);
        $("#eic_").css("height","100%").show("fast");
    });
})