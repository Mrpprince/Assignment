/*The First Program Is Strat Here*/
function feetToMile(feet)
{
    var mile = feet/5280;
    return mile;

}
let GivenFeet=5;
var Result_Of_Convertion_Mile =feetToMile(GivenFeet);
console.log("The Convert Of Feet Value Is ",Result_Of_Convertion_Mile,"Mile");


/*The First Program Is End Here*/



/*The Second Program Is Strat Here*/
 function woodCalculator (NumOfchair,NumOftable,NumOfbed)
 {
     var Chair=NumOfchair*1;
     var Table =NumOftable*3;
     var Bed=NumOfbed*5;
     var total=Chair+Table+Bed;
     return total;
}
let Given_NumOfchair=3;
let  Given_NumOftable=5;
let  Given_NumOfbed=7;
let Result_Of_Total_Wood=woodCalculator(Given_NumOfchair,Given_NumOftable,Given_NumOfbed);
console.log("The Total Number Of Wood  ",Result_Of_Total_Wood," cubic");

/*The Second Program Is End Here*/



/*The Third Program Is Strat Here*/

function brickCalculator(Num_Of_Floor)
{
    if (Num_Of_Floor <=10)
    {
       var NumOfBricks=15*1000*Num_Of_Floor;
    }
    else if (Num_Of_Floor=>11 && Num_Of_Floor<=20)
    {
        var NumOfBricks=150000+((Num_Of_Floor-10)*1000*12);
    }
    else  if (Num_Of_Floor>=21)
    {
        var NumOfBricks=2700+((Num_Of_Floor-20)*1000*10);
    }
    return NumOfBricks;
}
let  Giver_value_Of_Floor=10;

var Total_Number_Of_Bricks=brickCalculator(Giver_value_Of_Floor);

console.log("Total Number Of Bricks ",Total_Number_Of_Bricks);


/*The Third Program Is End Here*/



/*The Fourth Program Is Start Here*/





   function tinyFriend(friend)
   {
    var min = friend[0];
    for (var i=0 ; i<friend.length ; i++)
    {
    

        if (min.length > friend[i].length)
        {
            min= friend[i].length;
        }
       
    }
    return min;
    }
    
   var friends=tinyFriend(["plabon","koishik","orion","amurta","rafi"]);
    
console.log(tinyFriend(friends));