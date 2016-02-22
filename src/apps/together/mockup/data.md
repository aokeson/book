---
layout: layout.hbs
---

# Data Models

* Playlist (for each playlist)
	* user (the user that requested the playlist)
	* description (the description of the playlist)
	* collaborators (number of users contributing to the playlist)
	* songs (each song in each playlist)
		* recommender (the user that recommended each song)
		* likes (number of up votes)
		* dislikes (number of down votes)
		* comment (each comment)
			* user (the user that wrote each comment)


