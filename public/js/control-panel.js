

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

            dailyData[thisDay]['hotels'].push(toAppend);
            $('.hotel-list').append(toAppend);
            console.log(dailyData);
        }

        // add an event handler for click for x
        createRemoveEventHandler(replacedName, dailyData, 'hotels');
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

            dailyData[thisDay]['restaurants'].push(toAppend);
            $('.restaurant-list').append(toAppend);
            console.log(dailyData);
        }

        // add an event handler for click for x
        createRemoveEventHandler(replacedName, dailyData, 'restaurants');

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

            dailyData[thisDay]['activities'].push(toAppend);
            $('.activity-list').append(toAppend)
            console.log(dailyData);
        }

        // add an event handler for click for x
        createRemoveEventHandler(replacedName, dailyData, 'activities');
    })

    // add day button
    $('#day-add').click(function () {
        if ($(".day-btn").hasClass("current-day")) {
            $(".day-btn").removeClass("current-day")
            $("#selected-day").remove()
        }

        // Remove all existing li in the Day panel
        $('.hotel-list').children().remove();
        $('.restaurant-list').children().remove();
        $('.activity-list').children().remove();

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
                    dailyData[thisDay].hotels.forEach((hotel) => {
                        $('.hotel-list').append(hotel);
                        var replacedName = hotel.split(' ')[1].slice(7);
                        createRemoveEventHandler(replacedName, dailyData, 'hotels');
                    })
                }
                if (dailyData[thisDay].restaurants) {
                    dailyData[thisDay].restaurants.forEach((restaurant) => {
                        $('.restaurant-list').append(restaurant);
                        var replacedName = restaurant.split(' ')[1].slice(7);
                        console.log(replacedName);
                        createRemoveEventHandler(replacedName, dailyData, 'restaurants');
                    })
                }
                if (dailyData[thisDay].activities) {
                    dailyData[thisDay].activities.forEach((activity) => {
                        $('.activity-list').append(activity);
                        var replacedName = activity.split(' ')[1].slice(7);
                        console.log(replacedName);
                        createRemoveEventHandler(replacedName, dailyData, 'activities');
                    })
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
        dailyData[thisDay][property] = [];
    }
}

function createRemoveEventHandler(replacedName, dailyData, property) {
    $(`.rm-${replacedName}-btn`).click(function () {
        console.log(dailyData);
        var thisDay = `day${$('.current-day').text()}`;
        var array = dailyData[thisDay][property];
        for (let i = 0; i < array.length; ++i) {
            console.log(replacedName);
            console.log(array[i]);
            console.log(array[i].includes(replacedName));
            if (array[i].includes(replacedName)) {
                dailyData[thisDay][property] = array.slice(0, i).concat(array.slice(i + 1, array.length));
                break;
            }
        }
        $(`.${replacedName}`).remove();
        console.log(dailyData);
    })
}