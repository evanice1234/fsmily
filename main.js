var images = 
["https://pbs.twimg.com/profile_images/1272114242607439872/dunFbc6g_400x400.jpg",
 "https://media-exp1.licdn.com/dms/image/C4D03AQEe-GTMxupwNg/profile-displayphoto-shrink_200_200/0/1516313304677?e=1632960000&v=beta&t=aTs-T6vKhJVP9z42nAxZ67mnmXmFSZ0lgh9MXrKEavM",
  "https://yt3.ggpht.com/5dCyLGkgZkyKlfPm5WN8E6WAZZ9kpfXEJTDgp1KZaaru2M8cJ9J1XFZlgFiAk416v6uos2N5dg=s900-c-k-c0x00ffffff-no-rj" ,
   "blob:https://web.whatsapp.com/1406356f-c822-49fa-b9c2-f7cbdab0a143"];

var names = ["Family", "my Mom = Moumita" , "Me = Eva" , "My Dad = Bhaskar"];

var i=0;
 function update(){


     i++;
     
     var number_of_family_members_in_array = 4;
     if(i>number_of_family_members_in_array){
         i=0;
     }
     var updatedImages = images[i];
     var updatedNames = names[i];

     document.getElementById("family_member_image").src = updatedImages;
     document.getElementById("family_member_name").innerHTML = updatedNames;
 }