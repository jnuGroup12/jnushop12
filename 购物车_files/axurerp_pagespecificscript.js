for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u31'] = 'center';
u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if ((GetWidgetText('u12')) == ('方便面')) {

	NewTab($axure.globalVariableProvider.getLinkUrl('购物车.html'), "");

}
else
if ((GetWidgetText('u12')) == ('苹果')) {

	NewTab('#', "");

}
else
if ((GetWidgetText('u12')) == ('饼干')) {

	NewTab('#', "");

}
});
gv_vAlignTable['u29'] = 'center';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('订单详情.html'), "");

}
});
gv_vAlignTable['u21'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('login.html');

}
});
gv_vAlignTable['u6'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('超市.html'), "");

}
});
gv_vAlignTable['u10'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('书店.html'), "");

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u27'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('regist.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('生成订单.html'), "");

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u22'] = 'top';