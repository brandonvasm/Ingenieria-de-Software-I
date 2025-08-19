import postgres from "postgres";
import Post from "./post";
import PostRepository from "./post-repository";

export default class PostRegister {
    private readonly repository: PostRepository;
    constructor(repository: PostRepository) {
    this.repository = repository;
  }


    async run(title: string, description: string, autor: string) {
        const post = Post.create(title, description, autor)
        await this.repository.save(post);
    }


    
}
