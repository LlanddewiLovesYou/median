import { User } from "./types/User";
import { Post } from "./types/Post";

export const UserFactory = (props?: Object): User => {
  const defaultUser = {
    name: "Ian Del Duca",
    admin: true,
  };
  return {
    ...defaultUser,
    ...props,
  };
};

export const PostFactory = (props?: Object): Post => {
  const defaultPost = {
    id: "post-title-here",
    title: "Post Title Here",
    subtitle: "Subtitle Here",
    body: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
    `,
    claps: 1979,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    readTime: 5,
    author: "Ian Del Duca",
    imageUrl:
      "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg",
  };
  return {
    ...defaultPost,
    ...props,
  };
};
