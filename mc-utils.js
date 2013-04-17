
//gives the rms of an array
rms = function(x) 
{
  var sqs = x.map(function(x) {return x * x});
  var res = 0;
  for(var i = 0; i < sqs.length; i++)
  {
    res += sqs[i];
  }
  return res
}

//like take in mma
take = function(x, y) 
{
  res = new Array;
  if(x.length - 1 > y)
  {
  	if(y < 0)
  	{
      var j = 0
  	  for(var i = x.length; i > x.length + y; i--)
      {
        res[j] = x[x.length - 1 - j];
        j++;
      }
  	}
  	if(y > 0)
  	{
  	  for(var i = 0; i < y; i++)
      {
        res[i] = x[i];
      }
  	} 
  	if(y === 0) {return 0;}
        } else{return 1;}
  return res
      
}