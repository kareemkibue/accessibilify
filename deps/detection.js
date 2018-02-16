var device = {
    platform: getPlatform(),
    theplatform: function(){                
        if ( $(window).width() < 768 ) return 'mobile';        
        else if ( $(window).width() <= 1024 ) return 'tablet';       
        else if ( $(window).width() > 1800 ) return 'desktop';
        else if ( $(window).width() > 1024 && !isMobileDevice() ) return 'desktop';
        else if ( $(window).width() < 1920 && isMobileDevice() ) return 'tablet';    
    },
    mobileOs: getMobileOS()
};

function getPlatform(){                
    if ( $(window).width() < 768 ) return 'mobile';        
    else if ( $(window).width() <= 1024 ) return 'tablet';       
    else if ( $(window).width() > 1800 ) return 'desktop';
    else if ( $(window).width() > 1024 && !isMobileDevice() ) return 'desktop';
    else if ( $(window).width() < 1920 && isMobileDevice() ) return 'tablet';    
}

function getMobileOS(){
    var userAgent = navigator.userAgent;        
    if ( userAgent.match(/(iPod|iPhone|iPad)/) ) return 'ios';
    else if ( userAgent.match(/Android/i) ) return 'android';
    else if ( userAgent.match(/BlackBerry/i) || userAgent.match(/BB10/i)  ) return 'blackberry'    
    else return false;
}  

function isMobileDevice(){    
    if ( navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/) )
        return true;
    else return false;
}

var detection = {
    userAgent: navigator.userAgent,
    get browser(){    
        var userAgent = navigator.userAgent;
        if ( userAgent.match(/Firefox/i) ) return 'ff';
        if ( userAgent.match(/Chrome/i) ) return 'chrome';
        if ( userAgent.match(/Trident/i) ) return 'ie';
        if ( userAgent.match(/Edge/i) ) return 'ie';
    },
    browserVersion: getBrowserVersion()
}

function getBrowserVersion(){
    var userAgent = navigator.userAgent;   
    if ( userAgent.indexOf('Firefox/44') > -1 ) return 'ff-44';
    if ( userAgent.indexOf('Trident/7.0') > -1 ) return 'ie-11';
    if ( userAgent.indexOf('Trident/6.0') > -1 ) return 'ie-10';
    if ( userAgent.indexOf('Trident/5.0') > -1 ) return 'ie-9';
    if ( userAgent.indexOf('Trident/4.0') > -1 ) return 'ie-8';
}

function runInspect(){
    var classList = detection.browser + ' ' + detection.browserVersion; 
    // console.log(classList)
    $('html').addClass( classList );
}

// Chrome -> Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36
// FF -> Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0
// IE -> Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; InfoPath.3; LCJB; rv:11.0) like Gecko
// Edge -> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240


// REFERENCES
// https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
// https://msdn.microsoft.com/en-us/library/ms537503%28v=vs.85%29.aspx