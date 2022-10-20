const engineer = require("../lib/engineer");

test("Validate employee's Github.", () => {``
    const testGithub = "HarleyQuinn";
    const employeeInstance = new engineer("Harley", 121918, "HarleyQuinn@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});
