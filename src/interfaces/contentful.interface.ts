import type { Document } from '@contentful/rich-text-types';

export interface IPrincipalResponse {
	data: {
		principalCollection: {
			items: IPrincipal[];
		};
	};
}

export interface IPrincipal {
	title: string;
	subTitle: string;
	description: string;
	image: image;
	action: string;
	actionLink: string;
	sectionsCollection: { items: ISection[] };
}

export interface ISection {
	title: string;
	image: image;
	description: { json: Document };
	action: string;
	actionLink: string;
	contentsCollection: { items: IContent[] };
}

export interface IContent {
	title: string;
	subTitle: string;
	description: { json: Document };
	subDescription: string;
	image: image;
	action: string;
	actionLink: string;
	subAction: string;
	subActionLink: string;
	extra: any;
}

interface image {
	url: string;
}
