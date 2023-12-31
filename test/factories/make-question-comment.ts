import { UniqueEntityID } from "../../src/core/entities/unique-entity-id"
import { faker } from '@faker-js/faker'
import { QuestionComment, QuestionCommentProps } from "../../src/domain/forum/enterprise/entities/question-comment"


export function makeQuestionComment(override: Partial<QuestionCommentProps> = {}, id?: UniqueEntityID,) {
    const questionComment = QuestionComment.create(
        {
          authorId: new UniqueEntityID(),
          questionId: new UniqueEntityID(),
          content: faker.lorem.text(),
          ...override,
        },
        id,
      )
    
      return questionComment
    }