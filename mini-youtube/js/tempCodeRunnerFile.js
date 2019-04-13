function sliceTitle() {
	document.querySelectorAll('.videos__item-descr').forEach(item => {
		item.textContent.trim();

		if (item.textContent.length < 100){
			return;
		} else {
			const str = item.textContent.slice(0, 101) + "...";
			item.textContent = str;
		}
	});
}
sliceTitle();