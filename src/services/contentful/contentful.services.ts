import contentfulInstance from './contentful.instance';
import { AxiosResponse } from 'axios';
import { IPrincipalResponse } from '@/interfaces/contentful.interface';

export class ContentfulServices {
	static getPrincipal(id: string): Promise<AxiosResponse<IPrincipalResponse>> {
		return contentfulInstance.post('/', {
			query: queryPrincipal(id),
		});
	}
}

function queryPrincipal(id: string) {
	return `query {
	principalCollection(limit: 1, where: {slug_contains:"${id}"}){
		items{
      title
      subTitle
			description
      sectionsCollection(limit:10){
        items{
          title
          image{
            url
          }
          description{
						json
					}
          action
          actionLink
          contentsCollection(limit:6){
            items{
              title
              subTitle
              description{
								json
							}
              subDescription
              image{
                url
              }
              action
              actionLink
              subAction
              subActionLink
              extra
            }
          }
        }
      }
      image{
        url
      }
      action
      actionLink
    }
	}
}`;
}
