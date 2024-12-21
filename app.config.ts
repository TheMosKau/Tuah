export default defineAppConfig({
  title: 'Tuah',
  email: 'mail@tuah.link',
  github: 'https://github.com/ccbikai/sink',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'Link shortener based on Sink..',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
