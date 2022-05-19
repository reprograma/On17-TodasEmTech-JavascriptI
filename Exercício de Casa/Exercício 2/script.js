
function maior(p) {
  var m = 0;
  p.forEach(n => {
      if (n>m) m=n
      (n<m) m=n
    }  
  );
  return m;
}

var y = [21,23,1,2,4,8,9,20];

var x = maior(y);

console.log(x)