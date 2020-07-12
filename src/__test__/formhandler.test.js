import { postData } from '../client/js/formhandler.js'
import { updateUI } from '../client/js/UIUpdater.js'

describe('Testing', () => {
    test('check if postData is a function', () => {
        expect(typeof(postData)).toMatch('function');
    })
    test('check if the updateUI function is defined', () => {
        expect(updateUI).toBeDefined();
    })

})