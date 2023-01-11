import "./PostBlog.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
type obj = {
  data: string
  image: string
  id: any
  date: any
  like: number
}
export const PostBlog = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [output, setOutput] = useState<any | []>([]);
  const [img, setImg] = useState("");
  const [disable, setDisable] = useState(false)
  // const [like, setlike] = useState(0)
  const date = new Date()
  // functions for taking the value from input boxes
  const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const UploadFileHandler = (event: any) => {
    // upload abd display image
    let p1 = URL.createObjectURL(event.target.files[0]);
    setImg(p1);
  };
  //   post button function
  const postHandler = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    setComment("");
    var obj: obj = {
      data: comment,
      image: img,
      id: Math.random(),
      date: date,
      like: 0
    };
    console.log(obj.date);
    if (obj.data === "") {
      alert("Please write something");
    } else {
      setDisable(false)
      setOutput([...output, obj]);
    }
  };

  //   edit function
  const editHandler = (val: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    for (let i = 0; i < output.length; i++) {
      setDisable(true)
      if (val === output[i].id) {
        setComment([output[i].data] as any);
        output.splice(i, 1);
      }
      setOutput([...output]);
    }
  };
  //   delete function
  const deleteHandler = (val: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    for (let i = 0; i < output.length; i++) {
      if (val === output[i].id) {
        output.splice(i, 1);
      }
    }
    setOutput([...output]);
  };
  //   back to main page
  const backButtonHandler = () => {
    navigate("/");
  };
  const LikeHandler = (val: any) => {
    for (let i = 0; i < output.length; i++) {
      if (val === output[i].id) {
        output[i].like += 1;
    setOutput([...output]);

      }
    }
  }
  return (
    <>
      <center>
        <button
          onClick={backButtonHandler}
          className="backButton"
          style={{ marginRight: "80%" }}
        >
          Back
        </button>
        <div className="comment">
          <textarea
            name=""
            id=""
            value={comment}
            onChange={commentHandler}
            placeholder="write comment Here"
          ></textarea>
          <br />
          <input
            type="file"
            name="photo"
            id="files"
            onChange={UploadFileHandler}
          />
          <br />
          <button className="postbutton" onClick={postHandler}>
            post
          </button>
          <ul>
            <div className="BlogContainer" key={Math.random()}>
              {output.map((element: any) => (
                <div className="Posted" key={Math.random()}>
                  <img id="img1" src={element.image} alt="" />
                  <div className="CaptionDiv">
                    {element.data}
                    {""} <br />
                    <br />

                    <div style={{ marginTop: "9%" }}>

                      <button disabled={disable} onClick={() => editHandler(element.id)} className="fa fa-pencil-square-o action" style={{ fontSize: "36px", color: "dodgerblue" }}></button>
                      <button className="material-icons action" style={{ fontSize: "40px", color: "dodgerblue", marginTop: "12%" }} value={element.id} onClick={() => deleteHandler(element.id)}>&#xe872;</button>
                      <i onClick={() => LikeHandler(element.id)} className='fas fa-thumbs-up' style={{ fontSize: "36px", color: "dodgerblue", marginTop: "2%" }}>{element.like}</i>
                      <br />
                      updated date {element.date.toJSON().slice(0, 10)} {" "}
                      at {element.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>{" "}
        </div>
      </center>
    </>
  );
};