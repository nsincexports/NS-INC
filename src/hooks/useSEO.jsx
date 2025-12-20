export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/ogImage.webp",
  ogType = "website",
  siteName = "Ns Inc",
}) {
  if (title) {
    document.title = title;
  }

  if (description) {
    let tag = document.querySelector("meta[name='description']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }

  if (keywords) {
    let tag = document.querySelector("meta[name='keywords']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "keywords";
      document.head.appendChild(tag);
    }
    tag.content = keywords;
  }

  if (canonical) {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `https://nsinc.co.in${canonical}`;
  }

  if (title) {
    let tag = document.querySelector("meta[property='og:title']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      document.head.appendChild(tag);
    }
    tag.content = title;
  }

  if (description) {
    let tag = document.querySelector("meta[property='og:description']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      document.head.appendChild(tag);
    }
    tag.content = description;
  }

  if (ogImage) {
    let tag = document.querySelector("meta[property='og:image']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      document.head.appendChild(tag);
    }
    tag.content = `https://nsinc.co.in/${ogImage}`;
  }

  if (ogType) {
    let tag = document.querySelector("meta[property='og:type']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:type");
      document.head.appendChild(tag);
    }
    tag.content = ogType;
  }

  if (siteName) {
    let tag = document.querySelector("meta[property='og:site_name']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:site_name");
      document.head.appendChild(tag);
    }
    tag.content = siteName;
  }
}
