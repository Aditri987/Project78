var images = ["family.jpg","jit.jpg" , "indrani.jpg" , "aditri.jpg" , "baby_ayra.jpg"];
var names = ["Family Book","Jit Sen", "Indrani Ghosh Chowdury", "Aditri Sen", "Ayra Sen"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
    //alert("Image :"+updatedImage+" Name:" + updatedName);
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
