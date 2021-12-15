import {MonthCalculator} from '../month/months';

describe('MonthCalculator', () => {

    it('returns the current month', () => {
        //arrange
        const monthCalculator = new MonthCalculator();

        //act
        const y = monthCalculator.getCurrentMonth();

        //assert
        expect(y).toBe('May');
    });


});