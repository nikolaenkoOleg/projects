const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');


function apiSearch(event) {
	event.preventDefault();
	const searchText = document.querySelector('.form-control').value,
		server = 'https://api.themoviedb.org/3/search/multi?api_key=1ad81ed40a84de9ac045f4a9b5353cff&query=' + searchText;
	requestApi('GET', server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(method, url) {
	const request = new XMLHttpRequest();
	request.open(method, url);
	request.send();

	request.addEventListener('readystatechange', () => {
		if (request.readyState !== 4) return;
		if (request.status !== 200) {
			console.log('error: ' + request.status);
			return;
		}

		const output = JSON.parse(request.responseText);

		let inner = '';
		output.results.forEach(function (item) {
			let nameItem = item.name || item.title;
			let dateItem = item.release_date;
			inner += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">${nameItem}<br><b>Дата выхода:${dateItem}</b></div>`;

		});
		movie.innerHTML = inner;
	});
}