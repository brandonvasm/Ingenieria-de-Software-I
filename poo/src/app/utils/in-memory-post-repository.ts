import Post from "./post";
import PostRepository from "./post-repository";

export default class InMemoryPostRepository implements PostRepository {
  private posts: Array<{id: number, title: string; description: string; autor: string }> = [];
   private nextId = 1;

  async save(post: Post): Promise<void> {
    this.posts.push({
      id: this.nextId++,
      title: post.title.value,
      description: post.description.value,
      autor: post.autor.value
    });
  }

  async getAll(): Promise<Post[]> {
    return this.posts.map(p => Post.create(p.title, p.description, p.autor));
  }

  async update(id: number, data: { title?: string; description?: string; autor?: string }): Promise<Post> {
    const post = this.posts.find(p => p.id === id);

    if (!post) throw new Error("Post not found");


    post.title = data.title ?? post.title;
    post.description = data.description ?? post.description;
    post.autor = data.autor ?? post.autor;

    return Post.create(post.title, post.description, post.autor);
  }

  async delete(id: number): Promise<void> {
    this.posts = this.posts.filter(p => p.id !== id);
  }



}



