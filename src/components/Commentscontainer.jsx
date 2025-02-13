import React from "react";

const commentsData = [
  {
    name: "Sankha Subhra Moitra",
    text: "Lorem ipsum kydekd sdcsc weeftbjgkbs1",
    replies: [
      {
        name: "Sankha Subhra Moitra",
        text: "Lorem ipsum kydekd sdcsc weeftbjgkbs99",
        replies: [],
      },
    ],
  },
  {
    name: "Legend",
    text: "Jnina tw ree...!",
    replies: [
      {
        name: " Sandy Legend ",
        text: "Out of Syallabus!",
        replies: [],
      },
    ],
  },
  {
    name: "Chiku Kohli",
    text: "Comeonnnnn!!!.....",
    replies: [],
  },
  {
    name: "Akash Kinkar Pandey",
    text: "Lorem ipsum kydekd sdcsc weeftbjgkbs4",
    replies: [
      {
        name: "Akash Kinkar Pandey",
        text: "Lorem ipsum kydekd sdcsc weeftbjgsan1",
        replies: [
          {
            name: "Akash Kinkar Pandey",
            text: "Lorem ipsum kydekd sdcsc weeftbjgkbs6san2",
            replies: [],
          },
          {
            name: "Akash Kinkar Pandey",
            text: "Lorem ipsum kydekd sdcsc weeftbjgkbs7san3",
            replies: [
              {
                name: "Akash Kinkar Pandey",
                text: "Lorem ipsum kydekd sdcsc weeftbjgkbs8san4",
                replies: [],
              },
            ],
          },
          {
            name: "Akash Kinkar Pandey",
            text: "Lorem ipsum kydekd sdcsc weeftbjgkbs9san5",
            replies: [],
          },
        ],
      },
      {
        name: "Akash Kinkar Pandey",
        text: "Lorem ipsum kydekd sdcsc weeftbjgkbs10san5=6",
        replies: [],
      },
    ],
  },
  {
    name:"san",
    text:"shiv",
    replies:[
      {
       name:"subhra",
       text:"ram",
       replies:[]
      },
      {
        name:"Moitra",
       text:"parvati",
       replies:[{
        name:"Kashyap",
       text:"Rishi",
       replies:[]
       }]
      }
    ]
  }
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        alt="user"
        src="http://iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="w-12 h-12"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({comments}) => {
  return (
  <>
    {comments.map((comment,index) => {
      return (
        <div key={index}>
      <Comment  data={comment}></Comment>
      <div className="pl-5 border border-l-black ml-5">
      <CommentList comments={comment.replies}/>


      </div>

      </div>
      )
    })}
  </>
  );
};

const Commentscontainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]}></Comment> */}
      <CommentList comments={commentsData}></CommentList>
    </div>
  );
};

export default Commentscontainer;
