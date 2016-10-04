

// ensures that the document is ready
$(document).ready(function () {
	var hotelChoices = $('#hotel-choices');
	var restaurantChoices = $('#restaurant-choices');
	var activityChoices = $('#activity-choices');


    hotels.forEach(hotel =>
        hotelChoices.append(`<option>${hotel.name}</option>`))
    restaurants.forEach(restaurant =>
        restaurantChoices.append(`<option>${restaurant.name}</option>`)) 
    activities.forEach(activity =>
        activityChoices.append(`<option>${activity.name}</option>`))  


    $('.add-hotel').click(function(){
    	var hotelName = hotelChoices.val();

    	$('.hotel-list').append(`<div class="itinerary-item">\n
                <span class="title">${hotelName}</span>\n
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)
    })

      $('.add-restaurant').click(function(){
    	var restaurantName = restaurantChoices.val();

    	$('.restaurant-list').append(`<div class="itinerary-item">\n
                <span class="title">${restaurantName}</span>\n
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)
    })


  $('.add-activity').click(function(){
    	var activityName = activityChoices.val();

    	$('.activity-list').append(`<div class="itinerary-item">\n
                <span class="title">${activityName}</span>\n
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>\n
              </div>\n`)

    	// note: add a click handler for the "x" button
    })



}) // end document ready