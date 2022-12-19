import axios from "axios";

const url = "api/posts/";

/* eslint-disable no-async-promise-executor */

class PlayerService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create Post
  static insertPost(user, rating, title, text) {
    const likes = 0;
    return axios.post(url, {
      user,
      rating,
      title,
      text,
      likes,
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }

  // Like Post
  static likePost(id, likes) {
    const newLikes = likes + 1;
    return axios.put(`${url}${id}`, { newLikes });
  }

  // Unlike Post
  static unlikePost(id, likes) {
    const newLikes = likes - 1;
    return axios.put(`${url}${id}`, { newLikes });
  }
}

export default PlayerService;
