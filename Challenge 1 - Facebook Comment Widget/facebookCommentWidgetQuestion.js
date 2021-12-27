/*

Name: Himanshu Kanojiya
Github: https://github.com/HimanshuKanojiya
LinkedIn: https://www.linkedin.com/in/himanshukanojiya98/
Start Time: 19:28 PM - 27 December 2021

Challenge: Create Facebook Comment Widget using HTML, CSS, and JavaScript.
  [+] User should be able to give comment
  [+] User should be able to reply to the existing comment (no limits of reply)
  [+] User should be able to delete the comment

  CSS:
    [+] Normal CSS styling will be enough!

*/

function __replyToComment(event){
    event.preventDefault();
    event.target.parentElement.nextElementSibling.style.display = "flex";
}

function __removeComment(event){
    event.preventDefault();
    event?.target?.parentElement?.parentElement?.remove();
}

function __addNewComment(value){
    if(!value) return;
    return `
        <li>
            <div class="profileIcon">
                <img src="./userIcon.png" alt="">
                <p>${value}</p>
            </div>
            <div class="commentOptions">
                <a class="commentReplyLink" onclick="__replyToComment(event)" href="#">Reply</a>
                <a class="DeleteCommentLink" onclick="__removeComment(event)" href="#">Delete</a>
            </div>
            <input type="text" value="" name="reply" id="reply" onkeyup="__replyToExistingComment(event)">
        </li>
    `
}

function __replyToExistingComment(event){
    event.preventDefault();
    if(event.key != "Enter") return
    event.target.style.display = "none";
    event.target.parentElement.innerHTML += `
        <ul>
            ${__addNewComment(event.target.value)}
        </ul>
    `
}


function commentSection(){
    const commentWidgetPanel = document.getElementById("commentWidgetPanel");
    const givenComments = document.getElementById("givenComments");

    const cleanUpCommentPanel = () => {
        commentWidgetPanel.value = ""
    }

    const setCommentLister = () => {
        commentWidgetPanel.onkeyup = (event) => {
            event.preventDefault();
            if(event.key != "Enter") return
            givenComments.innerHTML += `
                <ul>
                    ${__addNewComment(commentWidgetPanel.value)}
                </ul>
            `;
            cleanUpCommentPanel();
        }
    }
    

    return {
        setCommentLister,
    }
}

const facebookCommentUtility = commentSection();
facebookCommentUtility.setCommentLister();