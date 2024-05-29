
document.addEventListener('DOMContentLoaded', function() {
    const upvoteBtns = document.querySelectorAll('.upvote-btn');
  
    upvoteBtns.forEach(function(upvoteBtn) {
      const upvoteCount = upvoteBtn.querySelector('.upvote-count');
      let isUpvoted = false;
      let originalBgColor = upvoteBtn.style.backgroundColor;
      let originalArrowColor = upvoteBtn.querySelector('i').style.color;
  
      upvoteBtn.addEventListener('click', function() {
        if (isUpvoted) {
          // If already upvoted, decrement count and change color
          upvoteCount.textContent = parseInt(upvoteCount.textContent) - 1;
          upvoteBtn.style.backgroundColor = originalBgColor;
          upvoteBtn.querySelector('i').style.color = originalArrowColor;
          isUpvoted = false;
        } else {
          // If not upvoted, increment count and change color
          upvoteCount.textContent = parseInt(upvoteCount.textContent) + 1;
          upvoteBtn.style.backgroundColor = '#008000';
          upvoteBtn.querySelector('i').style.color = '#ffffff';
          isUpvoted = true;
        }
      });
    });
  });
  
  
  // user adding comments function (localStorage implemented)
  
  function addComment() {
    var commentInput = document.getElementById("commentInput");
    var comment = commentInput.value;
  
  
    var commentId = "comment_" + Date.now();
  
    var commentObject = {
      id: commentId,
      content: comment,
      timestamp: new Date().toLocaleString()
    };
  
    localStorage.setItem(commentId, JSON.stringify(commentObject));
  
  
    displayComment(commentObject);
  
  
    commentInput.value = "";
  }
  
  function displayComment(commentObject) {
    var commentsContainer = document.getElementById("commentsContainer");
  
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <img src="user1-icon.png" alt="User Icon">
      <div class="comment-info">
        <h3>User</h3>
        <p>Posted on ${commentObject.timestamp}</p>
      </div>
      <p>${commentObject.content}</p>
    `;
  
    commentsContainer.appendChild(commentElement);
  }
  
  
  function loadComments() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith("comment_")) {
        var commentObject = JSON.parse(localStorage.getItem(key));
        displayComment(commentObject);
      }
    }
  }
  
  window.onload = loadComments;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function displayComment(commentObject) {
    var commentsContainer = document.getElementById("commentsContainer");
  
    var commentElement = document.createElement("div");
    var commentId = "comment_" + commentObject.id;
    commentElement.id = commentId;
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <img src="user1-icon.png" alt="User Icon">
      <div class="comment-info">
        <h3>User</h3>
      </div>
      <p>${commentObject.content}</p>
      <button class="delete-comment" onclick="deleteComment('${commentId}', '${commentObject.id}')">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
  
    commentsContainer.appendChild(commentElement);
  }
  
  
  function deleteComment(commentElementId, commentId) {
    localStorage.removeItem(commentId);
    var commentElement = document.getElementById(commentElementId);
    commentElement.remove();
  }
  
  
  