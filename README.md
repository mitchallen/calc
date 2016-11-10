@mitchallen/calc
==
A simple calculator
--


## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/calc --save
  
* * *

## Usage

    "use strict";
    
    var _factory = require("@mitchallen/calc");
    
    var calc = _factory.create();
    
	calc.clear();
	calc.add(20);
	calc.sub(5);
	calc.mul(4);
	var result = calc.div(2);
	console.log(result);
    
* * *

## Methods


### _factory.create()

The factory __create__ method that returns a calc object. 

It takes no parameters.

The method will return null if create fails, such as with bad parameters.
You can call create multiple times to create multiple calc objects.

    var _factory = require("@mitchallen/calc");

    var calc1 = _factory.create();
    var calc2 = _factory.create();

    if(!calc1 || !calc2) ...
    
### object.clear()

Sets the internal accumulator to zero.

    calc.clear()
    
### result = object.value()

Returns the current value of the internal accumulator. 

	var result = calc.value();

### result = object.add(number)

Adds __*number*__ to the internal accumulator. Returns the new value of the accumulator. 

	calc.add(2)
	
### result = object.sub(number)

Subtracts __*number*__ from the internal accumulator. Returns the new value of the accumulator. 

	calc.sub(2)
	
### result = object.mul(number)

Mulitples the value of the internal accumulator by __*number*__. Returns the new value of the accumulator. 

	calc.mul(2)
	
### result = object.div(number)

Divides the value of the internal accumulator by __*number*__. Returns the new value of the accumulator. 

	calc.div(2)
	
If divide by zero, accumulator will be set to infinity.

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [github.com/mitchallen/calc.git](https://github.com/mitchallen/calc.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.2.0 

* added a value method

#### Version 0.1.0 

* initial release


* * *