const d=document,
n=navigator,
ua=n.userAgent;
export default function userDeviceInfo(id){
    
    //console.log(ua);
    const $id=d.getElementById(id),
    isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()|| this.ios() || this.windows();
        },

    },
    isDesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac/i),
        windows:()=>ua.match(/windows/i),
        any:function(){
            return this.linux()|| this.mac() || this.windows();
        },
    },
    isBrowser={
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return (
            this.chrome()||
            this.safari() ||
            this.firefox()||
            this.opera()||
            this.ie() ||
            this.edge());
        },
    };

    //console.log(isMobile.android())
    $id.innerHTML=`
    <ul>
        <li>User Agent:<b> ${ua}</b></li>
        <li>Plataforma:<b> ${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
        <li> Navegador:<b> ${isBrowser.any()}</b><li>
    </ul>
    `
    if(isBrowser.chrome()){
        $id.innerHTML+=`eston solo aparece en chrome`
    }
    if(isBrowser.firefox()){
        $id.innerHTML+=`eston solo aparece en firefox`
    }
}