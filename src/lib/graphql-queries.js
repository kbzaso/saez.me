import { gql } from 'graphql-request';

export const homeQuery = gql`
	query MyAssets {
		assets {
			fileName
			url
		}
	}
`;

export const developmentQuery = gql`
	query MyDevelopmentProjects {
		projects(where: { tags: "Development" }) {
			id
			name
			slug
			content {
				html
			}
			tags
			image {
				url
			}
			date
			extract
		}
	}
`;

export const designQuery = gql`
	query MyDesignProjects {
		projects(where: { tags: "Graphic Design" }) {
			id
			name
			slug
			content {
				html
			}
			tags
			image {
				url
			}
			date
			extract
		}
	}
`;

export const audiovisualQuery = gql`
	query MyAudiovisualProjects {
		projects(where: { tags: "Audiovisual" }) {
			id
			name
			slug
			content {
				html
			}
			tags
			image {
				url
			}
			date
			extract
		}
	}
`;

export const slugQuery = gql`
	query MyProject($slug: String!) {
		projects(where: { slug: $slug }) {
			id
			name
			slug
			content {
				html
			}
			tags
			image {
				url
			}
			date
			extract
			video
		}
	}
`;

export const pagesQuery = gql`
	query MyPages {
		pages {
			title
			slug
		}
	}
`;

export const pagesSlugQuery = gql`
	query MyPages($slug: String!) {
		pages(where: { slug: $slug }) {
			title
			content {
				html
			}
			slug
		}
	}
`;
