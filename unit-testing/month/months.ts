function getMonthApi() {
    this.currentMonth = function () {
        return 'May';
    }
    this.nextMonth = function () {
        return 'June';
    }
}


export function MonthCalculator() {
    this.api = new getMonthApi();

    this.getNextMonth = function() {
        return this.api.nextMonth();
    }

    this.getCurrentMonth = function() {
        return this.api.currentMonth();
    }
}