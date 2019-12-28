window.console && console.log('First attempt.');
$('.article__content').removeClass('article__content--locked')
$('.article__premium-content').removeClass('hidden')
$('.paywall').remove()


setTimeout(function() {
	window.console && console.log('Second attempt.');
	$('.article__content').removeClass('article__content--locked')
	$('.article__premium-content').removeClass('hidden')
	$('.paywall').remove()
}, 10);

setTimeout(function() {
	window.console && console.log('Third attempt.');
	$('.article__content').removeClass('article__content--locked')
	$('.article__premium-content').removeClass('hidden')
	$('.paywall').remove()
}, 100);

setTimeout(function() {
	window.console && console.log('Fourth attempt.');
	$('.article__content').removeClass('article__content--locked')
	$('.article__premium-content').removeClass('hidden')
	$('.paywall').remove()
}, 1000);

setTimeout(function() {
	window.console && console.log('Fifth attempt.');
	$('.article__content').removeClass('article__content--locked')
	$('.article__premium-content').removeClass('hidden')
	$('.paywall').remove()
}, 5000);