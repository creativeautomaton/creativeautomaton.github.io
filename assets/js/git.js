$( document ).ready(function() {
    console.log( "Git Commit ready!" );
    var repoURL ="https://api.github.com/repos/creativeautomaton/creativeautomaton.github.io";
    var clientID = "Iv1.e7d53c09d763fb72";
    var clientSecret = "45080ffb34402b42d515b951926f285f0f9a51ac";
    var accesstoken =  "0edbdfc2c1e20c0ff037d61317977f5213ca9d45";
    var user = 'creativeautomaton';
    var pass = 'zjkhdc00';

    var repo = "https://" + user + ":" +  pass + "@github.com/creativeautomaton/creativeautomaton.github.io/"

// git remote
// set-url origin https://christinaswyers:test2017@github.com/christinaswyers/christinaswyers.github.io.git


function getRef(repoURL){
      //get branch SHA
        $.ajax({
            type: "GET",
            url: repoURL + "/git/refs/heads/master",
            contentType: "application/json",
            dataType: "json",
          })
          .done(function( data ) {
            console.log( data );
            var sha = data.object.sha;
            getCommit(sha, repoURL);
          });
}

function getCommit(sha, repoURL){
      $.ajax({
          type: "GET",
          url: repoURL + "/git/commits/" + sha,
          contentType: "application/json",
          dataType: "json"
        })
        .done(function(data) {
            // console.log( data );
            createCommit(data);
            // var parents = data.parents;
            // var treeSHA = data.tree.sha;
            // var author = data.author;
            // var parentsArray = {};
            // $(data.parents).each(function(i) {
            //    parentsArray[i] = parents[i].sha;
            // });
            //  console.log(parentsArray);
            //  console.log(treeSHA);
            //  console.log(author);
            //  createCommit(parentsArray, treeSHA, author, repoURL, sha );
        });
      // createBlob(sha);

}
function createCommit(data){
        console.log(data.parents);
        console.log( JSON.stringify(data.author) );
        console.log(data);

        var author = JSON.stringify(data.author);
        var parents = data.parents[0].sha;
        var tree = JSON.stringify(data.tree.sha);


        console.log(parents);
        //Create a Commit
         $.ajax({
             type: "POST",
             url: repoURL + "/git/commits/" + data.sha,
             contentType: "application/json",
             dataType: "json",
             data: JSON.stringify(
                  {
                    "message": "my commit message",
                    "author": {
                      author
                    },
                    "parents": [
                      parents
                    ],
                    "tree": tree
                  }
              )
           })
           .done(function( data ) {
             console.log( data );
           }).fail(function (data) {
               console.log('failed: ');
              console.log(data);
         });
}

function createBlob(sha){
      console.log(sha);
      var accesstoken =  "9ee638d9227e1af5ec83a5f3ace6ded18497c203";
      var uploadURL = "https://api.github.com/users/creativeautomaton/creativeautomaton.github.io/git/blobs/access_token=" + accesstoken + "/:" + sha;
      // Create a Blob
      $.ajax({
            type: "POST",
            url: uploadURL,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "message": "my commit message",
                "author": {
                  "name": "Scott Chacon",
                  "email": "schacon@gmail.com",
                  "date": "2008-07-09T16:13:30+12:00"
                },
                "parents": [
                  "7d1b31e74ee336d15cbd21741bc88a537ed063a0"
                ],
                "tree": "827efc6d56897b048c772eb4087f854f46256132"
              })
// , headers: { 'Authorization': accesstoken },
        })
        .done(function( data ) {
          console.log( data );
        }).fail(function (data) {
            console.log('failed: ');
           console.log(data);
      });
}

getRef(repoURL);

// function getOAuth(clientID, clientSecret, user, pass){
//       //get authorize
//       console.log('loaded get0auth()  '+ clientID);
//         $.ajax({
//             type: "POST",
//             url: "https://" + user + ":" +  pass + "@github.com/creativeautomaton/creativeautomaton.github.io/",
//             headers: {
//               "username": "creativeautomaton",
//               "password": "zjkhdc00",
//             },
//             beforeSend: function(xhr) {
//               xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password"));
//             },
//             data: '{"creativeautomaton":"zjkhdc00"}',
//             processData: false,
//             accepts: "application/json"
//           }).done(function (data) {
//             console.log('success: ');
//             console.log(data);
//             // code to handle succesful response
//           }).fail(function (data) {
//               console.log('failed: ');
//              console.log(data);
//             // code to handle error response
//         });
//         // $.ajax({
//         //     type: "GET",
//         //     url: "http://github.com/login/oauth/authorize",
//         //     contentType: "application/json",
//         //     dataType: "json",
//         //     data: JSON.stringify(
//         //          {
//         //            "client_id": "Iv1.e7d53c09d763fb72",
//         //            "state": "fvfjhghjfdghdhgdhgfhgf",
//         //            "redirect_uri": "https://www.google.com"
//         //          })
//         //   })
//         //   .fail(function( data ) {
//         //     console.log( data );
//         //   })
//         //   .done(function( data ) {
//         //     console.log( data );
//         //   });
// }
// getOAuth(clientID, clientSecret);

// function getSHA(repoURL){
//       //get branch SHA
//         $.ajax({
//             type: "GET",
//             url: repoURL + "/git/refs/heads/master",
//             contentType: "application/json",
//             dataType: "json",
//           })
//           .done(function( data ) {
//             console.log( data.object.sha );
//             var sha = data.object.sha;
//             getCommit(sha);
//           });
// }
//
// function createBlob(repoURL, accesstoken){
//   // Create a Blob
//
//       $.ajax({
//           type: "POST",
//           url: repoURL + "/blobs",
//           contentType: "application/json",
//           dataType: "json",
//           data: JSON.stringify({
//               "content": "Content of the blob",
//               "encoding": "utf-8"
//           }),
//           headers: { 'Authorization': accesstoken },
//         })
//         .done(function( data ) {
//           console.log( data );
//         }).fail(function (data) {
//             console.log('failed: ');
//            console.log(data);
//           // code to handle error response
//       });
// }
// // createBlob(repoURL);
// function getCommit(sha){
//       $.ajax({
//           type: "GET",
//           url: repoURL + "/git/commits/" + sha,
//           contentType: "application/json",
//           dataType: "json"
//         })
//         .done(function( data ) {
//           console.log( data );
//           var parents = data.parents;
//           var treeSHA = data.tree.sha;
//           var author = data.author;
//           var parentsArray = {};
//            $(data.parents).each(function(i) {
//              parentsArray[i] = parents[i].sha;
//           });
//            console.log(parentsArray);
//            console.log(treeSHA);
//            console.log(author);
//            createCommit(parentsArray, treeSHA, author, repoURL, sha );
//         });
// }
//

 // getSHA(repoURL);
});
