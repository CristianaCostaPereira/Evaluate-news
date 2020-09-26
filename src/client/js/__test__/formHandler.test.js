// Import the js file to test
import { handleSubmit } from '../formHandler';
import { urlInput } from '../formHandler';


describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });

    test('Test the click enter', () => {
        expect(urlInput).toBe(undefined);
    });
});