(function() {
  var $D = Date;
  var $P = $D.prototype;
  var locale = 'pt-BR';

  $P.getMonthDays = function() {
    var start = new Date(this.getFullYear(), this.getMonth(), 1);
    var end = new Date(this.getFullYear(), this.getMonth() + 1, 0);

    for (var index = start.getDate(); index <= end.getDate(); index++) {
      start.setDate(index);

    }
    return start.getDate();
  };

  $P.getWeekDays = function() {
    var dt = new Date(this.getFullYear(), this.getMonth(), getDaySaturday(this));
    var weekList = [];
    var tDay = parseInt(getDaySaturday(dt));
    for (var index = 0; index < 7; index++) {
      var day = (tDay + index);
      var dtTemp = new Date(dt.getFullYear(), dt.getMonth(), day);
      var week = dtTemp.toLocaleDateString([], { weekday: 'long' });
      weekList.push(week.charAt(0).toUpperCase() + week.slice(1));
    }
    return weekList;
  };

  function getDaySaturday(now) {
    now.setDate(now.getDate() + (7 + (7 - now.getDay())) % 7);
    return now.toLocaleDateString([], { day: 'numeric' });
  }

  var getLastSunday = function(d) {
    var t = new Date(d);
    t.setDate(t.getDate() - t.getDay());
    return t;
  };

  var changeDate = function(tDate) {

    var start = new Date(tDate.getFullYear(), tDate.getMonth(), 1);
    var end = new Date(tDate.getFullYear(), tDate.getMonth() + 1, 0);
    var weeks = [];
    var dateInitialOverload = new Date();
    var tDay = getLastSunday(dateInitialOverload);
    for (var index = start.getDate(); index <= end.getDate(); index++) {
      start.setDate(index);
      var weekDay = start.toLocaleDateString([], { weekday: 'long' });
      weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
      var weekDayCompare = getLastSunday(new Date()).toLocaleDateString([], { weekday: 'long' });
      weekDayCompare = weekDayCompare.charAt(0).toUpperCase() + weekDayCompare.slice(1);
      if (weekDay === weekDayCompare || weeks.length === 0) {
        var week = {};

        if (index === 1) {
          for (var cont = 0; cont < 7; cont++) {
            var dt = tDay;
            week[start.getWeekDays()[cont]] = {};
            dt.setDate(dt.getDate() + cont);
          }
        }
        weeks.push(week);
      }

      var tWeekday = start.toLocaleDateString([], { weekday: 'long' });
      tWeekday = tWeekday.charAt(0).toUpperCase() + tWeekday.slice(1);
      weeks[weeks.length - 1][tWeekday] = {
        date: new Date(start),
        class: 'current-day-first cursor',
        select: 'hover-range-normal cursor',
      };
    }

    return weeks;
  };

  module.exports = {
    changeDate: changeDate
  };
}());