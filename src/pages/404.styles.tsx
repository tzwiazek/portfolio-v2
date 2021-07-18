import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { NotFoundInterface, NotFoundLinkInterface } from "../shared/interfaces/components/404.interface";

export const NotFound = styled.div<NotFoundInterface>`
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  position:absolute;
  padding-top:0;
  text-align:center;
`;

export const NotFoundLink = styled((props: NotFoundLinkInterface) => <Link {...props} />)`
  text-decoration:none;
  height:60px;
  width:240px;
  border:1px solid black;
  color:black;
  margin:auto;
  line-height:0px;
  border-radius:30px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:0.7s;
  background:white;

  &:hover {
    background:black;
    color:white;
    transition:0.4s;
  }
`;