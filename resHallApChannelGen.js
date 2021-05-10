/* This program will assist in mapping AP channel settings on a building with 4 floors
It assumes:
- 4 floors
- 6 positions for APs per floor (2 width, 3 length)
- 3 possible non-overlapping channels 
- APs will be situated in the same spot on each floor 
- Diamond Layout
EX:

     FLOOR 1

       4
1-----[_]-----2
    5-----6
       3



There is a pattern here:
Lenghtwise: Elements 1 and 2 are farthest from each other on any given floor (can be the same channel),
Widthwise: Elements 3 and 4 are farthest from each other on any given floor (can be the same channel)
    |-> There is also an elevator between 3 and 4, so that should help sheild them even more
    |-> 3 and 4 are still closer than 1 and 2
All that remains are 5 and 6, these should also be set to the same channel

IDEA: 
Pair up the farthest away APs
    etc: 1 and 2, 3 and 4, 5 and 6
        [A1,A2,B1,B2,C1,C2]
        [1,1,6,6,11,11]

    Floors Start with: 1 then 6 then 11 then 1 then 6 ...

Pre-generate patterns, find out which power channel the user wants to start at, then return the correct tables.

Things to work on:
- I find myself copying and pasting a lot of code
- Could use a function for duplicate code and then just call it
- This approach scales better if you want to add more floors, BUT it falls apart if you want to adjust the number of APs
*/


/* Setting up Variables */
finalLayout = [];
generatorVar = 1;
preferredChannel = 0;


/* Generating Patterns */

/* Floor Pattern 1 
Starts at 1 */
pattern1 = [];
pattern1.push(generatorVar);
pattern1.push(generatorVar);

generatorVar += 5;

pattern1.push(generatorVar);
pattern1.push(generatorVar);

generatorVar += 5;

pattern1.push(generatorVar);
pattern1.push(generatorVar);

generatorVar = 6; 


/* Floor Pattern 3 
Starts at 6 */
pattern2 = [];

pattern2.push(generatorVar);
pattern2.push(generatorVar);

generatorVar += 5;

pattern2.push(generatorVar);
pattern2.push(generatorVar);

generatorVar = 1;

pattern2.push(generatorVar);
pattern2.push(generatorVar);

generatorVar = 11;

/* Floor Pattern 1
Starts at 11 */
pattern3 = [];

pattern3.push(generatorVar);
pattern3.push(generatorVar);

generatorVar = 1;

pattern3.push(generatorVar);
pattern3.push(generatorVar);

generatorVar += 5;

pattern3.push(generatorVar);
pattern3.push(generatorVar);



/* Explaining Program Use and Floor Layout */
alert(`This program is designed for the Albany Res Hall APs.
The layout for each floor goes like this: 

     FLOOR 1

¯¯¯¯¯¯¯4¯¯¯¯¯¯¯
1-----[_]-----2
____5-----6____
_______3_______

(The elevator is in the center of the map)

YOU ARE CHOOSING THE INITIAL CHANNEL OF THE AP IN POSITION 1
`);

/* Input from User */
/* Implimenting DO WHILE LOOP to check input */
do {
    preferredChannel = window.prompt(
        `What channel do you want the 1st AP on the Basement to start at? (1, 6 or 11)
        PLEASE DO NOT PUT IN ANYTHING OTHER THAN THE LISTED NUMBERS`
    );
} while (preferredChannel != 1 && preferredChannel != 6 && preferredChannel != 11)

/* Showing User their Selection */
preferredChannel = parseInt(preferredChannel);
console.log(`AP 1 on Floor 1 will start on Channel ${preferredChannel}`);
alert(`AP 1 on Floor 1 will start on Channel ${preferredChannel}`);


/* Generating AP Floors */

if (preferredChannel == 1){

    finalLayout.push(11);

    finalLayout.push(pattern1);
    finalLayout.push(pattern2);
    finalLayout.push(pattern3);

} else if (preferredChannel == 6){

    finalLayout.push(1);

    finalLayout.push(pattern2);
    finalLayout.push(pattern3);
    finalLayout.push(pattern1);

} else if (preferredChannel == 11) {

    finalLayout.push(6);

    finalLayout.push(pattern3);
    finalLayout.push(pattern1);
    finalLayout.push(pattern2);
}

console.log(finalLayout);



/* Outputing Results to Console */
console.log(`
___________________________
THIS IS YOUR PATTERN OUTPUT:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    BASEMENT
    
¯¯¯¯¯¯¯-¯¯¯¯¯¯¯
${finalLayout[0]}-----[_]------
____-------____
_______-_______
      
    
    
    
    FLOOR 1
    
¯¯¯¯¯¯¯${finalLayout[1][3]}¯¯¯¯¯¯¯
${finalLayout[1][0]}-----[_]-----${finalLayout[1][1]}
____${finalLayout[1][4]}-----${finalLayout[1][5]}____
_______${finalLayout[1][2]}_______
    
    

    FLOOR 2
    
¯¯¯¯¯¯¯${finalLayout[2][3]}¯¯¯¯¯¯¯
${finalLayout[2][0]}-----[_]-----${finalLayout[2][1]}
____${finalLayout[2][4]}-----${finalLayout[2][5]}____
_______${finalLayout[2][2]}_______
    



    FLOOR 3
    
¯¯¯¯¯¯¯${finalLayout[3][3]}¯¯¯¯¯¯¯
${finalLayout[3][0]}-----[_]-----${finalLayout[3][1]}
____${finalLayout[3][4]}-----${finalLayout[3][5]}____
_______${finalLayout[3][2]}_______
     
    
    
`);

alert(`
___________________________
THIS IS YOUR PATTERN OUTPUT:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    BASEMENT
    
¯¯¯¯¯¯¯-¯¯¯¯¯¯¯
${finalLayout[0]}-----[_]------
____-------____
_______-_______
      
    
    
    
    FLOOR 1
    
¯¯¯¯¯¯¯${finalLayout[1][3]}¯¯¯¯¯¯¯
${finalLayout[1][0]}-----[_]-----${finalLayout[1][1]}
____${finalLayout[1][4]}-----${finalLayout[1][5]}____
_______${finalLayout[1][2]}_______
    
    

    FLOOR 2
    
¯¯¯¯¯¯¯${finalLayout[2][3]}¯¯¯¯¯¯¯
${finalLayout[2][0]}-----[_]-----${finalLayout[2][1]}
____${finalLayout[2][4]}-----${finalLayout[2][5]}____
_______${finalLayout[2][2]}_______
    



    FLOOR 3
    
¯¯¯¯¯¯¯${finalLayout[3][3]}¯¯¯¯¯¯¯
${finalLayout[3][0]}-----[_]-----${finalLayout[3][1]}
____${finalLayout[3][4]}-----${finalLayout[3][5]}____
_______${finalLayout[3][2]}_______
     
    
    
`);



alert(`Jacob Clouse, Copyright 2021, DO NOT SUE ME`)