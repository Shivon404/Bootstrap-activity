const files = {
  'introduction': '1introduction.html',
  'download': '2Download.html',
  'contents': '3Contents.html',
  'browsers_devices': '4Browsers.html',
  'javascript': '5Javascript.html',
  'webpack': '6Webpack.html',
  'parcel': '7Parcel.html',
  'vite': '8Vite.html',
  'accessibility': '9Accessibility.html',
  'rfs': '10RFS.html',
  'rtl': '11RTL.html',
  'contribute': '12Contribute.html',
  'overview': '13overview.html',
  'sass': '14Sass.html',
  'options': '15options.html',
  'color': '16color.html',
  'color_modes': '17modes.html',
  'components': '18components.html',
  'css_variables': '19cssvar.html',
  'optimize': '20optimize.html',
  'breakpoints': '21breakpoint.html',
  'containers': '22containers.html',
  'grid': '23grid.html',
  'columns': '24columns.html',
  'gutters': '25gutters.html',
  'utilities': '26utili.html',
  'zindex': '27zindex.html',
  'css_grid': '28cssgrid.html',
  'reboot': '29reboot.html',
  'typography': '30typography.html',
  'images': '31images.html',
  'tables': '32tables.html',
  'figures': '33figures.html',
  'forms_overview': '34overview.html',
  'form_control': '35formcontrol.html',
  'select': '36select.html',
  'checks_radios': '37checks.html',
  'range': '38range.html',
  'input_group': '39inputgroup.html',
  'floating_labels': '40floatinglabels.html',
  'form_layout': 'layout.html',
  'validation': '42validation.html',
  'accordion': '43accordion.html',
  'alerts': '44alerts.html',
  'badge': '45badge.html',
  'breadcrumb': '46breadcrumb.html',
  'buttons': '47buttons.html',
  'buttons_group': '48buttonsgroup.html',
  'card': '49card.html',
  'carousel': '50carousel.html',
  'close_button': '51closebutton.html',
  'collapse': '52collapse.html',
  'dropdowns': '53dropdowns.html',
  'list_group': '54listgroup.html',
  'modal': '55modal.html',
  'navbar': '56navbar.html',
  'navs_tabs': '57navstabs.html',
  'offcanvas': '58offcanvas.html',
  'pagination': '59pagination.html',
  'placeholders': '60placeholders.html',
  'popovers': '61popovers.html',
  'progress': '62progress.html',
  'scrollspy': '63scrollspy.html',
  'spinners': '64spinners.html',
  'toasts': '65toasts.html',
  'tooltips': '66tooltips.html',
  'clearfix': '67clearfix.html',
  'colorbg': '68colorbg.html',
  'coloredlinks': '69coloredlinks.html',
  'focus': '70focus.html',
  'iconlink': '71iconlink.html',
  'position': '72position.html',
  'ratio': '73ratio.html',
  'stacks': '74stacks.html',
  'stretchedlink': '75stretchedlink.html',
  'texttruncation': '76texttruncation.html',
  'verticalrule': '77verticalrule.html',
  'visuallyhidden': '78visuallyhidden.html',
  'api': '79api.html',
  'background': '80background.html',
  'borders': '81borders.html',
  'colors': '82color.html',
  'display': '83display.html',
  'flex': '84flex.html',
  'float': '85float.html',
  'interactions': '86interactions.html',
  'link': '87link.html',
  'objectfit': '88objectfit.html',
  'opacity': '89opacity.html',
  'overflow': '90overflow.html',
  'position_util': '91position.html',
  'shadows': '92shadows.html',
  'sizing': '93sizing.html',
  'spacing': '94spacing.html',
  'text_util': '95text.html',
  'verticalalign': '96verticalalign.html',
  'visibility': '97visibility.html',
  'zindex_util': '98zindex.html',
  'approach': '99approach.html',
  'icons_extend': '100icons.html',
  'overview_about': '101overview.html',
  'team': '102team.html',
  'brand': '103brand.html',
  'license': '104license.html',
  'translation': '105translation.html',
};


// Iterate over the keys of the object and set up event listeners
Object.keys(files).forEach(function(id) {
  document.getElementById(id).addEventListener('click', function(event) {
    event.preventDefault();
    loadContent(files[id]);
  });
});
