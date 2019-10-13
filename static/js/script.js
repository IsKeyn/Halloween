halloween = {

	init : () => {

		halloween.create_menu();
	},

	create_menu : () => {

		let menu_width = $('header nav').width(),
			menu_element = $('header nav span'),
			element_width = (menu_width / menu_element.length);

		menu_element.each(function (index) {

			let element = $(this);

			element.width(index != menu_element.length - 1 ? element_width - 2 : element_width);
		});
	},

	show_popup : (param) => {

		let main_element = $('.popup'),
			overlay_element = $('.overlay');

		if (param)
		{
			let product_element = $(element);

			main_element.find('[name=product-id]').val(product_element.parents('.product-parent').data('id'));

			main_element.show();
			overlay_element.show();
		}
		else
		{
			main_element.hide();
			overlay_element.hide();
		}
	},

	send_order : () => {

	},
};

$(document)
	.on('click', '.js_buy', function () { halloween.show_popup(true) })
	.on('click', '.js_close_popup', function () { halloween.show_popup(false) })
	.on('click', '.js_overlay', function () { halloween.show_popup(false) })
	.on('click', '.js_send', function () { halloween.send_order(); });

$(() => {
	halloween.init();

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
	});
});

