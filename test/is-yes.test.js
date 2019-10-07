import { isYes } from '../isYes.js';
const test = QUnit.test;


test('should return true if the user says yes', function(assert) {
    const userAnswer = 'yes';
    const userAnswerIsYes = isYes(userAnswer);
    assert.equal(userAnswerIsYes, true);

});


test('should return true if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsYes = isYes(userAnswer);
    assert.equal(userAnswerIsYes, false);

});