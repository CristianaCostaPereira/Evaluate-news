import { validateUrl } from '../validateUrl';

describe("Testing the url validation functionality", () => {
    test("Testing the validateUrl() function", () => {
        expect(validateUrl).toBeDefined();
    });

    test("Should be a function", () => {
        expect(typeof validateUrl).toBe("function");
    });

    test("It returns true when a valid url is entered", () => {
        const urls = [
            "www.example.com",
            "example.com",
            "http://www.example.com",
            "http://example.com",
            "https://example.com",
            "https://www.example.com"
        ];

        urls.forEach(url => {
            expect(validateUrl(url)).toBeTruthy;
        });
    });

    test('It should return false if invalid URL is entered', () => {
        expect(validateUrl("google.")).toBeFalsy();
    });
});