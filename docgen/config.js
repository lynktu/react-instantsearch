var algoliaComponents = require('algolia-frontend-components');
var fs = require('fs');

import {rootPath} from './path';

const prod = process.env.NODE_ENV === 'production';

var content = JSON.parse(fs.readFileSync('./docgen/src/data/communityHeader.json', 'utf8').toString());
var headerAlgoliaLogo = fs.readFileSync('./docgen/assets/img/algolia-logo-whitebg.svg', 'utf8').toString();
var headerCommunityLogo = fs.readFileSync('./docgen/assets/img/algolia-community-dark.svg', 'utf8').toString();
var header = algoliaComponents.communityHeader(content, {
	algoliaLogo: headerAlgoliaLogo,
	communityLogo: headerCommunityLogo
});

export default {
  docsDist:  rootPath('docs'),
  publicPath: prod ? '/react-instantsearch/' : '/',
  header: header
};
