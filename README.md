# apChannelGeneratorAlbanyResHall_V.1
The initial approach that I used to generate AP channels for the Albany Res Hall

---------

This program will assist in mapping AP channel settings on a building with 4 floors
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
