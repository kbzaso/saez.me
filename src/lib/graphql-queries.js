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
		projects(where: { worktype: Development }) {
			id
			name
			slug
			image {
				url
			}
			date
			extract
			category
		}
	}
`;

export const designQuery = gql`
	query MyDesignProjects {
		projects(where: { worktype: Design }) {
			id
			name
			slug
			image {
				url
			}
			date
			extract
			category
		}
	}
`;

export const audiovisualQuery = gql`
	query MyAudiovisualProjects {
		projects(where: { worktype: Audiovisual }) {
			id
			name
			slug
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
		project(where: { slug: $slug }) {
			id
			name
			slug
			timeline
			technologies
			myrole
			deliverables
			content {
				html
			}
			technologies
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
		page(where: { slug: $slug }) {
			title
			content {
				html
			}
			slug
		}
	}
`;
