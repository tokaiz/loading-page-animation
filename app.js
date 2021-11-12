const header = document.querySelector('.slide');
const bar = document.querySelector('nav');
const banner = document.querySelector('#banner');
const bannerText = document.querySelector('.container');
const time = new TimelineMax();


//banner
time.fromTo(
	banner, 0.7, 
	{height: '0%'}, 
	{height: '60%', ease: Power2.easeInOut}
).fromTo(
	banner, 0.7,
	{width: '5%'},
	{width: '100%', ease: Power2.easeInOut}
);

//text on the banner
time.fromTo(
	bannerText, 0.7,
	{opacity: '0'},
	{opacity: '1', ease: Power2.easeInOut}
)

//background
time.fromTo(
	header, 0.7,
	{x: '-100%'},
	{x: '0%', ease: Power2.easeInOut}
);

//navbar
time.fromTo(
	bar, 0.7,
	{x: '150%'},
	{x: '0%', ease: Power2.easeInOut}
);