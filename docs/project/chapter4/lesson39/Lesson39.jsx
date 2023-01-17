import { normalize, schema } from 'normalizr';
import QuizQA from './QA/QuizQA';

const Lesson39 = (props) => {
    const runExample1 = false;
    const runExample2 = false;
    const runExample3 = true;

    //example with object
    if (runExample1) {
        //không cần phải viết theo 100% JSON format => object format
        //problem: change author => need to update commment (id = 567)
        //note: myPost is an object
        const myPost = {
            "id": "123",
            "author": {
                "id": "1",
                "name": "Paul"
            },
            title: "My awesome blog post",
            comments: [
                {
                    id: "324",
                    description: 'amzing',
                    commenter: {
                        id: "2",
                        name: "Nicole"
                    }
                },
                {
                    id: "567",
                    description: 'amzing',
                    commenter: {
                        id: "1",
                        name: "Paul"
                    }
                }
            ]
        }

        // Define a users schema
        const user = new schema.Entity('users');

        // Define your comments schema
        const comment = new schema.Entity('comments', {
            commenter: user,
        });

        // Define your article
        const article = new schema.Entity('articles', { // <= define an oject
            author: user,
            comments: [comment],
        });

        const normalizedData = normalize(myPost, article);

        console.log(">>> check example1 normalizedData : ", normalizedData);
    }


    //exmaple with array
    if (runExample2) {
        //  myPost is an array
        const myPost = [
            {
                "id": "123",
                "author": {
                    "id": "1",
                    "name": "Paul"
                },
                title: "My awesome blog post",
                comments: [
                    {
                        id: "324",
                        description: 'amzing',
                        commenter: {
                            id: "2",
                            name: "Nicole"
                        }
                    },
                    {
                        id: "567",
                        description: 'amzing',
                        commenter: {
                            id: "1",
                            name: "Paul"
                        }
                    }
                ]
            },
            {
                "id": "666",
                "author": {
                    "id": "1",
                    "name": "Paul"
                },
                title: "My awesome blog post",
                comments: [
                    {
                        id: "324",
                        description: 'amzing',
                        commenter: {
                            id: "2",
                            name: "Nicole"
                        }
                    },
                    {
                        id: "567",
                        description: 'amzing',
                        commenter: {
                            id: "1",
                            name: "Paul"
                        }
                    }
                ]
            },
            {
                "id": "999",
                "author": {
                    "id": "1",
                    "name": "Paul"
                },
                title: "My awesome blog post",
                comments: [
                    {
                        id: "324",
                        description: 'amzing',
                        commenter: {
                            id: "2",
                            name: "Nicole"
                        }
                    },
                    {
                        id: "567",
                        description: 'amzing',
                        commenter: {
                            id: "1",
                            name: "Paul"
                        }
                    }
                ]
            },
        ]

        // Define a users schema
        const user = new schema.Entity('users');

        // Define your comments schema
        const comment = new schema.Entity('comments', {
            commenter: user,
        });

        // Define your article
        const article = new schema.Entity('articles',
            {// <= define an oject
                author: user,
                comments: [comment]
            }
        );
        const articles = [article]; //<= define an array

        const normalizedData = normalize(myPost, articles);

        console.log(">>> check example2 normalizedData : ", normalizedData);
        // https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#arraydefinition-schemaattribute
    }


    //example
    if (runExample3) {

        const quiz = {
            id: 1,
            name: 'test',
            description: 'just a test',
            questions: [
                {
                    id: 1,
                    name: 'q1',
                    answers: [
                        { id: 1, description: 'a1', isSelected: false },
                        { id: 2, description: 'a2', isSelected: false }
                    ]
                },
                {
                    id: 2,
                    name: 'q2',
                    answers: [
                        { id: 3, description: 'a3', isSelected: false },
                        { id: 4, description: 'a4', isSelected: false }
                    ]
                },
                {
                    id: 3,
                    name: 'q3',
                    answers: [
                        { id: 5, description: 'a5', isSelected: false },
                        { id: 6, description: 'a6', isSelected: false }
                    ]
                }
            ]
        }


        const answer = new schema.Entity("answer");
        const question = new schema.Entity("question", {
            answers: [answer]
        });
        const q = new schema.Entity("quiz", { questions: [question] });
        const normalizedData2 = normalize(quiz, q);

        console.log(">>> check example3 normalizedData : ", normalizedData2);
    }



    return (
        <div>
            <div>L392: Normalized Data </div>
            <QuizQA />
        </div>
    )
}

export default Lesson39;