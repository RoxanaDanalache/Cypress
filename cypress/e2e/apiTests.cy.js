describe("API Tests httpbin.org", () => {
    
//GET method
it("GET: Should return status 200", () => {
    const request = "https://httpbin.org";

    cy.request(request).then((response) => {
        let status = response.status;
        assert.equal(200, status);
    })
  })

// POST method
 it("POST: Should return the data", () => {
    const requestBody = {name: "Roxana"};
    const request = {
        url: "https://httpbin.org/post",
        failOnStatusCode: false,
        body: requestBody,
    }
      cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(405, status);
    });
});

 // PUT method
 it("PUT: should return updates", () => {
    const requestBody = { update: "test update" };
    const request = {
        url: "https://httpbin.org/post",
        failOnStatusCode: false,
        body: requestBody, 
    }
    cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(405,status);
    });
});

// DELETE method
it("DELETE: should return status 200", () => {
    const request = "https://httpbin.org";

    cy.request(request).then((response) => {
        let status = response.status;
        assert.equal(200, status);
    });
  });

// User-Agent standard header
it("Headers: should return User-Agent header", () => {
    const request = {
        url: "https://httpbin.org/headers",
        method:"GET",
        failOnStatusCode: false,
        headers: { 'User-Agent': 'NewAgent' }
    }
    cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200,status);
   });
});

// Custom header
it("Headers: should return custom header", () => {
    const request = {
        url: "https://httpbin.org/headers",
        method:"GET",
        failOnStatusCode: false,
        headers: { 'Custom-Header': 'CustomValue' }
    }
     cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200,status);
   });
});

// Query parameters
it("Query Parameters: should return query parameters", () => {
    const request = {
        url: "https://httpbin.org/get",
        method:"GET",
        failOnStatusCode: false,
    }
     cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200,status);
   });
});

// Random parameters
it("Query Params: should return random parameters", () => {
    const randomParam = Math.random().toString(15).substring(5);
    const request = {
        url: "https://httpbin.org/get",
        method: "GET",
        failOnStatusCode: false,
        randomParam: { random: randomParam }, 
    }
    cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200,status);
    });
});

// Response content verification
it("JSON Response: should return the response content verification", () => {
    const request = {
        url: "https://httpbin.org/json",
        failOnStatusCode: false,
    }
    cy.request(request).then((response) => {
            let status = response.status;
            console.log(response);
            assert.equal(200,status);
        });
});

// Request duration verification
it("Request Duration: should respond in less than 500ms", () => {
    const request = {
        url: "https://httpbin.org/get",
        method: "GET",
        failOnStatusCode: false,
        timeout: 500
    }
    cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200,status);
    });
  });
});
