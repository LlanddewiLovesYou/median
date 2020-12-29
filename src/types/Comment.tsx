export interface Comment {
  text: String;
  user: userCommentResponse;
  postId: String;
  updatedAt: Date;
}

interface userCommentResponse {
  userName: String;
  userId: String;
}
