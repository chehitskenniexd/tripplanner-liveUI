

// ensures that the document is ready
$(document).ready(function () {
    var hotelChoices = $('#hotel-choices');
    var restaurantChoices = $('#restaurant-choices');
    var activityChoices = $('#activity-choices');

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



}) // end document ready