/*jslint white:true */
/*global chrome */

(function ( http ) {

    'use strict';

    var dnt_header = { name: 'DNT', value: '1' },
        filter = { urls: [ '<all_urls>' ] },
        info = [ 'requestHeaders', 'blocking' ];

    function doNotTrack( r ) {
        console.log( r );
        r.requestHeaders.push( dnt_header );
        return { requestHeaders: r.requestHeaders };
    }

    http.onBeforeSendHeaders.addListener( doNotTrack, filter, info );

}( chrome.webRequest ));
