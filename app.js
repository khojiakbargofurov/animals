async function fetchData() {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
  const cards = document.querySelector('.cards');
  try {
      let dataurl = await fetch(url);
      let data = await dataurl.json();
      console.log(data);

      data.forEach(element => {
          console.log(element);
          const card = document.createElement('div');
          card.innerHTML = `
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src="${element.url}" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cat Image</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here's a cute cat image!</p>
                  </div>
              </div>
          `;
          cards.appendChild(card);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

fetchData();
