import Post from "./post";
import PostRepository from "./post-repository";

export default class InMemoryPostRepository implements PostRepository {
  private posts: Array<{ title: string; description: string; autor: string }> = [];

  async save(post: Post): Promise<void> {
    this.posts.push({
      title: post.title.value,
      description: post.description.value,
      autor: post.autor.value
    });
  }
  
   async getAll(): Promise<Post[]> {
    return this.posts.map(p => Post.create(p.title, p.description, p.autor));
  }

}



