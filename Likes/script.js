var likes = [0, 0, 0]

function like(element) {
    var comment = element.parentElement.parentElement; // id of parent comment box

    var likes_str = element.parentElement.querySelector("p.likes"); // id of likes string for this button
    
    var like_id = parseInt(comment.id[7]);
    likes[like_id-1]++;
    likes_str.innerText = likes[like_id-1] + " Like(s)";
}