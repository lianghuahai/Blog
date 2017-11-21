
handleUnlike = () => {
    alert('you suck')
}


$('#submitBtn').click(() => {
    createNewComment();
})

createNewComment = () => {
    var inputValue = $('#commentValue').val();
    if (inputValue == "") {
        alert('Please enter a value in the comment!!!');
    } else {
        
        $('#commentContainer').append(`
        <div class="commentBox">
        <div class="commentHeadleft clearfix">
            <div class="float-left">
                <div class="userInfo">
                    <img src="pepe.jpeg" alt="">
                    <div class="userDetails">
                        <p id="userName">Amy Bombb</p>
                        <p id="userPosition">Account Manager</p>
                    </div>
                </div>
            </div>
            <div class="float-right" id="date">
                <p>10/10/2017</p>
            </div>
        </div>
        <div class="commentBody">
        ${inputValue}
        </div>
        <div id="commentFooter">
            <div class="float-right">
                <div class="viewResponse">
                    <span>
                            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                            <a id="unlikeBtn" onclick="handleUnlike()">Dislike </a>
                        </span>
                    <span>
                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>            
                            <a id="bookmarkBtn">Bookmark</a>
                        </span>
                    <span>
                            <i class="fa fa-share-alt-square" aria-hidden="true"></i>
                            <a id="shareBtn">Share</a>
                        </span>
                </div>
            </div>
        </div>
        `)
    }
}