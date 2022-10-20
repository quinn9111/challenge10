const manager = require("../lib/manager");

test("Validate manager's office numnber.", () => {
    const testOfficeNumber = 723;
    const employeeInstance = new manager("Harley", 121918, "HarleyQuinn@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});