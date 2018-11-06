import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allStudents: (_) =>
			getRequest(URL, ''),
		studentByCode: (_, { code }) =>
			generalRequest(`${URL}students/${code}`, 'GET'),
	},
	Mutation: {
		createStudent: (_, { student }) =>
			generalRequest(`${URL}students/`, 'POST', student),
		updateStudent: (_, { code, student }) =>
			generalRequest(`${URL}students/${code}`, 'PUT', student),
		deleteStudent: (_, { code }) =>
			generalRequest(`${URL}students/${code}`, 'DELETE'),
    LoginStudent: (_, { student }) =>
      generalRequest(`${URL}/auth`, student)
	}
};

export default resolvers;
