const searchForm = document.querySelector('.js-search-movie'),
    cardMovieTemplate = document.querySelector('.card-movie'),
    resultContainer = document.querySelector('.results-list'),
    paginationContainer = document.querySelector('.pagination-container'),
    movieDescription = document.querySelector('.movie-description'),
    loading = document.querySelector('.loading'),
    overlay = document.querySelector('.overlay');

async function getMovie(params, url = 'http://www.omdbapi.com/', apiKey = 'a259891a') {
    loading.classList.add('show');
    overlay.classList.add('show');
    const resp = await fetch(`${url}?${params}&apikey=${apiKey}`);
    loading.classList.remove('show');
    overlay.classList.remove('show');

    return resp.json();
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const searchParams = {
        s: searchForm.querySelector('.movie-name').value,
        type: searchForm.querySelector('.movie-type').value,
    };

    if (searchParams.s) {
        const resp = await getMovie(new URLSearchParams(searchParams).toString());
        setResults(resp);

       setPagination(resp.totalResults);
    };
}); 

paginationContainer.addEventListener('click', async (e) => {
    paginationContainer.innerHTML = '';
    if (e.target.classList.contains('btn-pagination')) {
       const searchParams = {
        s: searchForm.querySelector('.movie-name').value,
        type: searchForm.querySelector('.movie-type').value,
        page: e.target.getAttribute('page-number'),
    };
    const resp = await getMovie(new URLSearchParams(searchParams).toString());
        console.log(resp);
        setResults(resp);
        setPagination(resp.totalResults, Number(searchParams.page));
    }
});

const setPagination = (totalPage, currentPage = 1) => {
    const countPagination = Math.ceil(totalPage / 10);
    for (let i = 1; i < countPagination; i++) {
        const paginationButton = document.createElement('button');
        paginationButton.classList.add('btn-secondary', 'btn');
        currentPage !== i ? paginationButton.classList.add('btn-pagination') : paginationButton.classList.add('active');
        paginationButton.setAttribute('page-number', i);
        paginationButton.textContent = i;
        paginationContainer.appendChild(paginationButton);
    }
}

const setResults = (data) => {
    resultContainer.innerHTML = '';
    if (data.Search && data.Search.length && data.Response === 'True') {
        data.Search.forEach(element => {
            const clonedCard = cardMovieTemplate.cloneNode(true);
            clonedCard.querySelector('.card-movie__title').textContent = element.Title;
            clonedCard.querySelector('.card-movie__img').innerHTML = `<img src="${element.Poster}" alt="${element.Title}">`;
            clonedCard.querySelector('.card-movie__type').textContent = element.Type;
            clonedCard.querySelector('.card-movie__details').setAttribute('movie-id', element.imdbID);
            resultContainer.appendChild(clonedCard); 
        });
    } else {
        resultContainer.innerHTML = `<h2 class="text-center">${data.Error}</h2>`;
    }
};

resultContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('card-movie__details')) {
        const searchParams = {
           i: e.target.getAttribute('movie-id'),
        };
        const resp = await getMovie(new URLSearchParams(searchParams).toString());
        console.log(resp.Plot);
        movieDescription.querySelector('.modal-body__description').innerHTML = `<p>${resp.Plot}</p>`;
        movieDescription.querySelector('.modal-title').textContent = resp.Title;
    }
});