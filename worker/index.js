export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if ((request.method === 'GET' || request.method === 'HEAD') && url.pathname === '/') {
      const languages = (request.headers.get('Accept-Language') || '')
        .split(',')
        .map((entry) => {
          const [language, ...parameters] = entry.trim().toLowerCase().split(';');
          const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
          const weight = quality === undefined ? 1 : Number(quality.trim().slice(2));
          return { language: language.trim(), weight };
        })
        .filter(({ weight }) => Number.isFinite(weight) && weight > 0 && weight <= 1)
        .sort((left, right) => right.weight - left.weight);
      const preferred = languages.find(({ language }) => /^(es|en)(-|$)/.test(language));
      const language = preferred?.language.startsWith('es') ? 'es' : 'en';
      return new Response(null, {
        status: 302,
        headers: {
          Location: `/${language}/`,
          Vary: 'Accept-Language',
          'Cache-Control': 'no-store',
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
