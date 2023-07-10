export function registerAPI(httpMethod: string, restUrlParts: string[], jsonData: any): string {
    const availableHttpMethods = ['post'];
    if (availableHttpMethods.includes(httpMethod) && httpMethod in api) {
        return api[httpMethod]!();
    }
    return `"${httpMethod}" Http method is not allowed.`;
}

const api: Record<string, Function> = {};

api.post = (restUrlParts: string[], jsonData: any): string => {
console.log(restUrlParts);
console.log(jsonData);

const [userErr, userMsg] = await file.create('users');

    return 'User created.';
}