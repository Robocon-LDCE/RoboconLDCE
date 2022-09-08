function upload1(){
    //get your image
    var image=document.getElementById('image').files[0];
    
    var folder=document.getElementById('folder').value;
    //get your image highlight
    // var post=document.getElementById('post').value;
    //setting my Website name   
    var Website=document.getElementById('website').value;
    //get image name
    var imageName=image.name;
    //get button status
    // var heading=document.getElementById('heading').value;
    //firebase storage reference
    var storageRef=firebase.storage().ref(`images/Sponsers/${folder}/${imageName}`);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref(`images/Sponsers/${folder}`).push().set({
                //  text:post,
                 Website:Website,
                //  heading:heading,
                 imageURL:downloadURL,
                 folder:folder
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                  //  document.getElementById('post-form').reset();
                   getdata1();
               }
           });
        });
    });
  
  }
  
  function deletenews_post(key){
    firebase.database().ref('news/'+key).remove();
    achievementgetdata();
  
  }
  


  window.onload=function(){
  
   try{ this.newsgetdata();}catch(e){}
   try{this.getdata1();}catch(e){}
   try{ this.getPastThemedata();}catch(e){}
   try{ this.getTeamMemberdata();}catch(e){}
 try{ this.getRegisterButtonStatus();}catch(e){}
   try{ this.getdata();}catch(e){}
   try{ this.achievementgetdata();}catch(e){}
   try{ this.achievementgetdata1();}catch(e){}
   try{ this.getupdatedata();}catch(e){}
   try{ this.getHardSkill();}catch(e){}
   try{ this.getSoftSkill();}catch(e){}
   try{ this.getMechanicalSkill();}catch(e){}
   try{ this.getHardwarePhotos();}catch(e){}
   try{ this.getSoftwarePhotos();}catch(e){}
   try{ this.getMechanicalPhotos();}catch(e){}

  }
  
  
  function getdata1(){
    try{
//   e.preventDefault();
  
    // for gold
  
    firebase.database().ref(`images/Sponsers/GOLD`).once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById(`posts`);
      try{
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML=
        "<a target='_blank' class='image featured' href='"+value.Website+"' style='border:none' >"+
        "<img src='"+value.imageURL+"' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
        //  "<button class='hidden2' id='"+key+"' onclick='delete_post(this.id)' style='margin-bottom:30px;' >Delete</button>"+
        "</div></div></a>"+posts_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
    firebase.database().ref(`images/Sponsers/GOLD`).once('value').then(function(snapshot){
      //get your posts1 div
      var posts1_div=document.getElementById(`posts1`);
      try{
      //remove all remaining data in that div
      posts1.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts1 div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts1_div.innerHTML=
        "<a class='image featured' href='"+value.Website+"' style='border:none' >"+
        "<img src='"+value.imageURL+"' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
         "<button class='btn btn-danger' id='"+key+"' onclick='deleteGold_post(this.id)' style='margin-bottom:30px;width:100px!important' >Delete</button>"+
        "</a>"+posts1_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
  
    
  
    //                     for silver  sponsers
  
    
    firebase.database().ref(`images/Sponsers/SILVER`).once('value').then(function(snapshot){
      //get your posts div
      var Silverposts_div=document.getElementById(`Silverposts`);
      try{
      //remove all remaining data in that div
      Silverposts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        Silverposts_div.innerHTML=
        "<a target='_blank' class='image featured' href='"+value.Website+"' style='border:none ;' >"+
        "<img src='"+value.imageURL+"' style='justify-content:center' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
        //  "<button class='hidden2' id='"+key+"' onclick='delete_post(this.id)' style='margin-bottom:30px;'>Delete</button>"+
       
        "</div></div></a>"+Silverposts_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
  
    
    firebase.database().ref(`images/Sponsers/SILVER`).once('value').then(function(snapshot){
      //get your posts div
      var Silverposts1_div=document.getElementById(`Silverposts1`);
      try{
      //remove all remaining data in that div
      Silverposts1.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        Silverposts1_div.innerHTML=
        "<a class='image featured' href='"+value.Website+"' style='border:none' >"+
        "<img src='"+value.imageURL+"' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
          "<button class='btn btn-danger' id='"+key+"' onclick='deleteSilver_post(this.id)' style='margin-bottom:30px;width:100px!important'>Delete</button>"+
       
        "</a>"+Silverposts1_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
  
  
  
  
  
  
  
  
  
    //                for bronze sponsers
  
    firebase.database().ref(`images/Sponsers/BRONZE`).once('value').then(function(snapshot){
      //get your posts div
      var Bronzeposts_div=document.getElementById(`Bronzeposts`);
      try{
      //remove all remaining data in that div
      Bronzeposts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        Bronzeposts_div.innerHTML=
        "<a target='_blank'class='image featured' href='"+value.Website+"' style='border:none'>"+
        "<img src='"+value.imageURL+"' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
          // "<button class='hidden2' id='"+key+"' onclick='delete_post(this.id)' style='margin-bottom:30px;display:none'>Delete</button>"+
       
        "</div></div></a>"+Bronzeposts_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
  
    
    firebase.database().ref(`images/Sponsers/BRONZE`).once('value').then(function(snapshot){
      //get your posts div
      var Bronzeposts1_div=document.getElementById(`Bronzeposts1`);
      try{
      //remove all remaining data in that div
      Bronzeposts1.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        Bronzeposts1_div.innerHTML=
        "<a class='image featured' href='"+value.Website+"' style='border:none;justify-content:center' >"+
        "<img src='"+value.imageURL+"' >"+
        // "<div ><h3 >"+value.heading+"</h3>"+
        // "<div ><p >"+value.text+"</p>"+
        //  "<button  onclick=window.open('"+value.Website+"') style='margin-bottom:30px;width:95%!important'>Learn more</button>"+
          "<button class='btn btn-danger' id='"+key+"' onclick='deleteBronze_post(this.id)' style='margin-bottom:30px;width:100px!important'>Delete</button>"+
       
        "</a>"+Bronzeposts1_div.innerHTML;
      }
    }
    catch(e){}
    
    });
  
  
  
    
  }
  catch(e){}
  finally{console.log("getdata1 worked")}
  
  }
  


  // delete button
  
  function deleteAchievement_post(key){
    firebase.database().ref('images/Achievement/'+key).remove();
    achievementgetdata();
    achievementgetdata1();
  
  }


  function deleteupdate_post(key){
    firebase.database().ref('images/update/'+key).remove();
    getupdatedata();
  
  }
  


  function deleteGold_post(key){
    // alert(key);
    firebase.database().ref('images/Sponsers/GOLD/'+key).remove();
    getdata1();
  
  }

  function deleteSilver_post(key){
    // alert(key);
    firebase.database().ref('images/Sponsers/SILVER/'+key).remove();
    getdata1();
  
  }
  function deleteBronze_post(key){
    // alert(key);
    firebase.database().ref('images/Sponsers/BRONZE/'+key).remove();
    getdata1();
  
  }



  function deleteTeamMember_post(key){
    firebase.database().ref('images/TeamMembers/'+key).remove();
    getTeamMemberdata();
  
  }
  
  
  function deletePastTheme_post(key){
    firebase.database().ref('images/PastTheme/'+key).remove();
    getPastThemedata();
  
  }

  function delete_post(key){
    
    firebase.database().ref('images/More/'+key).remove();
    getdata();

}
  

function deleteHardSkill_post(key){
    
  firebase.database().ref('HardSkill/'+key).remove();
  getHardSkill();

}

function deleteSoftSkill_post(key){
    
  firebase.database().ref('SoftSkill/'+key).remove();
  getSoftSkill();

}
function deleteMechanicalSkill_post(key){
    
  firebase.database().ref('MechanicalSkill/'+key).remove();
  getMechanicalSkill();

}


function deleteHardwarePhotos_post(key){
    
  firebase.database().ref('images/Hardware/'+key).remove();
  getHardwarePhotos();

}

function deleteSoftwarePhotos_post(key){
    
  firebase.database().ref('images/so/'+key).remove();
  getSoftwarePhotos();

}
function deleteMechanicalSkill_post(key){
    
  firebase.database().ref('MechanicalSkill/'+key).remove();
  getMechanicalPhotos();

}
  
  
  
  
  // for achievement
  
  function uploadAchievement(){
    //get your image
    var achievementImage=document.getElementById('achievementImage').files[0];
    
  
    var achievementHeading=document.getElementById('achievementHeading').value;
    //setting my Website name   
  
    var achievementImageName=achievementImage.name;
    //get button status
    var achievementPara=document.getElementById('achievementPara').value;
    //firebase storage reference
    var storageRef=firebase.storage().ref(`images/Achievement/${achievementImageName}`);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(achievementImage);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref(`images/Achievement`).push().set({
                 achievementPara:achievementPara,
                 
                 achievementHeading:achievementHeading,
  
                 achievementImageURL:downloadURL,
               
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                  //  document.getElementById('post-form').reset();
                   achievementgetdata();
                   achievementgetdata1();
               }
           });
        });
    });
  
  }
  
  
  
  function achievementgetdata(){
  
  try{
    // for gold
  
    firebase.database().ref(`images/Achievement`).once('value').then(function(snapshot){
      //get your posts div
      var achievementPosts_div=document.getElementById(`achievementPosts`);
      try{
      //remove all remaining data in that div
      achievementPosts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our achievementPosts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        achievementPosts_div.innerHTML=
        achievementPosts_div.innerHTML+
       "<div class='col-6 col-12-medium'>"+
       "<section>"+
       "<h3 style='text-align:center ;' class='icon solid fa-check'>"+value.achievementHeading+
       "</h3>"+
       "<p>"+value.achievementPara+
       "</p>"+
      //  "<button class='btn btn-danger' id='"+key+"' onclick='deleteAchievement_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
       "</section>"+
       "</div>" ;
      }}
      catch(e){}
      
    
    });



    firebase.database().ref(`images/Achievement`).once('value').then(function(snapshot){
      //get your posts div
      var achievementPosts_div=document.getElementById(`achievementPosts1`);
      try{
      //remove all remaining data in that div
      achievementPosts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our achievementPosts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        achievementPosts_div.innerHTML=
        achievementPosts_div.innerHTML+
       "<div class='col-6 col-12-medium'>"+
       "<section>"+
       "<h3 style='text-align:center ;' class='icon solid fa-check'>"+value.achievementHeading+
       "</h3>"+
       "<p>"+value.achievementPara+
       "</p>"+
       "<button class='btn btn-danger' id='"+key+"' onclick='deleteAchievement_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
       "</section>"+
       "</div>" ;
      }
    }
    catch(e){}
    
    });
   
  
  }
catch(e){}
finally{console.log("achievement data loaded")}}
  
  

  // for getting updated value of registeration button
  
  function getRegisterButtonStatus()
  {
try{
    firebase.database().ref('registerationButton/status').once('value').then(function(snapshot){

        //get data from firebase
        var data=snapshot.val();
        // alert(data);
        if (data=='true') {
            // alert("sahi hai");
           try{ registerButton.style.display="block";inverthidden.style.display="none";}
           catch(e){}
           
        } else {
          try{  registerButton.style.display="none";inverthidden.style.display="block";}
          catch(e){}
          
        }
    }
        )
  }
  
  catch(e){}
  }
  




  // for team members  about page

  function uploadTeamMembers(){
    //get your image
    var image=document.getElementById('TeamImage').files[0]; 
    var year=document.getElementById('year').value;
    //get image name
    var imageName=image.name;
    //get button status
    // var heading=document.getElementById('heading').value;
    //firebase storage reference
    var storageRef=firebase.storage().ref(`images/TeamMembers/${imageName}`);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref(`images/TeamMembers/`).push().set({
                //  text:post,
                 year:year,
                //  heading:heading,
                 imageURL:downloadURL,
                //  folder:folder
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getTeamMemberdata();
               }
           });
        });
    });
  
  }

   
  function getTeamMemberdata(){
    try{
    //   e.preventDefault();
      
        // for gold
      
        firebase.database().ref(`images/TeamMembers`).once('value').then(function(snapshot){
          //get your posts div
          var posts_div=document.getElementById(`TeamMemberPosts`);
          try{
          //remove all remaining data in that div
          TeamMemberPosts.innerHTML="";
          //get data from firebase
          var data=snapshot.val();
          console.log(data);
          //now pass this data to our posts div
          //we have to pass our data to for loop to get one by one
          //we are passing the key of that post to delete it from database
          for(let[key,value] of Object.entries(data)){
            posts_div.innerHTML=
           " <div class='col-4 col-12-medium'>"+
           " <section class='highlight'>"+
             " <a  class='image featured'><img style='max-height:200px ;'src='"+value.imageURL+"'  /></a>"+
             " <h3>Team Robocon LDCE ("+value.year+")</h3>"+
              
          "  </section>"+
         " </div>"+posts_div.innerHTML;
          }
          
          }
          catch(e){}
        });


      

        firebase.database().ref(`images/TeamMembers`).once('value').then(function(snapshot){
          //get your posts1 div
          try{
          var posts1_div=document.getElementById(`TeamMemberPosts1`);
          
          //remove all remaining data in that div
          TeamMemberPosts1.innerHTML="";
          //get data from firebase
          var data=snapshot.val();
          console.log(data);
          //now pass this data to our posts1 div
          //we have to pass our data to for loop to get one by one
          //we are passing the key of that post to delete it from database
          for(let[key,value] of Object.entries(data)){
            posts1_div.innerHTML=
            " <div class='col-4 col-12-medium'>"+
            " <section class='highlight'>"+
              " <a  class='image featured'><img style='max-height:200px ;'src='"+value.imageURL+"'  /></a>"+
              " <h3>Team Robocon LDCE ("+value.year+")</h3>"+
              "<button class='btn btn-danger' id='"+key+"' onclick='deleteTeamMember_post(this.id)' style='margin-bottom:30px;width:100px!important' >Delete</button>"+
           "  </section>"+
          " </div>"+posts1_div.innerHTML;
           }
          }
          catch(e){}
        
        });
      
      
      
      
      
        
   }
  catch(e){}
finally{console.log("team member data loaded")} }


