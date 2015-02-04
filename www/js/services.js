angular.module('starter.services', [])

.factory('StationsSvc', function() {
    var stationsSvc = {};
    stationsSvc.stations = [
    	{
    		name: 'Z100 Radio (WHTZ-FM)',
    		logoUrl: 'http://mydeskradio.com/images/radios/big/logo0_1299616688-whtz-fm-mhlogo.jpg',
    		type: 'FM',
    		hz: '100.3',
    		lat: '40.720049',
    		lon: '-74.005190'
        },
        {
    		name: 'Power 105.1 FM',
    		logoUrl: 'http://www.adweek.com/fishbowlny/files/2010/11/Power_1051_Logo2.jpg',
    		type: 'FM',
    		hz: '105.1',
    		lat: '',
    		lon: ''
        },
        {
    		name: 'KTU Radio (WKTU-FM)',
    		logoUrl: 'http://www.nymrad.org/sites/default/files/stations/KTU_color_sm.jpg?1307371688',
    		type: 'FM',
    		hz: '103.5',
    		lat: '',
    		lon: ''
        },
        {
    		name: 'Hot 97',
    		logoUrl: 'http://thatsenuff.com/wp-content/uploads/2014/04/hot-97.jpg',
    		type: 'FM',
    		hz: '91.1',
    		lat: '',
    		lon: ''
        },
        {
    		name: 'WNYU Radio Station',
    		logoUrl: 'http://25.media.tumblr.com/tumblr_lcw9kxjlgP1qdx3b0o1_500.jpg',
    		type: 'FM',
    		hz: '89.1',
    		lat: '',
    		lon: ''
        },
        {
    		name: '106.7 Lite FM (WLTW-FM)',
    		logoUrl: 'http://www.joetorre.org/wp-content/uploads/2014/12/LiteFM.gif',
    		type: 'FM',
    		hz: '106.1',
    		lat: '',
    		lon: ''
        }

    ]
    return stationsSvc;
});
