export const studentsTydeDef = `
type Student {
  code: Int!
  username: String!
  password: String!
}
input StudentInput {
  username: String!
  password: String!
}
`;

export const studentsQueries = `
    allStudents: [Student]!
    studentByCode(code: Int!): Student!
`;

export const studentsMutations = `
    createStudent(student: StudentInput!): Student!
    deleteStudent(code: Int!): Int
    updateStudent(code: Int!, student: StudentInput!): Student!
    LoginStudent(student: StudentInput!): String!
`;
