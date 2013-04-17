//gives the rms of an array
rms = function(x) 
{
  var sqs = x.map(function(x) {return x * x});
  var res = 0;
  for(var i = 0; i < sqs.length; i++)
  {
    res += sqs[i];
  }
  return Math.sqrt(res / sqs.length)
}

//like take in mma
take = function(x, y) 
{
  res = new Array;
  if(y.length == undefined)
  {
  if(x.length - 1 > y)
  {
  	if(y < 0)
  	{
      var j = 0;
  	  for(var i = x.length + y; i < x.length; i++)
      {
        res[j] = x[i];
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
  } else{return 1;}
  }
  else if(y.length == 2)
  {
    take(take(x, -(x.length - y[0])), y[1] - y[0]+1)
  }
  return res
      
}

partition = function(arr, binSize)
{
  var numberOfParts = Math.floor(arr.length / binSize);
  var bulk = _.range(0, numberOfParts - 1, 1).map(function(x) {return take(arr, [0 + x * binSize , binSize - 1 + x * binSize])});
  var edge = new Array;
  for(var i = numberOfParts * binSize; i < arr.length;  i++)
  {
    edge[i - numberOfParts * binSize] = arr[i];
  }
  return bulk.concat([edge])
}

mod= function(x, y) {return x - Math.floor(x/y)*y}

flatten = function(x)
{
  var arr = new Array;
  if(x.length == undefined)
  {
    return x;
  }
  else
  {
    for(var i = 0; i < x.length; i++)
    {
      if(x[i].length == undefined)
      {
      	arr = arr.concat([x[i]]);
      }
      else 
      {
        arr = arr.concat(flatten(x[i]));
      }
    }
  }
  return arr
}