//for past theme about page
      function uploadPastTheme(){
        //get your image
        var image=document.getElementById('PastImage').files[0];
        
        // var folder=document.getElementById('folder').value;
        //get your image highlight
        var post=document.getElementById('Pastpost').value;
        //setting my Website name   
        var Website=document.getElementById('link').value;
        //get image name
        var imageName=image.name;
        //get button status
        var heading=document.getElementById('Pastheading').value;
        //firebase storage reference
        var storageRef=firebase.storage().ref(`images/PastTheme/${imageName}`);
        //upload image to selected storage reference
        //make sure you pass image here
        var uploadTask=storageRef.put(image);
        //to get the state of image uploading....
        uploadTask.on('state_changed',function(snapshot){
             //get task progress by following code
             var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
             console.log("upload is "+progress+" done");
        },function(error){
          //handle error here
          console.log(error.message);
        },function(){
            //handle successfull upload here..
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
               //get your image download url here and upload it to databse
               //our path where data is stored ...push is used so that every post have unique id
               firebase.database().ref(`images/PastTheme`).push().set({
                     text:post,
                     Website:Website,
                     heading:heading,
                     imageURL:downloadURL,
                    //  folder:folder
               },function(error){
                   if(error){
                       alert("Error while uploading");
                   }else{
                       alert("Successfully uploaded");
                       //now reset your form
                      //  document.getElementById('post-form').reset();
                       getPastThemedata();
                   }
               });
            });
        });
      
      }



      function getPastThemedata(){
        try{
        //   e.preventDefault();
          
            // for gold
          
            firebase.database().ref(`images/PastTheme`).once('value').then(function(snapshot){
              //get your posts div
              try{
              var posts_div=document.getElementById(`PastPosts`);
              
              //remove all remaining data in that div
              PastPosts.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our posts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                posts_div.innerHTML=
               " <li>"+
													"<article class='box post-excerpt'>"+
														"<a  class='image left' href="+value.Website+" target='_blank'><img src='"+value.imageURL+"'  /></a>"+
														"<h3><a target='_blank' href="+value.Website+">"+value.heading+"</a></h3>"+
														"<p>"+value.text+" <br></p>"+
												"	</article>"+
										"</li>"
                +posts_div.innerHTML;
              }
            }
            
          catch(e){}
            
            });
          
          
            firebase.database().ref(`images/PastTheme`).once('value').then(function(snapshot){
              //get your posts div
              try{
              var Posts1_div=document.getElementById(`PastPosts1`);
              
              //remove all remaining data in that div
              PastPosts1.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our Posts1 div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                Posts1_div.innerHTML=
               " <li>"+
													"<article class='box post-excerpt'>"+
														"<a  class='image left' href="+value.Website+" target='_blank'><img src='"+value.imageURL+"'  /></a>"+
														"<h3><a target='_blank' href="+value.Website+">"+value.heading+"</a></h3>"+
														"<p>"+value.text+"<br></p>"+
												"	</article>"+
                        "<button class='btn btn-danger' id='"+key+"' onclick='deletePastTheme_post(this.id)' style='margin-bottom:30px;width:100px!important' >Delete</button>"+
										"</li>"
                +Posts1_div.innerHTML;
              }
            }
            catch(e){}
            
            });
      
          
          
          
            
      }
    catch(e){}
  finally{console.log("past theme data loaded")}
}

      





          //achievements for about page
          function achievementgetdata1(){
  
  
            // for gold
          
          
        try{
        
        
            firebase.database().ref(`images/Achievement`).once('value').then(function(snapshot){
              //get your posts div
              var achievementPosts_div=document.getElementById(`achievementPosts2`);
              try{
              //remove all remaining data in that div
              achievementPosts2.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our achievementPosts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                achievementPosts_div.innerHTML=
               " <div class='col-4 col-12-medium'>"+
							"	<section   class='highlight'>"+
								"	<a  class='image featured'><img style='max-height:200px ;' src="+value.achievementImageURL+" /></a>"+
								"	<h3>"+value.achievementHeading+" </h3>"+
							"	</section>"+
						"	</div>"+achievementPosts_div.innerHTML;
              }
            }
          catch(e){}
         


            });

            
            firebase.database().ref(`images/Achievement`).once('value').then(function(snapshot){
              //get your posts div
              var achievementPosts_div=document.getElementById(`achievementPosts2_1`);
              try{
              //remove all remaining data in that div
              achievementPosts2_1.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our achievementPosts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                achievementPosts_div.innerHTML=

               " <div class=col-4 col-12-medium>"+
							"	<section   class='highlight'>"+
								"	<a  class='image featured'><img src="+value.achievementImageURL+" /></a>"+
								"	<h3>"+value.achievementHeading+" </h3>"+
							"	</section>"+
              "<button class='btn btn-danger' id='"+key+"' onclick='deleteAchievement_post(this.id)' style='margin-bottom:30px;width:100px!important' >Delete</button>"+
              "	</div>"+

                achievementPosts_div.innerHTML;
              }}
              catch(e){}
              
            
            });
           
          
          }
        catch(e){}
      finally{console.log("achievements data 1 loaded")}}


          // for more 
          
          function upload(){
            //get your image
            var image=document.getElementById('moreimage').files[0];
            //get your image highlight
            var post=document.getElementById('morepost').value;
            //setting my folder name
            // var folder=document.getElementById('morefolder').value;
            //get image name
            var imageName=image.name;
            //firebase storage reference
            var storageRef=firebase.storage().ref(`images/More/${imageName}`);
            //upload image to selected storage reference
            //make sure you pass image here
            var uploadTask=storageRef.put(image);
            //to get the state of image uploading....
            uploadTask.on('state_changed',function(snapshot){
                 //get task progress by following code
                 var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                 console.log("upload is "+progress+" done");
            },function(error){
              //handle error here
              console.log(error.message);
            },function(){
                //handle successfull upload here..
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                   //get your image download url here and upload it to databse
                   //our path where data is stored ...push is used so that every post have unique id
                   firebase.database().ref(`images/More`).push().set({
                         text:post,
                         imageURL:downloadURL
                         
                   },function(error){
                       if(error){
                           alert("Error while uploading");
                       }else{
                           alert("Successfully uploaded");
                           //now reset your form
                          //  document.getElementById('post-form').reset();
                           getdata();
                       }
                   });
                });
            });
        
        }
    
        
        
        function getdata(){
          try{
            firebase.database().ref('images/More').once('value').then(function(snapshot){
              //get your posts div
              var posts_div=document.getElementById('moreposts');
              //remove all remaining data in that div
              try{
              moreposts.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our posts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                posts_div.innerHTML=
                
               " <div class=col-4 col-12-medium>"+
               "	<section   class='highlight'>"+
                 "	<a  class='image featured' style='border:none'><img src="+value.imageURL+" /></a>"+
                 "	<h3>"+value.text+" </h3>"+
               "	</section>"+
             "	</div>"
                +posts_div.innerHTML;
              }}
              
          catch(e){}
            
            });
        
        
            firebase.database().ref('images/More').once('value').then(function(snapshot){
                //get your posts div
                var posts_div=document.getElementById('moreposts1');
                //remove all remaining data in that div
                try{
                moreposts1.innerHTML="";
                //get data from firebase
                var data=snapshot.val();
                console.log(data);
                //now pass this data to our posts div
                //we have to pass our data to for loop to get one by one
                //we are passing the key of that post to delete it from database
                for(let[key,value] of Object.entries(data)){
                  posts_div.innerHTML=
                  " <div class=col-4 col-12-medium>"+
                  "	<section   class='highlight'>"+
                    "	<a  class='image featured' style='border:none'><img src="+value.imageURL+" /></a>"+
                    "	<h3>"+value.text+" </h3>"+
                  "	</section>"+
                  "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)' style='margin-bottom:30px;width:100px!important' >Delete</button>"+
									
                "	</div>"
                   +posts_div.innerHTML;
                }}
                catch(e){}
              
              });
        }
      catch(e){}
    finally{console.log("data loaded")}}
        
      




        //news page
        function newsgetdata(){
  
  try{
          firebase.database().ref(`news`).once('value').then(function(snapshot){
            //get your posts div
            var newsposts_div=document.getElementById(`newsposts`);
            try{
            //remove all remaining data in that div
            newsposts.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our achievementPosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              newsposts_div.innerHTML=
              newsposts_div.innerHTML+
             "<div class='col-6 col-12-medium'>"+
             "<section>"+
             "<h3 style='text-align:center ;font-size:16px;text-decoration:underline 2px' >"+value.heading+
             "</h3>"+
             "<p srtyle='font-size:10px'>"+value.para+
             "</p>"+
            //  "<button class='btn btn-danger' id='"+key+"' onclick='deletenews_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
             "</section>"+
             "</div>" ;
            }}
            catch(e){}
            
          
          });
      
      
          firebase.database().ref(`news`).once('value').then(function(snapshot){
            //get your posts div
            var newsposts1_div=document.getElementById(`newsposts1`);
           try{
            //remove all remaining data in that div
            newsposts1.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our achievementPosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              newsposts1_div.innerHTML=
              newsposts1_div.innerHTML+
             "<div class='col-6 col-12-medium'>"+
             "<section>"+
             "<h3 style='text-align:center ;font-size:16px;text-decoration:underline 2px' >"+value.heading+
             "</h3>"+
             "<p srtyle='font-size:10px'>"+value.para+
             "</p>"+
             "<button class='btn btn-danger' id='"+key+"' onclick='deletenews_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
             "</section>"+
             "</div>" ;
            }
          }
          catch(e){}
          
          });
         
        
        }
      catch(e){}
    finally{console.log("news data loaded")}}





        // updates
        function uploadUpdate(){
          //get your image
          var updateImage=document.getElementById('updateImage').files[0];
          
        
          var updateHeading=document.getElementById('updateHeading').value;
          //setting my Website name   
        
          var updateImageName=updateImage.name;
          //get button status
          var updatePara=document.getElementById('updatePara').value;
          //firebase storage reference
          var storageRef=firebase.storage().ref(`images/update/${updateImageName}`);
          //upload image to selected storage reference
          //make sure you pass image here
          var uploadTask=storageRef.put(updateImage);
          //to get the state of image uploading....
          uploadTask.on('state_changed',function(snapshot){
               //get task progress by following code
               var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
               console.log("upload is "+progress+" done");
          },function(error){
            //handle error here
            console.log(error.message);
          },function(){
              //handle successfull upload here..
              uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                 //get your image download url here and upload it to databse
                 //our path where data is stored ...push is used so that every post have unique id
                 firebase.database().ref(`images/update`).push().set({
                       updatePara:updatePara,
                       
                       updateHeading:updateHeading,
        
                       updateImageURL:downloadURL,
                     
                 },function(error){
                     if(error){
                         alert("Error while uploading");
                     }else{
                         alert("Successfully uploaded");
                         //now reset your form
                        //  document.getElementById('post-form').reset();
                         getupdatedata();
                     }
                 });
              });
          });
        
        }
        
        
        
        function getupdatedata(){
        
        
       try{
          firebase.database().ref(`images/update`).once('value').then(function(snapshot){
            //get your posts div
            var updatePosts_div=document.getElementById(`updateposts`);
            try{
            //remove all remaining data in that div
            updateposts.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our updatePosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              updatePosts_div.innerHTML=
              " <div class=col-4 col-12-medium>"+
							"	<section   class='highlight'>"+
								"	<a  class='image featured'><img src="+value.updateImageURL+" /></a>"+
								"	<h3>"+value.updateHeading+" </h3>"+
							"	</section>"+
						"	</div>"+

                updatePosts_div.innerHTML;
            }
          }
          catch(e){}
          
          });
      
      
      
          firebase.database().ref(`images/update`).once('value').then(function(snapshot){
            //get your posts div
            var updatePosts_div=document.getElementById(`updateposts1`);
            try{
            //remove all remaining data in that div
            updateposts1.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our updatePosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              updatePosts_div.innerHTML=
              " <div class=col-4 col-12-medium>"+
							"	<section   class='highlight'>"+
								"	<a  class='image featured'><img src="+value.updateImageURL+" /></a>"+
								"	<h3>"+value.updateHeading+" </h3>"+
							"	</section>"+
              "<button class='btn btn-danger' id='"+key+"' onclick='deleteupdate_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
						"	</div>"+

                updatePosts_div.innerHTML;
            }}
            catch(e)
            {

            }
            
          
          });
         
        
         } 
        catch(e){}
      finally{
        console.log("updates loaded")
      }}


        //registered user data
        function uploadRegisterData()
	   {
		var contactFormDB = firebase.database().ref("RegisterationData");
var FirstName=document.getElementById('FirstName').value;
var MiddleName=document.getElementById('MiddleName').value;
var LastName=document.getElementById('LastName').value;
var email=document.getElementById('email').value;
var PhoneNumber=document.getElementById('PhoneNumber').value;
var Bday=document.getElementById('Bday').value;
var gender=document.getElementById('gender').value;
var sem=document.getElementById('sem').value;
var address=document.getElementById('address').value;
var address2=document.getElementById('address2').value;
var city=document.getElementById('city').value;
var state=document.getElementById('state').value;
	contactFormDB.push({
	 FirstName:FirstName,
   MiddleName:MiddleName,
   LastName:LastName,
   email:email,
   PhoneNumber,
   Bday:Bday,
   gender:gender,
   sem:sem,
   address:address,
   address2:address2,
   city:city,
   state:state,
	   })
	newsgetdata();
	
	};


  //hardware photos
  function uploadHardwarePhoto(){
    //get your image
    var HardwareImage=document.getElementById('HardwarePhoto').files[0];
    
    //setting my Website name   
  
    var HardwareImageName=HardwareImage.name;
    //get button status
    //firebase storage reference
    var storageRef=firebase.storage().ref(`images/Hardware/${HardwareImageName}`);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(HardwareImage);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref(`images/Hardware`).push().set({
               
  
                HardwareImageURL:downloadURL,
               
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                  //  document.getElementById('post-form').reset();
                  getHardwarePhotos();
               }
           });
        });
    });
  
  }
  
    function getHardwarePhotos(){
  
  
            // for gold
          
          
        try{
        
        
            firebase.database().ref(`images/Hardware`).once('value').then(function(snapshot){
              //get your posts div
              var HardwarePosts_div=document.getElementById(`HardwarePhotoposts`);
              try{
              //remove all remaining data in that div
              HardwarePhotoposts.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our HardwarePosts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                HardwarePosts_div.innerHTML=

               " <div class=col-4 col-12-medium>"+
							"	<section   class='highlight'>"+
								"	<img class='image featured' src="+value.HardwareImageURL+" /></a>"+
							"	</section>"+            
						"	</div>"+

            

              HardwarePosts_div.innerHTML;
              }
            }
            catch(e){}
              
            
            });


            firebase.database().ref(`images/Hardware`).once('value').then(function(snapshot){
              //get your posts div
              var HardwarePosts_div=document.getElementById(`HardwarePhotoposts1`);
              try{
              //remove all remaining data in that div
              HardwarePhotoposts1.innerHTML="";
              //get data from firebase
              var data=snapshot.val();
              console.log(data);
              //now pass this data to our HardwarePosts div
              //we have to pass our data to for loop to get one by one
              //we are passing the key of that post to delete it from database
              for(let[key,value] of Object.entries(data)){
                HardwarePosts_div.innerHTML=

               " <div class=col-4 col-12-medium>"+
							"	<section   class='highlight'>"+
								"	<img class='image featured' src="+value.HardwareImageURL+" /></a>"+
             "<button class='btn btn-danger' id='"+key+"' onclick='deleteHardwarePhotos_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
							"	</section>"+
						"	</div>"+

            

              HardwarePosts_div.innerHTML;
              }
            }
            catch(e){}
            
            });

            
           
          
    }
  catch(e){}
