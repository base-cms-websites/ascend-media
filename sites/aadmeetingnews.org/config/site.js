const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: 'All rights reserved. DermWorld Meeting News Central is a publication of the American Academy of Dermatology.',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AADmember', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/aadmember/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/AADmember', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5R9XFFX',
  },
  twitterFeed: {
    href: 'https://twitter.com/AADmember?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    tagline: 'Tweets by AADMember',
  },
  gcse: {
    id: '32fecd94ba5f4160a',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aad/AAD_Logo_Header.png?h=50',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AAD <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aad/AAD_Logo_Header.pngh=50',
    bgColor: '#ffffff',
  },
};
