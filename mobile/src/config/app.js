const baseURLMap = {
	development: "http://localhost",
	production: location.origin,
}

export const baseURL = baseURLMap[process.env.NODE_ENV]