export default defineAppConfig({
  title: 'Tuah',
  email: '',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'A link shortener based on sink.',
  image: 'https://tuah.link/embed.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
