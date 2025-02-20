const fetchUtil = (url, params, expectedStatus = 200) => {
    const apiRequest = new Promise((resolve, reject) => {
        fetch(url, params)
            .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
            .then((response) => {
                if (response.status === 400 || response.status === 401) {
                    // TODO: What do we want to do with these errors?
                    return reject(response);
                }
                // if (response.status !== expectedStatus) {
                //   TODO: Do we want to do anything on failed responses?
                //   return reject(response);
                // }
                return resolve(response);
            })
            .catch((error) => {
                // console.log(error);
                return reject(new Error("Unable to make request"));
            });
    });
    return apiRequest;
};

export default fetchUtil;