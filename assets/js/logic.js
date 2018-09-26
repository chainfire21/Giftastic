$(document).ready(function () {

    $('.fixed-action-btn').floatingActionButton();

    $("body").on("click", ".gifButton", function (e) {
        let queryURL = `https://api.giphy.com/v1/gifs/search?q=${$(this).text()}&api_key=EQQpWAWmSCs1ZQB5CW7mD0dV9HCPnuYh&limit=12&rating=g`;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            for (let i = 0; i < response.data.length; i += 3) {
                let c1 = $("<img>").attr({ "data-state": "still", "data-moving": response.data[i].images.fixed_height.url, "data-still": response.data[i].images.fixed_height_still.url, src: response.data[i].images.fixed_height_still.url, style: `height:${response.data[i].images.fixed_height_still.height}px;`, class: "gifStill col m4 s12" });
                let c2 = $("<img>").attr({ "data-state": "still", "data-moving": response.data[i + 1].images.fixed_height.url, "data-still": response.data[i + 1].images.fixed_height_still.url, src: response.data[i + 1].images.fixed_height_still.url, style: `height:${response.data[i + 1].images.fixed_height_still.height}px;`, class: "gifStill col m4 s12" });
                let c3 = $("<img>").attr({ "data-state": "still", "data-moving": response.data[i + 2].images.fixed_height.url, "data-still": response.data[i + 2].images.fixed_height_still.url, src: response.data[i + 2].images.fixed_height_still.url, style: `height:${response.data[i + 2].images.fixed_height_still.height}px;`, class: "gifStill col m4 s12" });
                $("#gifSpace").prepend($("<div>").addClass("row").append(c1, c2, c3));
            }
        });
    });

    $("form").submit(function (e) {
        e.preventDefault();
        let i = 0;
        $("#addBtns").prepend($("<li>").html($("<a>").addClass("waves-effect waves-light btn gifButton").text($("#search").val().trim())));
        $(".gifButton").each(function () {
            i++;
            if (i > 8) {
                this.remove();
            }
        });

    });

    $("body").on("click", ".gifStill", function (e) {
        setTimeout(toggleGif.bind(this), 100);
    });
    $("#clearAll").on("click", function (e) {
        $("#gifSpace").empty();
    });

    $("#playAll").on("click", function (e) {
        $.each($(".gifStill"), function () {
            setTimeout(toggleGif.bind(this), 100);
        });
    });

    var toggleGif = function () {
        if ($(this).attr("data-state") === "still") {
            $(this).attr("src", $(this).attr("data-moving"));
            $(this).attr("data-state", "moving");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    }


});