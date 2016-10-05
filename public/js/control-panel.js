

// ensures that the document is ready
$(document).ready(function () {
    var hotelChoices = $('#hotel-choices');
    var restaurantChoices = $('#restaurant-choices');
    var activityChoices = $('#activity-choices');
    var numDays = 1;

    //list options/select dropdown
    hotels.forEach(hotel =>
        hotelChoices.append(`<option>${hotel.name}</option>`))
    restaurants.forEach(restaurant =>
        restaurantChoices.append(`<option>${restaurant.name}</option>`))
    activities.forEach(activity =>
        activityChoices.append(`<option>${activity.name}</option>`))


    //add button hotels

    $('.add-hotel').click(function () {
        var hotelName = hotelChoices.val()
        var replacedName = hotelName.replace(/\W/g, '');

        if ($(`.${replacedName}`).length < 1) {
            $('.hotel-list').append(`<div class="${replacedName} itinerary-item">\n
                <span class="title">${hotelName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)
        }

        // add an event handler for click for x
        $(`.rm-${replacedName}-btn`).click(function () {
            $(`.${replacedName}`).remove();
        })
    })

    //add button restuarant

    $('.add-restaurant').click(function () {
        var restaurantName = restaurantChoices.val();
        var replacedName = restaurantName.replace(/\W/g, '');

        if ($(`.${replacedName}`).length < 1) {
            $('.restaurant-list').append(`<div class="${replacedName} itinerary-item">\n
                <span class="title">${restaurantName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)
        }

        // add an event handler for click for x
        $(`.rm-${replacedName}-btn`).click(function () {
            $(`.${replacedName}`).remove();
        })
    })

    //add button activity

    $('.add-activity').click(function () {
        var activityName = activityChoices.val();
        var replacedName = activityName.replace(/\W/g, '');

        if ($(`.${replacedName}`).length < 1) {
            $('.activity-list').append(`<div class="${replacedName} itinerary-item">\n
                <span class="title">${activityName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)
        }

        // add an event handler for click for x
        $(`.rm-${replacedName}-btn`).click(function () {
            $(`.${replacedName}`).remove();
        })
    })

    // add day button
    $('#day-add').click(function(){
        if($(".day-btn").hasClass("current-day")){
            $(".day-btn").removeClass("current-day")
            $("#selected-day").remove()
        }

        $(`<button class="btn btn-circle day-btn current-day day-${numDays}">${numDays}</button>\n`).insertBefore('#day-add')
        $(`<span id = "selected-day">Day ${numDays}</span>`).insertBefore("#day-rm")
        numDays++
    })







}) // end document ready