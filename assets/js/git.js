$( document ).ready(function() {
    console.log( "Git Commit ready!" );

      var repoURL ="https://api.github.com/repos/creativeautomaton/creativeautomaton.github.io";

function getSHA(repoURL){
      //get branch SHA
        $.ajax({
            type: "GET",
            url: repoURL + "/git/refs/heads/master",
            contentType: "application/json",
            dataType: "json",
          })
          .done(function( data ) {
            console.log( data.object.sha );
            var sha = data.object.sha;
            getCommit(sha);
          });
}
function getCommit(sha){
      $.ajax({
          type: "GET",
          url: repoURL + "/git/commits/" + sha,
          contentType: "application/json",
          dataType: "json",
        })
        .done(function( data ) {
          console.log( data );
          var parents = data.parents;
          var treeSHA = data.tree.sha;
          var author = data.author;
          var parentsArray = {};
           $(data.parents).each(function(i) {
             parentsArray[i] = parents[i].sha;
          });
           console.log(parentsArray);
           console.log(treeSHA);
           console.log(author);
           createCommit(parentsArray, treeSHA, author, repoURL, sha );
        });
}
function createCommit(parentsArray, treeSHA, author, repoURL, sha ){

        console.log(parentsArray, treeSHA, author, repoURL, sha );
        //Create a Commit
         $.ajax({
             type: "POST",
             url: repoURL + "/git/commits/" + sha,
             contentType: "application/json",
             dataType: "json",
             data: JSON.stringify({
                   "message": "wtf boom!",
                   "author": {
                     "name": author.name,
                     "email": author.email,
                     "date": author.date
                   },
                   "parents": [
                     parentsArray
                   ],
                   "tree": treeSHA
              })
           })
          .error( function(error){
          console.log(error);
          })
           .done(function( data ) {
             console.log( data );
           });
}

 getSHA(repoURL);
});
