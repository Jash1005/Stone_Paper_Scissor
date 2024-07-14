const player1 = document.getElementById('player1');
const play = document.querySelector('.button');

play.addEventListener('click', () => {
    const player1_name = player1.value;

    // Store player names in localStorage
    localStorage.setItem('player1_name', player1_name);
    // Redirect to the game page
    window.location.href = 'file:///E:/placement/Project/stone%20paper%20scissor/friend%20vs%20friend/game_page/game_friends.html';

});
