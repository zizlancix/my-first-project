document.addEventListener('DOMContentLoaded', function (){ 
window.AddToHomeScreenInstance = window.AddToHomeScreen({
 appName: 'Markuss',
 appNameDisplay: 'standalone',
 appIconUrl: 'apple-touch-icon.png',
   assetUrl: 'https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.91/dist/assets/img/',
 
 maxModalDisplayCount: 1,
    displayOptions: { showMobile: true, showDesktop: true }
 
});
window.AddToHomeScreenInstance.show('lv');
window.resetInstallPrompt = function(){
window.AddToHomeScreenInstance.clearModalDisplayCount();
alert('Install prompt reset. Reload the page to test again.')

}
});