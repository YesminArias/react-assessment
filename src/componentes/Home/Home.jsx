import React, { useEffect } from "react";
import { getCandidates, resState } from "../../Redux/action/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import './Home.css';


export default function Home() {
  const dispatch = useDispatch();
  const listcandidates = useSelector((e) => e.candidates);

  useEffect(() => {
    dispatch(getCandidates());
    dispatch(resState());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2 className="title">Listado de Candidatos</h2>
      </div>

      <List>
        {listcandidates &&
          listcandidates.map((e) => {
            return (
              <div className="container" >
                <List component="nav"   aria-label="main mailbox folders">
                  <ListItemButton  >
                    <Link
                     
                      key={e.id}
                      to={"/detail/" + e.id}
                      style={{ textDecoration: "inherit" }}
                      
                    >
                      <ListItemText primary={e.name} />
                    </Link>
                  </ListItemButton>
                </List>
              </div>
            );
          })}
      </List>
    </div>
  );
}
