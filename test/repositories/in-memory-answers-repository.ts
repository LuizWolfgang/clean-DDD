import { AnswersRepository } from "../../src/domain/forum/application/repositories/answers-repository";
import { Answer } from "../../src/domain/forum/enterprise/entities/answer";
import { Question } from "../../src/domain/forum/enterprise/entities/question";

export class InMemoryAnswersRepository implements AnswersRepository {
    public items: Answer[] = []
   async create(answer: Answer) {
        this.items.push(answer)
    }
    
}