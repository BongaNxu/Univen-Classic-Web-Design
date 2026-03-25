
export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
}

const BASE_URL = 'https://www.univen.ac.za/wp-json/wp/v2';

export async function fetchPages(search?: string): Promise<WPPage[]> {
  const url = new URL(`${BASE_URL}/pages`);
  url.searchParams.append('per_page', '10');
  if (search) {
    url.searchParams.append('search', search);
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function fetchPosts(search?: string): Promise<any[]> {
  const url = new URL(`${BASE_URL}/posts`);
  url.searchParams.append('per_page', '5');
  if (search) {
    url.searchParams.append('search', search);
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
