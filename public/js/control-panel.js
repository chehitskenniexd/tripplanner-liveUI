

// ensures that the document is ready
$(document).ready(function () {
    var hotelChoices = $('#hotel-choices');
    var restaurantChoices = $('#restaurant-choices');
    var activityChoices = $('#activity-choices');
    var numDays = 1;
    var dailyData = {};

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

        if ($(`.${replacedName}`).length < 1 && numDays > 1) {
            // Find the data for the current day's hotels and append
            var thisDay = `day${$('.current-day').text()}`;

            checkOrCreateData(dailyData, thisDay, 'hotels');

            var toAppend = `<div class="${replacedName} itinerary-item">\n
                <span class="title">${hotelName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`;

            dailyData[thisDay]['hotels'] = dailyData[thisDay]['hotels'].concat(toAppend);
            $('.hotel-list').append(toAppend);
            console.log(dailyData);
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

        if ($(`.${replacedName}`).length < 1 && numDays > 1) {
            // Find the data for the current day's hotels and append
            var thisDay = `day${$('.current-day').text()}`;

            checkOrCreateData(dailyData, thisDay, 'restaurants');

            var toAppend = `<div class="${replacedName} itinerary-item">\n
                <span class="title">${restaurantName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`

            dailyData[thisDay]['restaurants'] = dailyData[thisDay]['restaurants'].concat(toAppend);
            $('.restaurant-list').append(toAppend);
            console.log(dailyData);
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

        if ($(`.${replacedName}`).length < 1 && numDays > 1) {
            // Find the data for the current day's hotels and append
            var thisDay = `day${$('.current-day').text()}`;

            checkOrCreateData(dailyData, thisDay, 'activities');

            var toAppend = `<div class="${replacedName} itinerary-item">\n
                <span class="title">${activityName}</span>\n
                <button class="rm-${replacedName}-btn btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`

            dailyData[thisDay]['activities'] = dailyData[thisDay]['activities'].concat(toAppend);
            $('.activity-list').append(toAppend)
            console.log(dailyData);
        }

        // add an event handler for click for x
        $(`.rm-${replacedName}-btn`).click(function () {
            $(`.${replacedName}`).remove();
        })
    })

    // add day button
    $('#day-add').click(function () {
        if ($(".day-btn").hasClass("current-day")) {
            $(".day-btn").removeClass("current-day")
            $("#selected-day").remove()
        }

        $(`<button class="btn btn-circle day-btn current-day" id="day-${numDays}">${numDays}</button>\n`).insertBefore('#day-add')
        $(`<span id = "selected-day">Day ${numDays}</span>`).insertBefore("#day-rm")

        // add event to the day button
        $(`#day-${numDays}`).click(function () {
            if ($(".day-btn").hasClass("current-day")) {
                $(".day-btn").removeClass("current-day")
                $("#selected-day").remove()
            }

            $(this).addClass("current-day");
            $(`<span id = "selected-day">Day ${$(this).text()}</span>`).insertBefore("#day-rm")

            // Remove all existing li in the Day panel
            $('.hotel-list').children().remove();
            $('.restaurant-list').children().remove();
            $('.activity-list').children().remove();

            // Append all existing data for this day
            var thisDay = `day${$('.current-day').text()}`;
            if (dailyData[thisDay]) {
                if (dailyData[thisDay].hotels) {
                    $('.hotel-list').append(dailyData[thisDay].hotels);
                }
                if (dailyData[thisDay].restaurants) {
                    $('.restaurant-list').append(dailyData[thisDay].restaurants);
                }
                if (dailyData[thisDay].activities) {
                    $('.activity-list').append(dailyData[thisDay].activities);
                }
            }
        })

        // increment the number of days
        numDays++
    })







}) // end document ready

// helper function for dailyData
function checkOrCreateData(dailyData, thisDay, property) {
    if (!dailyData[thisDay]) {
        dailyData[thisDay] = {};
    }
    if (!dailyData[thisDay][property]) {
        dailyData[thisDay][property] = '';
    }
}