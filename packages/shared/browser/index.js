import Inquiry from '@base-cms/marko-web-inquiry/browser';
import jQuery from '@base-cms/marko-web/browser/jquery-full';

import Inquiry from '@base-cms/marko-web-inquiry/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';

const CompanyProfileWebsiteLink = () => import(/* webpackChunkName: "company-profile-website-link" */ './website-link.vue');
const CompanyProfileSocialLink = () => import(/* webpackChunkName: "company-profile-social-link" */ './social-link.vue');
const JumpModal = () => import(/* webpackChunkName: "jump-modal" */ './jump-modal.vue');

window.jQuery = jQuery;
window.$ = jQuery;

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  Inquiry(Browser);

  Browser.register('CompanyProfileWebsiteLink', CompanyProfileWebsiteLink);
  Browser.register('CompanyProfileSocialLink', CompanyProfileSocialLink);
};
