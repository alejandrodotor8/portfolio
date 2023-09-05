import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

interface IProps {
	text: Document;
}

export const RichText = ({ text }: IProps) => {
	return documentToReactComponents(text);
};
