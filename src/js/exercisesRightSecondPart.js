const refs = {
  cards: document.querySelector('.exercises-cards'),
};

fetchCards('waist').then(data => {
  console.log(data.results);
  refs.cards.insertAdjacentHTML('beforeend', createMarkupCards(data.results));
});

function fetchCards(category) {
  return fetch(
    `https://your-energy.b.goit.study/api/exercises?bodypart=${category}&page=1&limit=10`
  ).then(response => {
    return response.json();
  });
}
function createMarkupCards(arr) {
  return arr
    .map(
      ({ burnedCalories, name, target, rating, bodyPart, time }) => `
      <div class="card">
      <div class="first-part">
      <div class="badge">
      <div class="badge-text">WORKOUT</div>
      </div>
    <div><p class="rating">${rating}</p>
      <svg class="icon-star" width="18" height="18">
            <use href="/public/icon.svg#icon-star"></use>
          </div>
          <button class="start-btn" type="submit">
              Start
              <svg class="start-btn-icon" width="16" height="16">
                <use href="/public/icon.svg#icon-arrow"></use>
              </svg>
            </button>
            </div>
            <div class="second-part">
           <svg class="run-man-icon" width="24" height="24">
                <use href="/public/icon.svg#icon-running-stick-figure-in-cyrcle"></use>
              </svg> 
              <p>${name}</p>
              </div>
              <div class="third-part">
              <p>Burned calories: ${burnedCalories} / ${time}</p>
              <p>Body part: ${bodyPart}</p>
              <p>Target: ${target}</p>
              </div>
</div>
    `
    )
    .join('');
}
