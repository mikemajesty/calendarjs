(function() {
  var $D = Date;
  var $P = $D.prototype;
  var $C = $D.CultureInfo;

  $P.getMonthDays = function() {
    var firstDay = new Date(this.getFullYear(), this.getMonth(), 1);
    var lastDay = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  };

}());