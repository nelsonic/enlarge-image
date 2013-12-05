$( function() { 
    $("#enlargeImageContainer").click( function(){ $(this).hide( "slow"); })
    $("img").click( function() {
        var thumbnail = $(this).attr("src"),
            largeImage = thumbnail.replace("thumb_","")
        $("#enlargeImage").attr("src", largeImage);
        $("#enlargeImageContainer").css("height","100%").show("fast");
    });
})