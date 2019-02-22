function createPost() {
  let postAuthor = document.getElementById('postAuthor').value
  let postTitle = document.getElementById('postTitle').value
  let postBody = document.getElementById('postBody').value
  let pageTemplate = document.getElementById('page-template').innerHTML
  let pageTemplateFn = _.template(pageTemplate)
  let pageTemplateHTML = pageTemplateFn()
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate)
  let postTemplateHTML = postTemplateFn({ postAuthor: postAuthor,
  postTitle: postTitle, postBody: postBody})
  pageTemplateHTML.querySelector('post-div').appendChild(postTemplateHTML)
  let docBody = document.querySelector('body')
  docBody.innerHTML += pageTemplateHTML
}
function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById('comments');
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
  commentsDiv.innerHTML += templateHTML;
}
