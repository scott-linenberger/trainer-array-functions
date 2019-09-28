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
 * 
 * For more information on how to use Array.prototype.map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const mapItemsToAuthors = () => {
    
};

export default {
    mapItemsToAuthors,
}
