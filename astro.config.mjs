import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'yaio小说',
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: 'English',
        },
        // Simplified Chinese docs in `src/content/docs/zh/`
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        ja: {
          label: '日本語',
          lang: 'ja'
        },
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Father mating',
          translations: {
            zh: '亲父配种',
            ja: '父親の交配',
          },
          items: [
            // Each item here is one entry in the navigation menu.
            { 
              label: 'fat cock', 
              link: '/breeding-father/fat-cock',
              translations: {
                zh: '肥公鸡',
                ja: 'ふとくちんぽ',
              }, 
            },
            {
              label: 'father-son',
              link: '/breeding-father/father-son',
              translations: {
                zh: '父子体检',
                ja: '父子体检',
              },
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
