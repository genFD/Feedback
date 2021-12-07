const ratingContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';
ratingContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});
sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = ` <i class="fas fa-heart"></i>
  <strong>Thank you for your<strong/>
  <br>
  <strong>Feedback<strong/>
  <p>We'll use your feedback to imporove our customer support<p/>
  `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
