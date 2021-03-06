/*!
 *	Add methods for fill form select
 *
 *	@version 1.0.6
 *	@author Mitchell Petty <https://github.com/mpetty/fill-select>
 */
(function($) {
"use strict";

	if(! $.fillSelect) return;

	/**
	 *	States - using ajax
	 */
	$.fillSelect.addMethod("state", {url: 'http://api.geonames.org/searchJSON', dataType: 'json', data: {country:'US',type:'json', featureCode: 'ADM1', maxRows: 1000, username:'thelearninghouse'}}, function(data) {
		var geonames = (typeof data.geonames === 'object') ? data.geonames : false,
			states = {};

		if(geonames) {
			geonames.sort(function(a, b) {
			    if (a.adminName1 === b.adminName1) {
			        return 0;
			    } else if (a.adminName1 > b.adminName1) {
			        return 1;
			    }

			    return -1;
			});

			for(var key in geonames) {
				states[geonames[key].adminCode1] = (typeof geonames[key] !== 'undefined' && geonames[key] !== 'US') ?  geonames[key].adminName1 : null;
			}
		}

		return states;
	});

	/**
	 *	Countries - using ajax
	 */
	$.fillSelect.addMethod("country", {url:'http://api.geonames.org/countryInfoJSON', dataType:'json', data: {orderby: 'countryName', maxRows: 1000, username: 'thelearninghouse'}}, function(data) {
		var geonames = (typeof data.geonames === 'object') ? data.geonames : false,
			countries = {};

		countries['US'] = 'United States';

		if(geonames) {
			geonames.sort(function(a, b) {
			    if (a.countryName === b.countryName) {
			        return 0;
			    } else if (a.countryName > b.countryName) {
			        return 1;
			    }

			    return -1;
			});

			for(var key in geonames) {
				countries[geonames[key].countryCode] = (typeof geonames[key] !== 'undefined') ? geonames[key].countryName : null;
			}
		}

		return countries;
	});

	/**
	 *	States
	 */
	$.fillSelect.addMethod("state_noajax", function() {
		var states = {
			    "AL": "Alabama",
			    "AK": "Alaska",
			    "AS": "American Samoa",
			    "AZ": "Arizona",
			    "AR": "Arkansas",
			    "CA": "California",
			    "CO": "Colorado",
			    "CT": "Connecticut",
			    "DE": "Delaware",
			    "DC": "District Of Columbia",
			    "FM": "Federated States Of Micronesia",
			    "FL": "Florida",
			    "GA": "Georgia",
			    "GU": "Guam",
			    "HI": "Hawaii",
			    "ID": "Idaho",
			    "IL": "Illinois",
			    "IN": "Indiana",
			    "IA": "Iowa",
			    "KS": "Kansas",
			    "KY": "Kentucky",
			    "LA": "Louisiana",
			    "ME": "Maine",
			    "MH": "Marshall Islands",
			    "MD": "Maryland",
			    "MA": "Massachusetts",
			    "MI": "Michigan",
			    "MN": "Minnesota",
			    "MS": "Mississippi",
			    "MO": "Missouri",
			    "MT": "Montana",
			    "NE": "Nebraska",
			    "NV": "Nevada",
			    "NH": "New Hampshire",
			    "NJ": "New Jersey",
			    "NM": "New Mexico",
			    "NY": "New York",
			    "NC": "North Carolina",
			    "ND": "North Dakota",
			    "MP": "Northern Mariana Islands",
			    "OH": "Ohio",
			    "OK": "Oklahoma",
			    "OR": "Oregon",
			    "PW": "Palau",
			    "PA": "Pennsylvania",
			    "PR": "Puerto Rico",
			    "RI": "Rhode Island",
			    "SC": "South Carolina",
			    "SD": "South Dakota",
			    "TN": "Tennessee",
			    "TX": "Texas",
			    "UT": "Utah",
			    "VT": "Vermont",
			    "VI": "Virgin Islands",
			    "VA": "Virginia",
			    "WA": "Washington",
			    "WV": "West Virginia",
			    "WI": "Wisconsin",
			    "WY": "Wyoming"
			};

		return states;
	});

// EOF
})(jQuery);