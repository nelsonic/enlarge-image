$( function() { 
    
    $("img").click( function() {
        var thumbnail = $(this).attr("src"),
            largeImage = thumbnail.replace("thumb_","full_")
        console.log("clicked on ", largeImage);
        $("#enlargeImage").attr("src", largeImage);
        $("#enlargeImageContainer").css("height","100%").show();
    });
    $("#enlargeImageContainer").click( function(){ $(this).hide(); })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { $("#enlargeImageContainer").hide(); }   // esc key press
    });
});