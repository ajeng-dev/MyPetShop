let loggedInUser = JSON.parse(localStorage.getItem('auth')) || null
if (loggedInUser) {
    $('.sign-in').html(`
        <a href="#" class="btn">${loggedInUser.name}</a>
        <a class="logout-btn">Logout</a>
    `)
}

$('.logout-btn').click(function() {
    alert('Logout successfully')
    localStorage.removeItem('auth')
    location.reload()
})