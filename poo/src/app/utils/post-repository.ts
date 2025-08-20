import Post from "./post";

export default interface PostRepository {
  save(post: Post): Promise<void>;
  getAll(): Promise<Post[]>;
  update(id: number, data: { title?: string; description?: string; autor?: string }): Promise<Post>;
}