finally{console.log("hardware photos loaded")}}

//software photos
function uploadSoftwarePhoto(){
  //get your image
  var SoftwareImage=document.getElementById('SoftwarePhoto').files[0];
  
  //setting my Website name   

  var SoftwareImageName=SoftwareImage.name;
  //get button status
  //firebase storage reference
  var storageRef=firebase.storage().ref(`images/Software/${SoftwareImageName}`);
  //upload image to selected storage reference
  //make sure you pass image here
  var uploadTask=storageRef.put(SoftwareImage);
  //to get the state of image uploading....
  uploadTask.on('state_changed',function(snapshot){
       //get task progress by following code
       var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
       console.log("upload is "+progress+" done");
  },function(error){
    //handle error here
    console.log(error.message);
  },function(){
      //handle successfull upload here..
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
         //get your image download url here and upload it to databse
         //our path where data is stored ...push is used so that every post have unique id
         firebase.database().ref(`images/Software`).push().set({
             

              SoftwareImageURL:downloadURL,
             
         },function(error){
             if(error){
                 alert("Error while uploading");
             }else{
                 alert("Successfully uploaded");
                 //now reset your form
                //  document.getElementById('post-form').reset();
                getSoftwarePhotos();
             }
         });
      });
  });

}

  function getSoftwarePhotos(){

      try{
          firebase.database().ref(`images/Software`).once('value').then(function(snapshot){
            //get your posts div
            var SoftwarePosts_div=document.getElementById(`SoftwarePhotoposts`);
            try{
            //remove all remaining data in that div
            SoftwarePhotoposts.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our SoftwarePosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              SoftwarePosts_div.innerHTML=

             " <div class=col-4 col-12-medium>"+
            "	<section   class='highlight'>"+
              "	<img class='image featured' src="+value.SoftwareImageURL+" /></a>"+
            "	</section>"+
          "	</div>"+

          

            SoftwarePosts_div.innerHTML;
            }
          }
          catch(e){}
          
          });

          firebase.database().ref(`images/Software`).once('value').then(function(snapshot){
            //get your posts div
            var SoftwarePosts_div=document.getElementById(`SoftwarePhotoposts1`);
            try{
            //remove all remaining data in that div
            SoftwarePhotoposts1.innerHTML="";
            //get data from firebase
            var data=snapshot.val();
            console.log(data);
            //now pass this data to our SoftwarePosts div
            //we have to pass our data to for loop to get one by one
            //we are passing the key of that post to delete it from database
            for(let[key,value] of Object.entries(data)){
              
              SoftwarePosts_div.innerHTML=

             " <div class=col-4 col-12-medium>"+
            "	<section   class='highlight'>"+
              "	<img class='image featured' src="+value.SoftwareImageURL+" /></a>"+
             "<button class='btn btn-danger' id='"+key+"' onclick='deleteSoftwarePhotos_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
            "	</section>"+
          "	</div>"+

          

            SoftwarePosts_div.innerHTML;
            }
          }
          catch(e){}
          
          });

         
        }
        catch(e){}
        finally{console.log("software images loaded")}
        
        }



        // Mechanical photos
        function uploadMechanicalPhoto(){
          //get your image
          var MechanicalImage=document.getElementById('MechanicalPhoto').files[0];
          
          //setting my Website name   
        
          var MechanicalImageName=MechanicalImage.name;
          //get button status
          //firebase storage reference
          var storageRef=firebase.storage().ref(`images/Mechanical/${MechanicalImageName}`);
          //upload image to selected storage reference
          //make sure you pass image here
          var uploadTask=storageRef.put(MechanicalImage);
          //to get the state of image uploading....
          uploadTask.on('state_changed',function(snapshot){
               //get task progress by following code
               var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
               console.log("upload is "+progress+" done");
          },function(error){
            //handle error here
            console.log(error.message);
          },function(){
              //handle successfull upload here..
              uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                 //get your image download url here and upload it to databse
                 //our path where data is stored ...push is used so that every post have unique id
                 firebase.database().ref(`images/Mechanical`).push().set({
                     
        
                      MechanicalImageURL:downloadURL,
                     
                 },function(error){
                     if(error){
                         alert("Error while uploading");
                     }else{
                         alert("Successfully uploaded");
                         //now reset your form
                        //  document.getElementById('post-form').reset();
                        getMechanicalPhotos();
                     }
                 });
              });
          });
        
        }
        
          function getMechanicalPhotos(){
        
              try{
                  firebase.database().ref(`images/Mechanical`).once('value').then(function(snapshot){
                    //get your posts div
                   try{ var MechanicalPosts_div=document.getElementById(`MechanicalPhotoposts`);
                    
                    //remove all remaining data in that div
                    MechanicalPhotoposts.innerHTML="";
                    //get data from firebase
                    var data=snapshot.val();
                    console.log(data);
                    //now pass this data to our MechanicalPosts div
                    //we have to pass our data to for loop to get one by one
                    //we are passing the key of that post to delete it from database
                    for(let[key,value] of Object.entries(data)){
                      MechanicalPosts_div.innerHTML=
        
                     " <div class=col-4 col-12-medium>"+
                    "	<section   class='highlight'>"+
                      "	<img class='image featured' src="+value.MechanicalImageURL+" /></a>"+
                    "	</section>"+
                  "	</div>"+
        
                  
        
                    MechanicalPosts_div.innerHTML;
                    }}catch(e){}
                    
                  
                  });

                  
                  firebase.database().ref(`images/Mechanical`).once('value').then(function(snapshot){
                    //get your posts div
                    var MechanicalPosts_div=document.getElementById(`MechanicalPhotoposts1`);
                    
                    //remove all remaining data in that div
                   try{
                     MechanicalPhotoposts1.innerHTML="";
                    //get data from firebase
                    var data=snapshot.val();
                    console.log(data);
                    //now pass this data to our MechanicalPosts div
                    //we have to pass our data to for loop to get one by one
                    //we are passing the key of that post to delete it from database
                    for(let[key,value] of Object.entries(data)){
                      MechanicalPosts_div.innerHTML=
        
                     " <div class=col-4 col-12-medium>"+
                    "	<section   class='highlight'>"+
                      "	<img class='image featured' src="+value.MechanicalImageURL+" /></a>"+
                      "<button class='btn btn-danger' id='"+key+"' onclick='deleteMechanicalPhotos_post(this.id)' style='margin-bottom:30px'>Delete</button>"+
                    "	</section>"+
                  "	</div>"+
        
                  
        
                    MechanicalPosts_div.innerHTML;
                    }
                  }catch(e){}
                  
                  });
        
                  
                
                 
                
                }catch(e){}finally{console.log("mechanical photos loaded")}}