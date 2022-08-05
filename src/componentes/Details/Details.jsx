import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDetail, getApplications, resState } from "../../Redux/action/index";
import { useSelector, useDispatch } from "react-redux";
import ListVideos from "../ListVideos";
import "./Details.css";
import Button from "@mui/material/Button";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailCandidate = useSelector((e) => e.detail);
  const detailApp = useSelector((e) => e.Applications);

  useEffect(() => {
    dispatch(getDetail(id));
    if (detailCandidate.applicationId) {
      dispatch(getApplications(detailCandidate.applicationId));
    }
  }, [detailCandidate.applicationId, dispatch, id]);

  return (
    <div className="containerDetail">
      <div >
        <Link to="/" style={{ textDecoration: "inherit" }} className="containerButton">
          <Button  color="secondary" variant="contained" onClick={resState}>
            Home
          </Button>
        </Link>
        {detailCandidate && detailApp.videos ? (
          <ListVideos
            key={detailCandidate.applicationId}
            idApplicationId={detailCandidate.applicationId}
            videos={detailApp.videos}
          ></ListVideos>
        ) : (
          <div>El candidato no tiene Aplicaciones</div>
        )}
      </div>
    </div>
  );
}
