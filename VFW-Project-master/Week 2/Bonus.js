	
//BONUS DUE WEEK 2
 
/*Goal: Find the planets that the kerbal has NOT visited. You may edit this code
or start from scratch using the kerbal object and planet array below as the source of your data.
The kerbal object and planet array should not be modified or deleted.
 
Bonus of 10pts will be applied to project 2 grade only if turned in on time with project 2.
Can not exceed a grade of 100. This is a pass/fail bonus.
*/
 
//START OF DO NOT MODIFY //////////////////////////////
var kerbal = {
 "name": "Bob",
 "weight": 50,
 "courage": 70,
 "stupidity": 100,
 "visited": ["Kerbin", "Mun"]
};
 
var planets = ["Kerbin", "Duna", "Eve", "Mun"];
//END OF DO NOT MODIFY //////////////////////////////
 
var notVisited = planets.concat(kerbal.visited)

for(x = 0; x < notVisited.length; x++) {
    var curItem = notVisited[x];
    var foundCount = 0;
    // search array for item
    for(y = 0; y < notVisited.length; y++) {
        if (notVisited[y] == notVisited[x])
            foundCount++;
    }
    if(foundCount > 1) {
            for(z = 0; z < notVisited.length; z++) {
            if(notVisited[z] == curItem) {                
                notVisited.splice(z, 1);
                z--;
            }
        }            
    }
}
 
console.log(notVisited) 
