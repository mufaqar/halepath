// lib/seo/buildSeo.ts
export async function buildSeo(data: any, slug: string) {
  if (!data?.seo) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
    openGraph: {
      images: data.seo.openGraph?.image?.secureUrl
        ? [data.seo.openGraph.image.secureUrl]
        : [],
    },
  };
}