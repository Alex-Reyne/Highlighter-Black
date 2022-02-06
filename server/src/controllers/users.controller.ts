import { Get, Route } from 'tsoa';
interface UsersResponse {
	message: string;
}
@Route('users')
export default class UsersController {
	@Get('/')
	public async getMessage(): Promise<UsersResponse> {
		return {
			message: 'users List',
		};
	}
}
