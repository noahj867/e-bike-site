import {defineCliConfig} from 'sanity/cli'
// import imageUrlBuilder from 'sanity/image_url'

export default defineCliConfig({
  api: {
    projectId: '8i5sgkq6',
    dataset: 'production',
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  }
})

// const builder = imageUrlBuilder(defineCliConfig);

// export const urlFor = (source => builder.image(source));