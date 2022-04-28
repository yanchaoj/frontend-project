
const searchBtn=document.getElementById('submit')

 searchBtn.addEventListener("click",userinput)
 function userinput()
 {
    const inputText = document.querySelector('input').value;
    console.log(inputText)
    $.get(`https://api.tvmaze.com/search/people?q=${inputText}`,function(data){
      console.log(data)
      if (inputText === ""){
        alert("Please input a celebrity name!");
      }
      else {
        var results = document.querySelector('#results');
        results.innerHTML = "";
        for (var i = 0; i<data.length-1; i++) {
          var current = data[i];
          var span = document.createElement('span');
          var h1 = document.createElement('h1');
                h1.className = "title";
                
                if (current.person.name) { h1.textContent = current.person.name;}
                else { console.log("No info");}

                span.className = 'result';
                span.append(h1);

          var dob=document.createElement('div')
              dob.classname="birthday";
              dob.textContent=current.person.birthday;
              span.append(dob);

          var region=document.createElement('div')
              region.classname="country";
              
              if (current.person.country) { region.textContent=current.person.country.name;}
              else { console.log("No info");}

              span.append(region);
         
          var img = document.createElement('img');
              img.className = 'image';
              if (current.person.image) {img.setAttribute('src', `${current.person.image.medium}`);}
              else { console.log('No Info')}
              span.append(img);
         
                  
          var a = document.createElement('a');
              a.href = current.person.url;
              a.innerText = "View Personal Info";
              span.append(a);

              results.append(span);
        }
      }
     
    })
  
  }


 




$.get("https://api.tvmaze.com/search/people?q=lauren", (data) => {
  console.log(data);
  //   var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
  console.log(results);
});
 
