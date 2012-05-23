//    ____    __  __  ______   
//   /\  _`\ /\ \/\ \/\__  _\  
//   \ \ \/\ \ \ `\\ \/_/\ \/  
//    \ \ \ \ \ \ , ` \ \ \ \  
//     \ \ \_\ \ \ \`\ \ \ \ \ 
//      \ \____/\ \_\ \_\ \ \_\
//       \/___/  \/_/\/_/  \/_/
//
// DNT :: Do Not Track Extension for Chrome
// Copyright (c) 2012 Ori Livneh. BSD License.

/*jslint white:true */
/*global chrome */

(function ( http ) {

    'use strict';

    var dnt_header = { name: 'DNT', value: '1' },
        filter = { urls: [ '<all_urls>' ] },
        info = [ 'requestHeaders', 'blocking' ];

    function doNotTrack( r ) {
        r.requestHeaders.push( dnt_header );
        return { requestHeaders: r.requestHeaders };
    }

    http.onBeforeSendHeaders.addListener( doNotTrack, filter, info );

}( chrome.webRequest ));
