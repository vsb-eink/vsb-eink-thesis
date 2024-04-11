/**
 * @param {string} path 
 * @param {*} [options] Override http request option.
 * @throws {RequiredError}
 */
getContentMetadata: async (path: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
    // verify required parameter 'path' is not null or undefined
    assertParamExists('getContentMetadata', 'path', path)
    const localVarPath = `/hosted/core/files/{path}`
        .replace(`{${"path"}}`, String(path));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    let baseOptions;
    if (configuration) {
        baseOptions = configuration.baseOptions;
    }
    const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;
    // authentication tokenAuth required
    // http bearer authentication required
    await setBearerAuthToObject(localVarHeaderParameter, configuration)
    setSearchParams(localVarUrlObj, localVarQueryParameter);
    let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
    return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
    };
},