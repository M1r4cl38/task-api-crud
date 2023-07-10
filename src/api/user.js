export function registerAPI(httpMethod, restUrlParts, jsonData) {
    const availableHttpMethods = ['post'];
    if (availableHttpMethods.includes(httpMethod) && httpMethod in api) {
        return api[httpMethod](restUrlParts, jsonData);
    }
    return `"${httpMethod}" Http method is not allowed.`;
}
const api = {}; 
api.post = () => {
    return 'User created.';
};
