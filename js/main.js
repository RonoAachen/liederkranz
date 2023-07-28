var isLoggedIn = false;

function show_member_nav() {
    if (isLoggedIn === true) {
        $('#navmember').show();
    }
    else {
        $('#navmember').hide();
    }
}

$(document).ready( function() {

     show_member_nav();
});

function login() {
    isLoggedIn = true;
    show_member_nav();

    // window.location = "html/signin.html"
}