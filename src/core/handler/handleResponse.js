export function handleResponse(response) {
    let apiResponse = response.data
    if (response.status === 201) {
        return Promise.resolve(apiResponse);
    }
    else {
        let error = apiResponse.message;
        let newError = new Error();
        newError.message = error;
        newError.name = 'ERROR';
        return Promise.reject(newError)
    }
}