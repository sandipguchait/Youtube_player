import axios from "axios";

const KEY = "AIzaSyDROqll16rdmpS1yRIZRdiSd7HNQUZW_zo";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
