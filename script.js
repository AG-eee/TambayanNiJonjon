// navbar
$(window).scroll(function () {
	$(this).scrollTop() > 0
		? $(".navbar").addClass("bg-body-tertiary")
		: $(".navbar").removeClass("bg-body-tertiary");
});

// filtering food items
let $filterBtn = $(".filter-btn");
let $item = $(".food-item");

$filterBtn.click(function () {
	$filterBtn.removeClass("active");
	$(this).addClass("active");

	let dataFilter = $(this).attr("data-filter");

	$item.removeClass("active").addClass("hide");

	$item.each(function () {
		let categories = $(this).data("categories").split(" ");
		if (dataFilter === "all" || categories.includes(dataFilter)) {
			$(this).removeClass("hide").addClass("active");
		}
	});
});
