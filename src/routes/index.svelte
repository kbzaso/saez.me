<script>
	import Hero from '../components/Hero.svelte';
	import SvelteSeo from 'svelte-seo';

	const SEO_CARD_IMAGE =
		'https://media.graphcms.com/output=format:webp/resize=height:800,fit:max/tZGYD890SemYXcQRwmIg';
</script>

<head>
	<title
		>Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer</title>
</head>
<SvelteSeo
	twitter={{
		site: '@kbzaso',
		title: 'Welcome to my digital mind space',
		description:
			'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
		image: SEO_CARD_IMAGE,
		imageAlt: 'SEO card',
	}}
	openGraph={{
		title: 'Welcome to my digital mind space',
		description:
			'Alejandro Sáez | Frontend Dev, UX/UI and Multimedia Designer',
		url: 'https://www.saez.me',
		type: 'website',
		images: [
			{
				url: SEO_CARD_IMAGE,
				width: 850,
				height: 650,
				alt: 'SEO card',
			},
		],
	}} />
<Hero />
