export class AppService {
    static async login(email: string, password: string): Promise<any> {
        const response = await fetch(`${process.env.REACT_APP_STRAPI}/api/auth/local`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({ identifier: email, password })
        });

        if (response.status === 200) {
            const user = await response.json();
            return user;
        } else {
            throw new Error('An error occured. Please retry.');
        }
    }
}