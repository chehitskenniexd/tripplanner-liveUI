

// ensures that the document is ready
$(document).ready(function () {

    hotels.forEach(hotel =>
        $('#hotel-choices').append(`<option>${hotel.name}</option>`))
    restaurants.forEach(restaurant =>
        $('#restaurant-choices').append(`<option>${restaurant.name}</option>`)) 
    activities.forEach(activity =>
        $('#activity-choices').append(`<option>${activity.name}</option>`))   

}) // end document ready