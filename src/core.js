(function() {
  var $D = Date;
  var $P = $D.prototype;
  var $C = $D.CultureInfo;

  function getMonthDays() {
    var firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    return firstDay.getDate();
    // var lastDay = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  }

  module.exports = {
		getMonthDays: getMonthDays
	}
}());