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

}());