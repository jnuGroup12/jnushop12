for(var i = 0; i < 76; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToPanelStateChangeFunction['u25'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('stop')) == ('0')) {

	SetPanelStateNext('u17',true,'none','',500,'none','',500);

}

}

widgetIdToPanelStateChangeFunction['u24'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('stop')) == ('0')) {
function waituf659c01bf1164367880ca6f6f3291b791() {

	SetPanelStateNext('u25',true,'none','',500,'none','',500);
}
setTimeout(waituf659c01bf1164367880ca6f6f3291b791, 3000);

}
else
if ((GetGlobalVariableValue('stop')) > Number('0')) {
function waituabd86013fe9f49dba4c58304bbd7a3dc1() {

SetGlobalVariableValue('stop', 'stop-1');

	SetPanelStateNext('u25',true,'none','',500,'none','',500);
}
setTimeout(waituabd86013fe9f49dba4c58304bbd7a3dc1, 3000);

}
else
if ((GetGlobalVariableValue('stop')) < Number('0')) {
function waituf032d9dd882141a6a34dc4c99d111f161() {

SetGlobalVariableValue('stop', 'stop+1');

	SetPanelStateNext('u25',true,'none','',500,'none','',500);
}
setTimeout(waituf032d9dd882141a6a34dc4c99d111f161, 3000);

}

}
gv_vAlignTable['u21'] = 'center';
u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if ((GetWidgetText('u12')) == ('方便面')) {

	NewTab($axure.globalVariableProvider.getLinkUrl('方便面.html'), "");

}
else
if ((GetWidgetText('u12')) == ('苹果')) {

	NewTab($axure.globalVariableProvider.getLinkUrl('苹果.html'), "");

}
else
if ((GetWidgetText('u12')) == ('饼干')) {

	NewTab($axure.globalVariableProvider.getLinkUrl('饼干.html'), "");

}
});
gv_vAlignTable['u55'] = 'top';
u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('方便面.html');

}
});

$axure.eventManager.mouseover('u31', function(e) {
if (!IsTrueMouseOver('u31',e)) return;
if ((GetPanelState('u17')) != ('pd2u17')) {

SetGlobalVariableValue('stop', 'stop+1');

	SetPanelState('u17', 'pd2u17','fade','',500,'fade','',500);

}
else
if ((GetGlobalVariableValue('stop')) == ('0')) {

SetGlobalVariableValue('stop', '-1');

	SetPanelStateNext('u24',true,'none','',500,'none','',500);

}
});

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u1'] = 'center';
$axure.eventManager.mouseover('u27', function(e) {
if (!IsTrueMouseOver('u27',e)) return;
if ((GetPanelState('u17')) != ('pd0u17')) {

SetGlobalVariableValue('stop', 'stop+1');

	SetPanelState('u17', 'pd0u17','fade','',500,'fade','',500);

}
else
if ((GetGlobalVariableValue('stop')) == ('0')) {

SetGlobalVariableValue('stop', '-1');

	SetPanelStateNext('u24',true,'none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u27', function(e) {
if (!IsTrueMouseOut('u27',e)) return;
if (true) {

}
});
u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('regist.html');

}
});
gv_vAlignTable['u7'] = 'top';
$axure.eventManager.mouseover('u66', function(e) {
if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelState('u17', 'pd2u17','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u34'] = 'center';
$axure.eventManager.mouseover('u64', function(e) {
if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelState('u17', 'pd1u17','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u19'] = 'center';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('书店.html'), "");

}
});
gv_vAlignTable['u11'] = 'top';
u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});
gv_vAlignTable['u71'] = 'center';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'top';
u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('书店.html');

}
});
gv_vAlignTable['u75'] = 'center';
u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href='http://www.amazon.cn/';

}
});

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('饼干.html');

}
});

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});
gv_vAlignTable['u3'] = 'center';
u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('苹果.html');

}
});

$axure.eventManager.mouseover('u68', function(e) {
if (!IsTrueMouseOver('u68',e)) return;
if (true) {

	SetPanelState('u17', 'pd0u17','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u73'] = 'center';
u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u54'] = 'center';
u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});
gv_vAlignTable['u69'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('login.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u65'] = 'center';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href='http://www.taobao.com/';

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u9'] = 'center';
u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('管理员登录.html');

}
});

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u67'] = 'center';
u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	self.location.href='http://www.jd.com/';

}
});
u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('超市.html'), "");

}
});
gv_vAlignTable['u10'] = 'top';
u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('超市.html');

}
});
document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('购物车.html'), "");

}
});
gv_vAlignTable['u14'] = 'center';
u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('话费充值.html');

}
});
document.getElementById('u74_img').tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('订单详情.html'), "");

}
});

$axure.eventManager.mouseover('u29', function(e) {
if (!IsTrueMouseOver('u29',e)) return;
if ((GetPanelState('u17')) != ('pd1u17')) {

SetGlobalVariableValue('stop', 'stop+1');

	SetPanelState('u17', 'pd1u17','fade','',500,'fade','',500);

}
else
if ((GetGlobalVariableValue('stop')) == ('0')) {

SetGlobalVariableValue('stop', '-1');

	SetPanelStateNext('u24',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u59'] = 'top';