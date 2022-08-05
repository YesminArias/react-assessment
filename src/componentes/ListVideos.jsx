import React from "react";
import Card from "./CardVideo/CardVideo";

export default function ListVideos({ videos }) {
  return (
    <div>
      {videos &&
        videos.map((e) => {
          return (
            <Card
              key={e.questionId}
              video={e.src}
              questionId={e.questionId}
              comments={e.comments}
            />
          );
        })}
    </div>
  );
}
