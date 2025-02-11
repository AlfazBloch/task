import React, { useEffect } from "react";

const Overview = () => {
  useEffect(() => {
    let feature_descriptionEles = document.querySelectorAll(
      ".feature_description"
    );
    let pros_media_itemEles = document.querySelectorAll(".pros_media_item");

    feature_descriptionEles.forEach((feature, index) => {
      feature.addEventListener("click", () => {
        let prevActiveFeature = document.querySelector(
          "#active.feature_description"
        );
        let prevActiveVideo = document.querySelector("#active.pros_media_item");

        prevActiveFeature.removeAttribute("id");
        prevActiveVideo.removeAttribute("id");

        prevActiveVideo.style.display = "none";
        prevActiveFeature.children[1].style.display = "none";

        feature.setAttribute("id", "active");
        pros_media_itemEles[index].setAttribute("id", "active");

        feature.children[1].style.display = "block";
        pros_media_itemEles[index].style.display = "block";
      });
    });
  });

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1400px",
        margin: "auto",
        justifyContent: "center",
        color: "#25265e",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Overcome your fear of coding with Programiz PRO's
      </h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          className="pros_features"
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            maxWidth: "500px",
            marginTop: "4px",
            maxHeight: "666px",
          }}
        >
          <div
            className="feature_description"
            style={{
              borderTop: "1px solid #d3dce6",
              borderBottom: "1px solid #d3dce6",
              lineHeight: "1.3",
              padding: "3px 10px",
              cursor: "pointer",
              flexGrow: "1",
            }}
            id="active"
          >
            <h3
              style={{
                margin: "5px 0px",
                fontSize: "1.55rem",
              }}
            >
              Hands-on learning
            </h3>

            <p
              style={{
                margin: "5px 0px",
                maxWidth: "90%",
                wordWrap: "break-word",
              }}
            >
              Practice what you learn with our interactive courses, practice
              problems, and quizzes.
            </p>
          </div>

          <div
            className="feature_description"
            style={{
              borderTop: "1px solid #d3dce6",
              borderBottom: "1px solid #d3dce6",
              lineHeight: "1.3",
              padding: "3px 10px",
              cursor: "pointer",
              flexGrow: "1",
            }}
          >
            <h3
              style={{
                margin: "5px 0px",
                fontSize: "1.55rem",
              }}
            >
              Practice projects
            </h3>

            <p
              style={{
                margin: "5px 0px",
                maxWidth: "90%",
                wordWrap: "break-word",
                display: "none",
              }}
            >
              Build your confidence through guided real-world projects.
            </p>
          </div>

          <div
            className="feature_description"
            style={{
              borderTop: "1px solid #d3dce6",
              borderBottom: "1px solid #d3dce6",
              lineHeight: "1.3",
              padding: "3px 10px",
              cursor: "pointer",
              flexGrow: "1",
            }}
          >
            <h3
              style={{
                margin: "5px 0px",
                fontSize: "1.55rem",
              }}
            >
              Coding challenges
            </h3>

            <p
              style={{
                margin: "5px 0px",
                maxWidth: "90%",
                wordWrap: "break-word",
                display: "none",
              }}
            >
              Level up your skills with our challenges and compete on our global
              leaderboard.
            </p>
          </div>

          <div
            className="feature_description"
            style={{
              borderTop: "1px solid #d3dce6",
              borderBottom: "1px solid #d3dce6",
              lineHeight: "1.3",
              padding: "3px 10px",
              cursor: "pointer",
              flexGrow: "1",
            }}
          >
            <h3
              style={{
                margin: "5px 0px",
                fontSize: "1.55rem",
              }}
            >
              AI mentor
            </h3>

            <p
              style={{
                margin: "5px 0px",
                maxWidth: "90%",
                wordWrap: "break-word",
                display: "none",
              }}
            >
              Get personalized AI help with code explanation, error fixing, and
              feedback for improvements.
            </p>
          </div>

          <div
            className="feature_description"
            style={{
              borderTop: "1px solid #d3dce6",
              borderBottom: "1px solid #d3dce6",
              lineHeight: "1.3",
              padding: "3px 10px",
              cursor: "pointer",
              flexGrow: "1",
            }}
          >
            <h3
              style={{
                margin: "5px 0px",
                fontSize: "1.55rem",
              }}
            >
              Professional certificates
            </h3>

            <p
              style={{
                margin: "5px 0px",
                maxWidth: "90%",
                wordWrap: "break-word",
                display: "none",
              }}
            >
              Showcase your expertise and stand out to your potential employers.
            </p>
          </div>
        </div>

        <div
          className="pros_media"
          style={{
            maxHeight: "362px",
            maxWidth: "666px",
            height: "362px",
            width: "666px",
            border: "2px solid #d3dce6",
            borderRadius: "8px",
          }}
        >
          <video
            src="https://www.programiz.com/sites/all/themes/programiz/assets/pro-images/features-demos/pro-interactive-course-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pros_media_item"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              borderRadius: "8px",
            }}
            id="active"
          ></video>

          <video
            src="https://www.programiz.com/sites/all/themes/programiz/assets/pro-images/features-demos/pro-project-demo.mp4"
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop="loop"
            className="pros_media_item"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              borderRadius: "8px",
              display: "none",
            }}
          ></video>

          <video
            src="https://www.programiz.com/sites/all/themes/programiz/assets/pro-images/features-demos/pro-challenges-demo.mp4"
            autoPlay={true}
            muted={true}
            loop="loop"
            className="pros_media_item"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              borderRadius: "8px",
              display: "none",
            }}
          ></video>

          <video
            src="https://www.programiz.com/sites/all/themes/programiz/assets/pro-images/features-demos/pro-sensai-demo.mp4"
            autoPlay={true}
            muted={true}
            loop="loop"
            className="pros_media_item"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              borderRadius: "8px",
              display: "none",
            }}
          ></video>

          <video
            src="https://www.programiz.com/sites/all/themes/programiz/assets/pro-images/features-demos/pro-certificate-demo.mp4"
            autoPlay={true}
            muted={true}
            loop="loop"
            className="pros_media_item"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              borderRadius: "8px",
              display: "none",
            }}
          ></video>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:'30px'
        }}
      >
        <div>
          <a
            href="#"
            style={{
              color: "white",
              backgroundColor: "#0556f3",
              padding: "10px 20px",
              textDecoration: "none",
              fontSize:'1.55rem',
              fontWeight:'800',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:'4px'
            }}
          >
            Try Programiz PRO &nbsp;
            <span style={{fontSize:'1.80rem'}}>&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Overview;
