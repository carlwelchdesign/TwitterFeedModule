/*
 * twitterModule.js
 * Created by: Carl Welch
 * Date: 2015/07/08
 * How to use:
 * e.g.
 * 		var twitterFeed = new TwitterFeed(username, hashtag, limit, tweetcontainer);
		twitterFeed.init();

		set the data attributes of the tweet container:
		<div id="live-tweet" data-limit="8" data-twittername="lululemon" data-hashtag="yoga" class="tile-container">
			<!-- components/tile-tweet.php / Mustache template -->
		</div>
 */
 
define(['jquery','libs/moment.min','mustache'], function ($, moment, Mustache) {
	"use strict";	
	var tweetcontainer;
	function TwitterFeed() {
	tweetcontainer = $('#live-tweet');
	}
	TwitterFeed.prototype = {
		init: function() {
			var username = tweetcontainer.data('twittername');
			var hashtag = tweetcontainer.data('hashtag');
			var limit = tweetcontainer.data('limit');
			var tweetArr = {"statuses":[]};
			
			var twitterSearch = '/sandbox/ajax/twitterSearch.php';
			var _this = this;
			$.getJSON( twitterSearch,{username: username, hashtag: hashtag})
			 .done(function( json ) {
			   $.each(json.statuses, function (i, tweet) {
					json.statuses[i].created_at = moment(Date.parse(tweet.created_at)).format('MMM D'); // reformatting dates
					if(i<limit){
						tweetArr.statuses.push(json.statuses[i]);
					}
			   });

			   _this.appendTweets(tweetcontainer, tweetArr);
			 })
			 .fail(function( jqxhr, textStatus, error ) {
			   var err = textStatus + ', ' + error;
			   console.log( 'Request Failed: ' + err );
			});
		},
		appendTweets: function(tweetcontainer, json){
			$.get('/components/tile-tweet.php', function(template) {
		    	tweetcontainer.append(Mustache.render($(template).filter('#tweet-template').html(), json));
		    });
		}
	};
	return TwitterFeed;
});