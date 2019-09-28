/**
 * Import a JSON object. This object is a real response
 * from Reddit's publicly available API.
 * 
 * For more information on Reddit's API:
 * https://www.reddit.com/dev/api
 */
import redditScienceListing from '../data/reddit-api-response.json';

/* let's get the response items */
const items = redditScienceListing.data.children;

/**
 * Update the function to return an array of strings.
 * 
 * The author name is stored in a property: data.author
 * for each listing.
 */
export const mapItemsToAuthors = () => {
    
};

export default {
    mapItemsToAuthors,
}
