import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	// 获取所有博客文章
	const posts = await getCollection('blog');
	// 使用 Astro 的 RSS 生成器，生成 RSS
	return rss({
		// RSS 的标题
		title: SITE_TITLE,
		// RSS 的描述
		description: SITE_DESCRIPTION,
		// RSS 的站点 URL
		site: context.site,
		// RSS 的文章项
		items: posts.map((post) => ({
			// 将每篇文章的数据作为 RSS 的 item
			...post.data,
			// 设置每篇文章的 URL
			link: `/blog/${post.id}/`,
		})),
	});
}
