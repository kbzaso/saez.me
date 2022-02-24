import { gql } from 'graphql-request';

export const homeQuery = gql`
	query Home {
		homes {
			description
			title
			profile {
				url
			}
			logo {
				url
			}
		}
	}
`;

export const projectsQuery = gql`
	query MyProjects {
		projects {
			id
			name
			slug
			description
			tags
			image {
				url
			}
			date
			extract
		}
	}
`;
