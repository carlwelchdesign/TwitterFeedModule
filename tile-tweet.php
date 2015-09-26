<script id="tweet-template" type="x-tmpl-mustache">
{{#statuses}}
<div class="tweet tile">
	<img class="avatar" src="{{user.profile_image_url}}">
	<div class="twitter-id">
		<h2 class="fullname">{{user.name}}</h2>
		<h2 class="screen-name">{{user.screen_name}}</h2>
	</div>
	<h2 class="time">{{created_at}}</h2>
	<p class="tweet-text">
		{{text}}
	</p>
	<ul class="twitter-functions">
		<li>
			<a class="reply" href="https://twitter.com/intent/tweet?in_reply_to={{id_str}}">
				<img src="/static/img/events/twitter-reply.png">
			</a>
		</li>
		<li>
			<a class="retweet" href="https://twitter.com/intent/retweet?tweet_id={{id_str}}">
				<img src="/static/img/events/twitter-retweet.png">
			</a>
		</li>
		<li>
			<a class="favorite" href="https://twitter.com/intent/favorite?tweet_id={{id_str}}">
				<img src="/static/img/events/twitter-favorite.png">
			</a>
		</li>
	</ul>
</div>
{{/statuses}}
</script>