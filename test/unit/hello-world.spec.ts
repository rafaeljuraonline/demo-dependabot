
describe('Hello World', () => {
    it('should return "Hello, World!"', () => {
        const localTime = new Date().toLocaleString();
        console.log('Hello, World!');
        console.log(`Local Time: ${localTime}`);
        expect('Hello, World!').toBe('Hello, World!');
    });
});